"use client";
import Head from "next/head";
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
import "../../../app/globals.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Config } from "../../../Config";
import SideBar from "@/components/sideBar";
import Header from "@/components/header";
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
import { initializeTheme } from "@/lib/theme";

type Course = {
  id: number;
  name: string;
  scorm_filename: string;
  thumbnail: string;
  description: string;
  course_type_id: number;
  created_at: Date;
  updated_at: Date;
  map: any;
};
export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const router = useRouter();
  const [corsesRespons, setcorsesRespons] = useState<any>();

  const Fetch = async () => {
    const Courses = await axios.get(Config.apiUrl + "/course");
    setcorsesRespons(Courses.data);
  };
  useEffect(() => {
    if (!hasCookie("token")) {
      router.push("/Login");
    }
    Fetch();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <Header></Header>
      <div className="flex flex-row items-center gap-10 justify-between lg:pr-10 max-md:p-10 lg:p-0 max-sm:p-5">
        <SideBar></SideBar>
        <div className="gap-10 flex-col flex-1 flex self-start mt-10">
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Welcome back!
                </h2>
                <p className="text-sm text-muted-foreground">
                  Learn Easier, Progress Faster.
                </p>
              </div>
            </div>
          </div>
          <div className="flex felx-1 flex-wrap flex-row gap-10 max-md:flex-col">
            <Card>
              <CardHeader>
                <CardTitle>Level</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>Level 12</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise Minutes</CardTitle>
                <CardDescription>
                  Your exercise minutes are ahead of where you normally are.
                </CardDescription>
              </CardHeader>
              <Chart></Chart>
            </Card>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Latest courses
                </h2>
                <p className="text-sm text-muted-foreground">
                  Top picks for you. Updated daily.
                </p>
              </div>
            </div>
            <Separator className="my-4" />
          </div>

          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
            {corsesRespons
              ? corsesRespons.map((e: Course, index: number) => {
                  return (
                    <Link key={index} href={"/course/" + e.id}>
                      <div
                        key={index}
                        className="shadow flex flex-col bg-card rounded-xl border border-border hover:pointer-events-auto hover:scale-105 ease-in-out duration-300"
                      >
                        <img
                          src={
                            "https://lms-next.work.gd/ets-site-backend/public/uploads/" +
                            e.thumbnail
                          }
                          alt=""
                          width={280}
                          height={400}
                          className="rounded-sm w-full w-[70%] max-sm:w-full"
                        ></img>

                        <div className="p-2">
                          <p className="text-md font-bold">{e.name}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border-border border self-baseline mt-10 hidden sm:hidden lg:block"
        />
      </div>
    </div>
  );
}
