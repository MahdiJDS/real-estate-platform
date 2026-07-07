import { useAuthStore } from "@/store/auth.store";
import axios, {
    AxiosError,
    InternalAxiosRequestConfig,
} from "axios";


export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

api.interceptors.request.use((config) => {

    const token =
        useAuthStore.getState().accessToken;

    if (token) {

        config.headers.Authorization =
            `Bearer ${token}`;
    }

    return config;

});

api.interceptors.response.use(

    (response) => response,

    async (error: AxiosError) => {

        const originalRequest =
            error.config as InternalAxiosRequestConfig & {
                _retry?: boolean;
            };

        if (!originalRequest) {
            return Promise.reject(error);
        }

        if (error.response?.status !== 401) {
            return Promise.reject(error);
        }

        if (originalRequest._retry) {
            useAuthStore.getState().logout();

            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
                {},
                {
                    withCredentials: true,
                }
            );

            const accessToken = response.data.accessToken;

            useAuthStore
                .getState()
                .setAccessToken(accessToken);

            originalRequest.headers.Authorization =
                `Bearer ${accessToken}`;

            return api(originalRequest);

        } catch (refreshError) {

            useAuthStore.getState().logout();

            return Promise.reject(refreshError);

        }

    }

);