"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import React, { ChangeEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/actions/register";
import { signInWithGitHub, signInWithGoogle } from "@/data/auth";

export function SignupForm() {
  const router = useRouter();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function resetForm() {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const { mutate: server_register, isPending } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success("User sign up successful");
      router.push("/auth/login");
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
    onSettled: () => {
      resetForm();
    },
  });

  return (
    <Card className="mx-auto max-w-md font-raleway">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription className="font-playfair-display">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={() => server_register({ ...data })}>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  name="firstName"
                  placeholder="Max"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  name="lastName"
                  placeholder="Robinson"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="p@example.com"
                required
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full text-white p-7 bg-red-1000">
              {isPending ? (
                <div className="loader border-white" />
              ) : (
                <>Create an account</>
              )}
            </Button>
            <Button
              type="button"
              onClick={signInWithGitHub}
              className="w-full p-7 text-white"
            >
              Sign up with GitHub
            </Button>
            <Button
              type="button"
              onClick={signInWithGoogle}
              variant="outline"
              className="w-full p-7"
            >
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm font-playfair-display">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
