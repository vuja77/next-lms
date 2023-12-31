"use client";
import axios from "axios";
import { AccordionCourse } from "@/components/accordionCourse";
import { useRouter } from "next/router";
import Image from "next/image";
import "../../../../app/globals.css";
import Header from "@/components/header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Config } from "@/Config";
import { useEffect, useState } from "react";
import { initializeTheme } from "@/lib/theme";
const CoursePage = ({ params }: { params: { id: string } }) => {
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
  const [course, setCourse] = useState<Course[]>();
  const [lesson, setlesson] = useState();
  const [mat, setmat] = useState();
  const [home, sethome] = useState();
  const Fetch = async () => {
    await axios
      .get(Config.apiUrl + `/course/${params.id}`)
      .then((res) => setCourse(res.data));
    await axios
      .get(Config.apiUrl + `/getlesson/${params.id}`)
      .then((res) => setlesson(res.data));
    await axios
      .get(Config.apiUrl + `/gethomework/${params.id}`)
      .then((res) => sethome(res.data));

    await axios
      .get(Config.apiUrl + `/getMaterial/${params.id}`)
      .then((res) => setmat(res.data));
  };
  useEffect(() => {
    Fetch();
    initializeTheme()
  }, []);
  return (
    <div className="bg-background min-h-screen">
      <Header></Header>

      <div className="bg-background flex justify-center item-center ">
        <div className="grid grid-rows-2 gap-10 max-w-[60%] pt-10 max-md:max-w-[100%] p-5 max-lg:max-w-[90%] min-w-[50%]">
          <Card className="bg-background flex-row flex max-sm:flex-col ">
            {course ? (
              <img
                src={"https://lms-next.work.gd/ets-site-backend/public/uploads/"+course[0].thumbnail}
                alt=""
                width={280}
                height={400}
                className="rounded-sm w-full max-w-[70%] max-sm:w-full"
              ></img>
            ) : null}
            <div className="flex flex-col p-5 gap-5">
              <h1 className="font-bold text-xl">
                {course ? course[0].name : null}
              </h1>
              <p className="font-light text-foreground">
                {course ? course[0].description : null}
              </p>
              <p>
                <span className="font-bold">Created by:</span>{" "}
                {course ? course[0].first_name : null + " "}
              </p>
              <span className="bg-secondary rounded-sm w-[60px] text-center p-1 font-medium">
                {course ? course[0].scorm_filename : null}
              </span>
              {course ? (
                <Link
                  href={
                    "/scormcourse/index.html?scorm_filename=" +
                    course[0].scorm_filename
                  }
                >
                  <Button variant="Login">Start course</Button>
                </Link>
              ) : null}
            </div>
          </Card>
          <Tabs defaultValue="lesson">
            <TabsList>
              <TabsTrigger value="lesson">Lesson</TabsTrigger>
              <TabsTrigger value="homework">Homework</TabsTrigger>
              <TabsTrigger value="exam">Exam</TabsTrigger>
            </TabsList>
            <TabsContent value="lesson">
              <AccordionCourse data={lesson} mat={mat}></AccordionCourse>
            </TabsContent>
            <TabsContent value="homework">
              <AccordionCourse data={home} mat={mat}></AccordionCourse>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
type Params = {
  id: number;
};

export default CoursePage;
