import { useState } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import Modal from "./Modal";
import FormInput from "./FormInput";
import FileUpload from "./FileUpload";
import FormTextArea from "./FormTextArea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { createProperty } from "@/actions/property";

import useCreatePropertyModal from "@/hooks/useCreatePropertyModal";
import { PropertySchema } from "@/lib/schema";

type PropertyType = z.infer<typeof PropertySchema>;

export default function CreatePropertyModal() {
  const isOpen = useCreatePropertyModal((state) => state.isOpen);
  const onClose = useCreatePropertyModal((state) => state.onClose);

  const [data, setData] = useState<PropertyType | null>(null);

  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm<PropertyType>({
    resolver: zodResolver(PropertySchema),
    defaultValues: {
      name: "",
      client: "",
      image: "",
      category: "",
      info: "",
      description: "",
      price: "",
      size: "",
      numberOfBedrooms: 0,
      numberOfBathrooms: 0,
      location: {
        city: "",
        state: "",
      },
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  // Action to create a new property
  const { mutate: server_create_property } = useMutation({
    mutationKey: ["create-property"],
    mutationFn: (data: PropertyType) => {
      return createProperty(data);
    },
    onError: () => {
      toast("Something went wrong. Please try again");
    },
    onSuccess: () => {
      toast("Created", {
        description: "Property created successsfully",
      });
      reset();
      onClose();
    },
  });

  const onSubmit = async (values: PropertyType) => {
    setData(values);

    server_create_property(values);
  };

  return (
    <div className="px-4 font-inter">
      <Modal
        title="Create new property"
        description="Create a new property for your real estate portfolio"
        isOpen={isOpen}
        onChange={onChange}
        className="w-full max-w-xl mx-auto"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {!data?.image ? (
            <FileUpload
              endpoint="propertyImage"
              onChange={(url) => {
                toast(`${url}`);
                setValue("image", url);
              }}
            />
          ) : (
            <div className="flex items-center gap-8">
              <div className="relative w-60 h-56 rounded-md overflow-hidden">
                <Image src={data.image} alt="Property" fill sizes="320px" />
              </div>

              <Button variant="ghost" onClick={() => reset({ image: "" })}>
                Change
              </Button>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 mt-4">
            <FormInput
              type="text"
              placeholder="Property Name"
              id="name"
              error={errors.name ? errors.name?.message : ""}
              {...register("name")}
            />
            <FormInput
              type="text"
              placeholder="Client"
              id="client"
              error={errors.client ? errors.client?.message : ""}
              {...register("client")}
            />

            <FormInput
              type="text"
              placeholder="Price"
              id="price"
              error={errors.price ? errors.price?.message : ""}
              {...register("price")}
            />
            <FormInput
              placeholder="Size (in sqft)"
              id="size"
              type="number"
              error={errors.size ? errors.size?.message : ""}
              {...register("size")}
            />

            <FormTextArea
              placeholder="Property Info"
              id="info"
              error={errors.info ? errors.info?.message : ""}
              {...register("info")}
            />
            <FormTextArea
              placeholder="Description"
              id="desc"
              error={errors.description ? errors.description?.message : ""}
              {...register("description")}
            />

            <FormInput
              type="number"
              placeholder="Number of Bedrooms"
              id="bedrooms"
              error={
                errors.numberOfBedrooms ? errors.numberOfBedrooms?.message : ""
              }
              {...register("numberOfBedrooms", { valueAsNumber: true })}
            />
            <FormInput
              type="number"
              placeholder="Number of Bathrooms"
              id="bathrooms"
              error={
                errors.numberOfBathrooms
                  ? errors.numberOfBathrooms?.message
                  : ""
              }
              {...register("numberOfBathrooms", { valueAsNumber: true })}
            />
            <FormInput
              type="text"
              placeholder="City"
              id="city"
              error={errors.location?.city ? errors.location.city?.message : ""}
              {...register("location.city")}
            />
            <FormInput
              type="text"
              placeholder="State"
              id="state"
              error={
                errors.location?.state ? errors.location.state?.message : ""
              }
              {...register("location.state")}
            />

            <Controller
              control={control}
              name="category"
              render={({ field: { value, onChange, ref } }) => (
                <Select onValueChange={onChange} defaultValue={value}>
                  <SelectTrigger
                    id="category"
                    className="w-full md:col-span-2 px-4 py-6"
                    ref={ref}
                  >
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="high-rise">High Rise</SelectItem>
                      <SelectItem value="bunaglow">Bungalow</SelectItem>
                      <SelectItem value="2-storey">2-Storey</SelectItem>
                      <SelectItem value="3-storey">3-Storey</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={!isDirty || !isValid}
            className="text-white mt-8 w-full h-12"
          >
            Create
          </Button>
        </form>
      </Modal>
    </div>
  );
}
