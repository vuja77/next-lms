"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
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
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import "../../../../app/globals.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Chart from "@/components/chart";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hasCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RootLayout from "../layout";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toggleTheme, initializeTheme } from "@/lib/theme";

const FormSchema = z.object({
  theme: z.string().min(0, {
    message: "Username must be at least 6 characters.",
  }),
});
export default function Appearance() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const router = useRouter();

  useEffect(() => {
    initializeTheme();
    if (!hasCookie("token")) {
      router.push("/Login");
    }
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      theme: "dark",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toggleTheme(data.theme);
  }
  return (
      <div className="flex flex-1 flex-col min-h-screen gap-2 ">
        <h1 className="text-2xl font-bold">Appearance</h1>
        <p>
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
        <Separator></Separator>
        <div className="space-y-5">
          <div>
            <h1 className="text-md font-bold">Theme</h1>
            <p>Select the theme</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        className="flex flex-row gap-5"
                      >
                        <div className="flex flex-col items-center space-x-2">
                          <RadioGroupItem
                            value="dark"
                            id="option-two"
                            itemProp="dark.png"
                          />
                          <Label htmlFor="option-one" className="mt-2">Dark Theme</Label>
                        </div>
                        <div className="flex flex-col items-center space-x-2">
                          <RadioGroupItem
                            value="light"
                            id="option-two"
                            itemProp="light.png"
                          />
                          <Label htmlFor="option-two"className="mt-2">Light Theme</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Save changes</Button>
            </form>
          </Form>
        </div>
      </div>
  );
}
