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
import SideBar from "./sideBar";
import Header from "./header";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { detailsAction } from "@/app/actions/auth";
export default async function ProfileSettings() {
  const data: any = await detailsAction();
  console.log(data.mail);
  return (
    <div className="flex flex-col gap-2">
      <p>This is how others will see you on the site.</p>
      <div className="min-w-[100%] self-center space-y-5">
        <Card className="p-3 flex flex-row items-center gap-5">
          <Avatar className="w-[80px] h-[80px]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-[80px] h-[80px]"
            />
          </Avatar>
          <div>
            <p>{data.first_name + " " + data.last_name}</p>
            <p>{data.mail}</p>
          </div>
          <Button>Change photo</Button>
        </Card>
        <form action="" className="space-y-5">
          <div className="flex flex-row gap-5">
            <Input placeholder="First name"></Input>
            <Input placeholder="First name"></Input>
          </div>

          <Input defaultValue={data.mail}></Input>
        </form>
        <Button className="mt-5">Save changes</Button>
      </div>
    </div>
  );
}
