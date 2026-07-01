"use client";

import { useController, FieldValues, FieldPath, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError, FieldContent } from "@/components/ui/field";

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    placeholder?: string;
};

export function NumberField<T extends FieldValues>({
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

                <Input
                    type="number"
                    value={field.value ?? ""}
                    placeholder={placeholder}
                    onChange={(e) =>
                        field.onChange(
                            e.target.value === "" ? "" : Number(e.target.value)
                        )
                    }
                />

                <FieldError errors={[fieldState.error]} />
            </FieldContent>
        </Field>
    );
}