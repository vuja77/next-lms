"use client";

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
import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { setCookie, hasCookie, deleteCookie } from "cookies-next";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
const router = useRouter()
  return (
    <>
      <div className="flex flex-row gap-5 border-b file:border-0 border-b-border p-3 px-5 justify-between">
        <Link href="/dashboard">
          <Image
            src={require("../app/assets/logo.png")}
            alt=""
            width={50}
            height={1}
          ></Image>
        </Link>
        <div>
          <Input
            type="search"
            placeholder="Search..."
            className="md:w-[100px] lg:w-[300px]"
          />
        </div>
        <DropdownMenu >
          <DropdownMenuTrigger >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-5">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>

            <AlertDialog>
              <AlertDialogTrigger className="text-primary text-sm ml-2">
                Logout
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to log out?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() =>{ deleteCookie("token"); router.push("/login")}}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
