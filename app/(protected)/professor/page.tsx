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
import SideBar from "@/components/functional/sideBar";
import Header from "@/components/functional/header";
import Chart from "@/components/functional/chart";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { PureComponent } from "react";
import { Cell, CartesianGrid, Tooltip, Legend } from "recharts";

import { PlusCircledIcon } from "@radix-ui/react-icons";
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
import { createCourse } from "@/app/actions/createCourse";
import {
  fetchCourses,
  fetchProfessorsCourse,
} from "@/app/actions/courseActions";
import Middleware from "@/middelware";
import { detailsAction } from "@/app/actions/auth";
import CreateCourse from "../components/createCourse";

const ProfesorDashboard = async () => {
  const date = new Date();
  const courses = await fetchProfessorsCourse();
  const details = await detailsAction();
  console.log(courses);
  async function update() {
    "use server"
    console.log("alo");
  }
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
          <div className="flex gap-10 flex-wrap">
            <Card className="space-y-0 gap-0 min-w-[200px]">
              <CardHeader className="font-bold">Total courses</CardHeader>
              <CardContent className=" font-extrabold">32</CardContent>
              <CardDescription className="px-5 pb-5">
                number of your courses
              </CardDescription>
            </Card>
            <Card>
              <CardHeader className="font-bold min-w-[200px]">
                Total courses
              </CardHeader>
              <CardContent className="text-xl font-extrabold">32</CardContent>
              <CardDescription className="px-5 pb-5">
                number of your courses
              </CardDescription>
            </Card>
            <Card>
              <CardHeader className="font-bold min-w-[200px]">
                Total courses
              </CardHeader>
              <CardContent className="text-xl font-extrabold">32</CardContent>
              <CardDescription className="px-5 pb-5">
                number of your courses
              </CardDescription>
            </Card>
          </div>

          <div className="flex felx-1 flex-wrap flex-row gap-10 max-md:flex-col">
            <div className="w-full space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
                  Courses
                </h2>
               <CreateCourse></CreateCourse>
              <Separator></Separator>
              
            </div>

            {courses[0] ? (
              <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
                {courses
                  ? courses.map((e: Course, index: number) => {
                      return (
                        <Link key={index} href={"professor/courses/" + e.id}>
                          <div
                            key={index}
                            className="shadow flex flex-col bg-card rounded-xl border border-border hover:pointer-events-auto hover:scale-105 ease-in-out duration-300"
                          >
                            <img
                              src={
                                "https://api-lms.work.gd/lms/storage" + e.thumbnail
                              }
                              alt=""
                              width={280}
                              height={400}
                              className="rounded-sm w-full h-[150px] max-sm:w-full"
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
            ) : (
              <div className="border-border border-2 rounded-md border-dashed min-h-[300px] flex  flex-1 items-center justify-center flex-col gap-3">
                <h1 className="font-bold text-xl">You dont have any course</h1>
                <Dialog>
                  <div>
                    <DialogTrigger className="bg-primary text-white flex flex-row items-center p-2.5 rounded-md">
                      Create your first course{" "}
                      <PlusCircledIcon></PlusCircledIcon>
                    </DialogTrigger>
                  </div>

                  <DialogContent className="">
                    <DialogHeader>
                      <DialogTitle>Create new course</DialogTitle>
                      <DialogDescription>
                        enter the name of the course and its category
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <form
                        action={await createCourse}
                        className="flex flex-col items-center space-y-5"
                      >
                        <Input
                          placeholder="Course name"
                          name="name"
                          required
                        ></Input>
                        <Input
                          placeholder="Course category"
                          name="course_type_id"
                        ></Input>
                        <Button className="w-full justify-center">
                          Create course
                        </Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>
        <Calendar
          mode="single"
          selected={date}
          className="rounded-md border-border border self-baseline mt-10 hidden sm:hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Middleware(ProfesorDashboard);
