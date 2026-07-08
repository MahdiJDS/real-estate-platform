import { api } from "@/lib/axios";
import { User } from "@/types/User.type";

interface RegisterDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export async function register(
    data: RegisterDto
) {

    const response = await api.post<User>(
        "/auth/register",
        data
    );

    return response.data;
}