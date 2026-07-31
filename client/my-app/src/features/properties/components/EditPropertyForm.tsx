"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    createPropertySchema,
    CreatePropertyForm,
    CreatePropertyInput,
} from "@/schema/createProperty.schema";


import {
    InputField,
    NumberField,
    TextareaField,
    FileField,
    SubmitButton,
} from "@/components/ui/form";


import { useUpdateProperty } from "../hooks/useUpdateProperty";
import { Property } from "@/types/property.type";


type Props = {
    property: Property;

    onSuccess?: () => void;
};


export default function EditPropertyForm({
    property,
    onSuccess,
}: Props) {


    const {
        mutate,
        isPending,
    } = useUpdateProperty();



    const form = useForm<
        CreatePropertyInput,
        unknown,
        CreatePropertyForm
    >({

        resolver: zodResolver(createPropertySchema),

        defaultValues: {

            title: property.title,
            description: property.description,
            city: property.city,
            address: property.address,

            price: property.price,
            area: property.area,

            bedrooms: property.bedrooms,
            bathrooms: property.bathrooms,

            image: null,

        },

    });



    function onSubmit(
        data: CreatePropertyForm
    ) {


        const formData = new FormData();


        Object.entries(data)
            .forEach(([key, value]) => {

                if (value === null || value === undefined)
                    return;


                if (value instanceof File) {

                    formData.append(
                        key,
                        value
                    );

                } else {

                    formData.append(
                        key,
                        String(value)
                    );

                }

            });



        mutate(
            {
                id: property.id,
                data: formData,
            },
            {
                onSuccess,
            }
        );

    }



    return (

        <form
            onSubmit={
                form.handleSubmit(onSubmit)
            }

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
                Update Property
            </SubmitButton>


        </form>

    );
}