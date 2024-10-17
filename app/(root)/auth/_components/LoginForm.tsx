"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

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
import { useMutation } from "@tanstack/react-query";
import { login } from "@/actions/login";
import { toast } from "react-toastify";
import { signInWithGitHub, signInWithGoogle } from "@/data/auth";

export function LoginForm() {
  const searchParams = useSearchParams();

  searchParams.get("error") === "OAuthAccountNotLinked" // display toast if email already exists with a different provider
    ? toast.error("Email already in use", {
        toastId: "duplicate email error toast",
      })
    : null;

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function resetForm() {
    setData({
      email: "",
      password: "",
    });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const { mutate: server_login, isPending } = useMutation({
    mutationFn: login,
    onSettled: () => {
      resetForm();
    },
    onSuccess: () => {
      toast.success("Login successful");
    },
    onError: () => {
      toast.error("Something went wrong. Please try again");
    },
  });

  return (
    <Card className="mx-auto max-w-md font-raleway">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription className="font-playfair-display">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action={() =>
            server_login({ email: data.email, password: data.password })
          }
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full text-white p-7 bg-red-1000">
              {isPending ? <div className="loader border-white" /> : <>Login</>}
            </Button>
            <Button
              type="button"
              className="w-full p-7 text-white"
              onClick={signInWithGitHub}
            >
              Login with GitHub
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full p-7"
              onClick={signInWithGoogle}
            >
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm font-playfair-display">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="underline">
              Sign up
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
