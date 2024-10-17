"use client";

import { useState } from "react";
import Image from "next/image";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Property } from "@prisma/client";
import { Trash } from "lucide-react";

import { getCategories } from "@/data/categories";

import CustomSheet from "./CustomSheet";
import FileUpload from "./FileUpload";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { Button } from "@/components/ui/button";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { deletePropertyById, updatePropertyById } from "@/actions/property";

export default function PropertySheet({ property }: { property: Property }) {
  const [data, setData] = useState({
    image: property.image,
    name: property.name,
    client: property.client,
    location: {
      city: property.location.city,
      state: property.location.state,
    },
    price: property.price,
    size: property.size,
    numberOfBedrooms: property.numberOfBedrooms,
    numberOfBathrooms: property.numberOfBathrooms,
    info: property.info,
    description: property.description,
    category: property.category,
  });

  const { data: categories } = useQuery({
    queryKey: ["fetch-categories"],
    queryFn: async () => {
      const data = await getCategories();
      return data;
    },
  });

  categories && console.log(categories);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const keys = name.split(".");

    if (keys.length === 2) {
      setData((prevData: any) => ({
        ...prevData,
        [keys[0]]: {
          ...prevData[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]:
          name === "numberOfBedrooms" || name === "numberOfBathrooms"
            ? Number(value)
            : value,
      }));
    }
  };

  const handleSelect = (category: string) => {
    setData({ ...data, category });
  };

  // Action to update a property by its ID
  const { mutate: server_update_property } = useMutation({
    mutationKey: ["update-property"],
    mutationFn: (formData: FormData) => {
      return updatePropertyById({ ...data }, property.id);
    },
    onError: () => {
      toast("Something went wrong. Please try again");
    },
    onSuccess: () => {
      toast("Updated", {
        description: "Property details updated successfully",
      });
    },
  });

  // Action to delete a user message by its ID
  const { mutate: server_delete_property } = useMutation({
    mutationKey: ["delete-property"],
    mutationFn: () => {
      return deletePropertyById(property.id);
    },
    onError: () => {
      toast("Something went wrong. Please try again");
    },
    onSuccess: () => {
      toast("Deleted", {
        description: "Property deleted successfully",
      });
    },
  });

  return (
    <CustomSheet
      title="Property Details"
      description="View or edit property details."
      buttonText="View property details"
    >
      <form
        action={server_update_property}
        className="grid gap-4 py-8 space-y-3"
      >
        {!data?.image ? (
          <FileUpload
            endpoint="propertyImage"
            onChange={(url) => {
              toast(`${url}`);
              setData({ ...data, image: url });
            }}
          />
        ) : (
          <div className="flex items-center gap-8">
            <div className="relative w-44 h-40 rounded-md overflow-hidden">
              <Image src={data.image} alt="Property" fill sizes="320px" />
            </div>

            <Button
              variant="ghost"
              type="button"
              onClick={() => setData({ ...data, image: "" })}
            >
              Change
            </Button>
          </div>
        )}
        <FormInput
          name="name"
          value={data.name}
          id="name"
          hasLabel
          labelName="name"
          onChange={handleChange}
        />
        <FormInput
          name="client"
          value={data.client}
          id="client"
          hasLabel
          labelName="client"
          onChange={handleChange}
        />
        <FormInput
          name="price"
          value={data.price}
          id="price"
          hasLabel
          labelName="price"
          onChange={handleChange}
        />
        <FormInput
          name="size"
          value={data.size}
          id="size"
          hasLabel
          labelName="size"
          onChange={handleChange}
        />
        <FormTextArea
          name="description"
          value={data.description}
          id="description"
          className="min-h-[250px] resize-none"
          hasLabel
          labelName="description"
          onChange={handleChange}
        />
        <FormTextArea
          name="info"
          value={data.info}
          id="info"
          className="min-h-[200px] resize-none"
          hasLabel
          labelName="info"
          onChange={handleChange}
        />
        <FormInput
          name="location.city"
          value={data.location.city}
          id="city"
          hasLabel
          labelName="city"
          onChange={handleChange}
        />
        <FormInput
          name="location.state"
          value={data.location.state}
          id="state"
          hasLabel
          labelName="state"
          onChange={handleChange}
        />
        <FormInput
          name="numberOfBedrooms"
          type="number"
          value={data.numberOfBedrooms}
          id="numberOfBedrooms"
          hasLabel
          labelName="Number Of Bedrooms"
          onChange={handleChange}
        />
        <FormInput
          name="numberOfBathrooms"
          type="number"
          value={data.numberOfBathrooms}
          id="numberOfBathrooms"
          hasLabel
          labelName="Number Of Bathrooms"
          onChange={handleChange}
        />
        <Select defaultValue={data.category} onValueChange={handleSelect}>
          <SelectTrigger id="roles" className="w-full">
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="duplex">Duplex</SelectItem>
              <SelectItem value="high-rise">High Rise</SelectItem>
              <SelectItem value="bungalow">Bungalow</SelectItem>
              <SelectItem value="2-storey">2 Storey</SelectItem>
              <SelectItem value="3-storey">3 Storey</SelectItem>
              <SelectItem value="skyscrapper">Skyscrapper</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="button"
              variant="destructive"
              className="text-white p-4 ml-auto"
              onClick={() => server_delete_property()}
            >
              <Trash />
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit" className="text-white max-w-[150px] w-full">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </CustomSheet>
  );
}
