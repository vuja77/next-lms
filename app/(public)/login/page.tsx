"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import "../../../app/globals.css";
import { useState } from "react";
import axios from "axios";
import { Config } from "../../../Config";
import { setCookie, hasCookie } from "cookies-next";
const FormSchema = z.object({
  mail: z.string().min(2, {
    message: "Username must be at least 6 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 6 characters.",
  }),
});
import { useRouter } from "next/navigation";
import Link from "next/link";
import RootLayout from "@/app/layout";

export default function Login() {
  const router = useRouter();
  if (hasCookie("token")) {
    router.push("/dashboard");
  }
  const [Error, setError] = useState<string>();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    LoginRequest(data);
  }
  const LoginRequest = async (data: Object) => {
    try {
      const res = await axios.post<{ success: { token: string } }>(
        Config.apiUrl + "/login",
        data
      );
      type Succes = {
        token: string;
      };
      setCookie("token", res.data.success.token);
      router.push("/dashboard");
    } catch (err: any) {
      if (err.response.data.error === "Unauthorized") {
        setError("email or password is not valid");
      }
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center p-24 flex-col">
      <div className="p-10 rounded-lg gap-5 flex-col flex  w-[400px] border file:border-0 border-border">
        <h1 className="font-bold text-2xl self-center">Welcome back!</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-2 flex flex-col"
          >
            <FormField
              control={form.control}
              name="mail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-red-800 text-sm">{Error}</p>
            <Button type="submit" className="mt-2.5" variant="Login">
              Login
            </Button>
          </form>
        </Form>
      </div>
      <p>
        You don't have an account?
        <Link href="/register" className="text-primary font-bold">
          Create Account
        </Link>
      </p>
    </div>
  );
}
