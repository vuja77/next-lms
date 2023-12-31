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
import "../../app/globals.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Config } from "../../Config";
import SideBar from "../sideBar";
import Header from "../header";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarImage } from "@/components/ui/avatar";


export default function ProfileSettings() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const router = useRouter();

  useEffect(() => {
    if (!hasCookie("token")) {
      router.push("/Login");
    }
  });
  const FormSchema = z.object({
    mail: z.string().min(2, {
      message: "Username must be at least 6 characters.",
    }),
    first_name: z.string().min(2, {
      message: "Username must be at least 6 characters.",
    }),
    last_name: z.string().min(2, {
      message: "Username must be at least 6 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 6 characters.",
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mail: "",
      password: "",
      first_name: "",
      last_name: "",
    },
  });
  return (
      <div className="flex flex-col gap-2">
        <p>This is how others will see you on the site.</p>
        <div className="min-w-[100%] self-center">
          <Card className="p-3 flex flex-row items-center gap-5">
            <Avatar className="w-[80px] h-[80px]">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="w-[80px] h-[80px]"
              />
            </Avatar>
            <Button>Change photo</Button>
          </Card>
          <Form {...form}>
            <div className="flex flex-row justify-between gap-5">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem                 className="w-full"
                  >
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input className="" placeholder="First name" type="text" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" type="text" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <FormField
              control={form.control}
              name="mail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="mail" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            
          </Form>
          <Button className="mt-5">Save changes</Button>
        </div>
      </div>
  );
}
