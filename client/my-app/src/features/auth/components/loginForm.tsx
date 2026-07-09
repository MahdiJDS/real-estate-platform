"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginFormValues } from "../schema/login.schema";
import { useLogin } from "../hooks/useLogin";

import {
    InputField,
    PasswordField,
    SubmitButton,
} from "@/components/ui/form/index";

export function LoginForm() {
    const { mutate, isPending } = useLogin();

    const {
        control,
        handleSubmit,
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(data: LoginFormValues) {
        mutate(data);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <InputField
                control={control}
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
            />

            <PasswordField
                control={control}
                name="password"
                label="Password"
                placeholder="Enter your password"
            />

            <SubmitButton isPending={isPending}>
                Login
            </SubmitButton>
        </form>
    );
}