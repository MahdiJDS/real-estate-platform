"use client";

import { useEffect, useState } from "react";
import {
    useController,
    FieldValues,
    FieldPath,
    Control,
} from "react-hook-form";

import {
    Field,
    FieldLabel,
    FieldError,
    FieldContent,
} from "@/components/ui/field";

type Props<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
};

function isFile(value: unknown): value is File {
    return value instanceof File;
}

export function FileField<T extends FieldValues>({
    control,
    name,
    label,
}: Props<T>) {
    const { field, fieldState } = useController({
        control,
        name,
    });

    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (isFile(field.value)) {
            const url = URL.createObjectURL(field.value);
            setPreview(url);

            return () => URL.revokeObjectURL(url);
        }

        setPreview(null);
    }, [field.value]);

    return (
        <Field data-invalid={fieldState.invalid}>
            <FieldContent>
                <FieldLabel>{label}</FieldLabel>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        field.onChange(e.target.files?.[0] ?? null)
                    }
                />

                {preview && (
                    <img
                        src={preview}
                        alt="preview"
                        className="w-full max-h-64 object-cover rounded-lg"
                    />
                )}

                <FieldError errors={[fieldState.error]} />
            </FieldContent>
        </Field>
    );
}