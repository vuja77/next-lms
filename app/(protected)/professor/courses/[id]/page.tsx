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

const CoursePage = async ({ params }: { params: { id: string } }) => {
  type Course = {
    id: number;
    name: string;
    scorm_filename: string | undefined;
    thumbnail: string;
    description: string;
    course_type_id: number;
    created_at: Date;
    updated_at: Date;
    first_name: string;
    course_type: string;
    map: any;
  };
  const data = await fetchCourse(params.id);
  console.log(data);
  return (
    <div className="bg-background min-h-screen">
      <Header></Header>

      <div className="bg-background flex item-center ">
        <CourseSideBar id={params.id}></CourseSideBar>
        <div className="w-full flex flex-col items-center">
          <div className="grid grid-rows-2 gap-10  mr-20 w-[80%] pt-10 max-md:max-w-[100%] p-5 max-lg:max-w-[90%] min-w-[50%]">
            <Card className="bg-background flex-row flex max-sm:flex-col ">
              {data ? (
                <img
                  src={
                    "https://api-lms.work.gd/lms/storage" + data.course[0].thumbnail
                  }
                  alt=""
                  width={280}
                  height={400}
                  className="rounded-sm w-full max-w-[60%] max-sm:min-w-full"
                ></img>
              ) : null}
              <div className="flex flex-col p-5 gap-5">
                <div className="flex flex-row justify-between">
                  {" "}
                  <h1 className="font-bold text-xl">
                    {data ? data.course[0].name : null}
                  </h1>
                </div>

                <p className="font-light text-foreground">
                  {data ? data.course[0].description : null}
                </p>
                <p>
                  <span className="font-bold">Created by:</span>{" "}
                  {data ? data.course[0].first_name : null + " "}
                </p>
                <span className="bg-secondary rounded-sm w-[60px] text-center p-1 font-medium">
                  {data ? data.course[0].type_name : null}
                </span>
                <EditCourse id={params.id}></EditCourse>
              </div>
            </Card>
            <Tabs defaultValue="lesson">
              <TabsList>
                <TabsTrigger value="lesson">Lesson</TabsTrigger>
                <TabsTrigger value="homework">Homework</TabsTrigger>
                <TabsTrigger value="certificate">Certificate</TabsTrigger>
              </TabsList>
              <TabsContent value="lesson">
                <AccordionCourse
                  data={data && data.lessons}
                  mat={null}
                ></AccordionCourse>
              </TabsContent>
              <TabsContent value="homework">
                <AccordionCourse
                  data={data && data.lessons}
                  mat={null}
                ></AccordionCourse>
              </TabsContent>
              <TabsContent value="certificate">
                <div className="border border-border p-5 rounded-md flex items-center justify-center">
                  <Button>View certificate</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
type Params = {
  id: number;
};

export default CoursePage;
