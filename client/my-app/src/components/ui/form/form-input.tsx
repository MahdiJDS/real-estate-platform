"use client";

import { useController, FieldValues, FieldPath, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError, FieldContent } from "@/components/ui/field";

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
};

export function InputField<T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    type = "text",
}: Props<T>) {
    const { field, fieldState } = useController({
        control,
        name,
    });

    return (
        <Field data-invalid={fieldState.invalid}>
            <FieldContent>
                <FieldLabel>{label}</FieldLabel>

                <Input
                    {...field}
                    type={type}
                    value={field.value ?? ""}
                    placeholder={placeholder}
                />

                <FieldError errors={[fieldState.error]} />
            </FieldContent>
        </Field>
    );
}