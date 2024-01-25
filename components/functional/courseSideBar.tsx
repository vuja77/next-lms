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
import { redirect } from "next/navigation";
import { detailsAction } from "@/app/actions/auth";
export default function  CourseSideBar(id: { id: string }) {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  console.log(id);
  const details = detailsAction()
  const ProfessorPages = [
    {
      name: "Course Preview",
      route: "/professor/courses/" + id.id,
      icon: <DashboardIcon className="mr-2"></DashboardIcon>,
    },
    
    {
      name: "Scrom ",
      route: "/professor/courses/" + id.id + "/scrom",
      icon: <FileIcon className="mr-2"></FileIcon>,
    },
    {
      name: "Certificate",
      route: "/professor/courses/" + id.id + "/cert",
      icon: <FileIcon className="mr-2"></FileIcon>,
    },
    {
      name: "Settings",
      route: "/settings",
      icon: <GearIcon className="mr-2"></GearIcon>,
    },
  ];
  return (
    <>
      <div className="flex-col gap-5 w-[200px] border-r file:border-0 border-r-border p-5 h-screen relative top-0 self-start md:hidden lg:flex">
        {ProfessorPages.map((e, index) => {
          return (
            <Link href={e.route} key={index}>
              <Button
                variant={
                  pathname.endsWith(e.route) ? "default" : "sideBarHover"
                }
                className="space-x-1"
                key={index}
              >
                {e.icon}
                {e.name}
              </Button>
            </Link>
          );
        })}
      </div>
    </>
  );
}
