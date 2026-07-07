"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createPropertySchema, CreatePropertyForm } from "@/schema/createProperty.schema";
import { useCreateProperty } from "@/hook/use-create-property";

import { InputField, NumberField, TextareaField, FileField } from "@/components/ui/form/index";
import { SubmitButton } from "../ui/form/submit-button";

export default function CreatePropertyForms() {
    const { mutate, isPending } = useCreateProperty();

    const form = useForm<CreatePropertyForm>({
        resolver: zodResolver(createPropertySchema),
        defaultValues: {
            title: "",
            description: "",
            city: "",
            address: "",
            price: 0,
            area: 0,
            bedrooms: 0,
            bathrooms: 0,
            image: null,
        },
    });


    const onSubmit = (data: CreatePropertyForm) => {
        mutate(data);
    };

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <InputField
                control={form.control}
                name="title"
                label="Title"
            />

            <TextareaField
                control={form.control}
                name="description"
                label="Description"
            />

            <InputField
                control={form.control}
                name="city"
                label="City"
            />

            <InputField
                control={form.control}
                name="address"
                label="Address"
            />

            <NumberField
                control={form.control}
                name="price"
                label="Price"
            />

            <NumberField
                control={form.control}
                name="area"
                label="Area"
            />

            <NumberField
                control={form.control}
                name="bedrooms"
                label="Bedrooms"
            />

            <NumberField
                control={form.control}
                name="bathrooms"
                label="Bathrooms"
            />

            <FileField
                control={form.control}
                name="image"
                label="Property Image"
            />

            <SubmitButton
                isPending={isPending}
            >
                Create Property
            </SubmitButton>
        </form>
    );
}
