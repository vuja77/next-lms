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
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname()
  const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const settingsPages = [
    {
      name: "Profile",
    },

    {
      name: "appearance",
    },

    {
      name: "Account",
    },

    {
      name: "Account",
    },
  ];
  console.log(lastSegment);
  return (
    <>
      <div className="hidden flex flex-col gap-5 w-[200px] border-r file:border-0 border-r-border p-5 h-screen relative top-0 self-start md:hidden lg:flex">
        {settingsPages.map((e, index) => {
          return (
            <Link href={"/settings/" + e.name} className="min-w-full">
              <Button
                className="min-w-full"
                variant={lastSegment === e.name ? "default" : "sideBar"}
              >
                {e.name}
              </Button>
            </Link>
          );
        })}
      </div>
    </>
  );
}
