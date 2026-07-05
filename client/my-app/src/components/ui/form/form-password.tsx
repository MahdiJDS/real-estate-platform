"use client";

import { useState } from "react";
import {
    useController,
    FieldValues,
    FieldPath,
    Control,
} from "react-hook-form";

import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Field,
    FieldContent,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    placeholder?: string;
};

export function PasswordField<T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
}: Props<T>) {
    const [showPassword, setShowPassword] = useState(false);

    const { field, fieldState } = useController({
        control,
        name,
    });

    return (
        <Field data-invalid={fieldState.invalid}>
            <FieldContent>

                <FieldLabel>{label}</FieldLabel>

                <div className="relative">

                    <Input
                        {...field}
                        value={field.value ?? ""}
                        type={showPassword ? "text" : "password"}
                        placeholder={placeholder}
                    />

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() =>
                            setShowPassword((prev) => !prev)
                        }
                    >
                        {showPassword ? (
                            <EyeOff className="size-4" />
                        ) : (
                            <Eye className="size-4" />
                        )}
                    </Button>

                </div>

                <FieldError errors={[fieldState.error]} />

            </FieldContent>
        </Field>
    );
}