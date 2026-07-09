import axios from "axios";

export async function refresh() {

    const response = await axios.post(

        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,

        {},

        {
            withCredentials: true,
        }

    );

    return response.data;

}