import { object, string, enum as enum_, number } from "zod";

export const LoginSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const RegisterSchema = object({
  firstName: string({ required_error: "First name is required" }).min(
    1,
    "First name is required"
  ),
  lastName: string({ required_error: "Last name is required" }).min(
    1,
    "Last name is required"
  ),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const UserSchema = object({
  name: string({ required_error: "Name is required" }).min(
    1,
    "Name is required"
  ),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  bio: string().optional(),
  role: enum_(["USER", "ADMIN", "EDITOR"], {
    required_error: "User role is required",
  }),
});

export const MessageSchema = object({
  name: string({ required_error: "Name is required" }).min(
    1,
    "Name is required"
  ),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  message: string({ required_error: "essage is required" }).min(
    1,
    "Message is required"
  ),
});

export const PropertySchema = object({
  image: string({ required_error: "Property Image is required" }),
  name: string({ required_error: "Name is required" }),
  client: string({ required_error: "Client info is required" }),
  category: string({ required_error: "Category is required" }),
  info: string({ required_error: "Property Info is required" }),
  description: string({ required_error: "Description is required" }),
  price: string({ required_error: "Price is required" }),
  size: string({ required_error: "Size is required" }),
  numberOfBedrooms: number({
    required_error: "Number of bedrooms is required",
  }),
  numberOfBathrooms: number({
    required_error: "Number of bathrooms is required",
  }),
  location: object({
    city: string({ required_error: "City is required" }),
    state: string({ required_error: "State is required" }),
  }),
});
