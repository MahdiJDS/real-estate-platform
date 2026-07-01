"use client";

import { useController, FieldValues, FieldPath, Control } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldError, FieldContent } from "@/components/ui/field";

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    placeholder?: string;
};

export function TextareaField<T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
}: Props<T>) {
    const { field, fieldState } = useController({
        control,
        name,
    });

    return (
        <Field data-invalid={fieldState.invalid}>
            <FieldContent>
                <FieldLabel>{label}</FieldLabel>

                <Textarea
                    {...field}
                    value={field.value ?? ""}
                    placeholder={placeholder}
                />

                <FieldError errors={[fieldState.error]} />
            </FieldContent>
        </Field>
    );
}