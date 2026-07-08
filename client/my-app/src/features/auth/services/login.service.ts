import { api } from "@/lib/axios";
import { User } from "@/types/User.type";

interface LoginDto {
    email: string;
    password: string;
}

interface LoginResponse {
    accessToken: string;
    user: User;
}

export async function login(
    data: LoginDto
) {

    const response = await api.post<LoginResponse>(
        "/auth/login",
        data
    );

    return response.data;
}