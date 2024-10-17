import React from "react";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";

import Button from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ErrorPage = () => {
  return (
    <main className="py-24 px-4">
      <Card className="mx-auto max-w-md font-raleway p-4 border-none">
        <CardHeader className="flex flex-col gap-8 items-center">
          <CardTitle className="text-destructive">
            <TriangleAlert size={64} />
          </CardTitle>
          <CardDescription className="text-xl md:text-2xl text-center font-medium">
            Oops! Something went wrong
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-10">
          <Link href="/auth/login">
            <Button className="w-full text-white p-7">Back to Login</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
};

export default ErrorPage;
