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
import "../../../app/globals.css";
import { useEffect, useState } from "react";
import axios from "axios";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { initializeTheme } from "@/lib/theme";
import Appearance from "@/components/functional/appereance";
import ProfileSettings from "@/components/functional/profileSettings";
export default function Setting() {
  useEffect(() => {
    initializeTheme();
  });
  return (
    <>
    <Header></Header>
    <div className="flex flex-row">
      <SideBar></SideBar>
      <div className="p-10 space-y-5 ">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-accent">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>

        <Tabs defaultValue="profile" >
          <TabsList>
            <TabsTrigger value="profile">Edit profile</TabsTrigger>
            <TabsTrigger value="appereance">Apperance</TabsTrigger>
            <TabsTrigger value="display">About us</TabsTrigger>
          </TabsList>
          <Separator className="mt-5"></Separator>

          <TabsContent value="profile">
            <ProfileSettings></ProfileSettings>
          </TabsContent>
          <TabsContent value="appereance">
            <Appearance></Appearance>
          </TabsContent>
          <TabsContent value="display"></TabsContent>
        </Tabs>
      </div>
    </div>
    </>
  );
}
