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
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  GearIcon,
  FileIcon,
  GlobeIcon,
  DashboardIcon,
} from "@radix-ui/react-icons";
export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const Pages = [
    {
      name: "Dashboard",
      route: "professor",
      route2: "student",
      icon: <DashboardIcon className="mr-2"></DashboardIcon>,
    },
    {
      name: "Discover",
      route: "discover",
      route2: "discover",

      icon: <GlobeIcon className="mr-2"></GlobeIcon>,
    },
    {
      name: "Settings",
      route: "settings",
      route2: "settings",

      icon: <GearIcon className="mr-2"></GearIcon>,
    },
    {
      name: "My files",
      route: "my-files",
      route2: "my-files",

      icon: <FileIcon className="mr-2"></FileIcon>,
    },
  ];
  return (
    <>
      <div className="flex-col gap-5 w-[200px] border-r file:border-0 border-r-border p-5 h-screen relative top-0 self-start md:hidden lg:flex">
        {Pages.map((e, index) => {
          return (
            <Button
              variant={
                pathname.includes(e.route)
                  ? "default"
                  : pathname.includes(e.route2)
                  ? "default"
                  : "sideBarHover"
              }
              className="space-x-1"
              onClick={() => {
                router.push("/" + e.route);
              }}
              key={index}
            >
              {e.icon}
              {e.name}
            </Button>
          );
        })}
      </div>
    </>
  );
}
