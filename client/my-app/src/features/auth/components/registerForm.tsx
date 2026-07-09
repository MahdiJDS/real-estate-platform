"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    registerSchema,
    RegisterFormValues,
} from "../schema/register.schema";

import { useRegister } from "../hooks/useRegister";

import {
    InputField,
    PasswordField,
    SubmitButton,
} from "@/components/ui/form";

export function RegisterForm() {

    const { mutate, isPending } =
        useRegister();

    const {
        control,
        handleSubmit,
    } = useForm<RegisterFormValues>({

        resolver: zodResolver(registerSchema),

        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },

    });

    function onSubmit(data: RegisterFormValues) {
        mutate(data);
    }

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >

            <InputField
                control={control}
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
            />

            <InputField
                control={control}
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
            />

            <InputField
                control={control}
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
            />

            <PasswordField
                control={control}
                name="password"
                label="Password"
                placeholder="Enter your password"
            />

            <PasswordField
                control={control}
                name="confirmPassword"
                label="confirmPassword"
                placeholder="Enter your password again"
            />

            <SubmitButton isPending={isPending}>
                Register
            </SubmitButton>

        </form>

    );
}