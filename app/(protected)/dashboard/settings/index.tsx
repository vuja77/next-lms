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
import SideBar from "../../components/sideBar";
import Header from "../../components/header";
import Chart from "@/components/chart";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
import RootLayout from "./layout";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
export default function Index({
  corsesResponse,
}: {
  corsesResponse: Course;
}) {

  return (
    <>
      
    </>
  );
}
