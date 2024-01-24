"use client";
import axios from "axios";
import { AccordionCourse } from "@/components/functional/accordionCourse";
import Image from "next/image";
import Header from "@/components/functional/header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Config } from "@/Config";
import { useEffect, useState } from "react";
import { initializeTheme } from "@/lib/theme";
import { fetchCourse } from "@/app/actions/courseActions";
import SideBar from "@/components/functional/sideBar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import EditCourse from "@/components/functional/editCourse";
import CourseSideBar from "@/components/functional/courseSideBar";
import { useRouter } from "next/navigation";
import { Redirect } from "next";
import {
  GearIcon,
  FileIcon,
  GlobeIcon,
  DashboardIcon,
} from "@radix-ui/react-icons";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Separator } from "@/components/ui/separator";
import { getCookie } from "cookies-next";
const Cert = ({ params }: { params: { id: string } }) => {
  const getCert = async () => {
    const token = getCookie("token");
    try {
      const res = await axios.get("http://127.0.0.1:8000/generateCert", {
        responseType: 'blob',
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      window.open(URL.createObjectURL(res.data));
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-background min-h-screen">
      <Header></Header>

      <div className="bg-background flex item-center ">
        <CourseSideBar id={params.id}></CourseSideBar>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col gap-10  mr-20 w-[80%] pt-10 max-md:max-w-[100%] p-5 max-lg:max-w-[90%] min-w-[50%]">
            <div>
              <h1 className="font-extrabold text-3xl">Certificate</h1>
              <p>
                Create your scorm course and uploat{" "}
                <span className="font-bold">.zip</span> file
              </p>
              <Separator></Separator>
            </div>

            <>
                <Button
                  variant="default"
                  className="w-[200px] justify-center"
                  type="submit"
                  onClick={() => getCert()}
                >
                  Prewiew certificate
                </Button>

              <div className="border border-border rounded-md">
                <Table>
                  <TableCaption>
                    A list of all scom files of tihs course.
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Certificate name</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium"></TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <Button>Open</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
type Params = {
  id: number;
};

export default Cert;
