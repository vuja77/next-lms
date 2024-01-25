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
import { uploadScorm } from "@/app/actions/courseActions";
const Scorm = async ({ params }: { params: { id: string } }) => {
  const data = await fetchCourse(params.id);
  return (
    <div className="bg-background min-h-screen">
      <Header></Header>

      <div className="bg-background flex item-center ">
        <CourseSideBar id={params.id}></CourseSideBar>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col gap-10  mr-20 w-[80%] pt-10 max-md:max-w-[100%] p-5 max-lg:max-w-[90%] min-w-[50%]">
            <div>
              <h1 className="font-extrabold text-3xl">Scorm courses</h1>
              <p>
                Create your scorm course and uploat{" "}
                <span className="font-bold">.zip</span> file
              </p>
              <Separator></Separator>
            </div>
            
            {data.course[0].scorm_filename != null ? (
                <>
                <Button variant="default" className="w-[200px] justify-center" >New scrom course</Button>
              <div className="border border-border rounded-md">
                <Table>
                  <TableCaption>A list of all scom files of tihs course.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead >Scorm Name</TableHead>
                      <TableHead>Scorm file name</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">{data.course[0].name}</TableCell>
                      <TableCell>{data.course[0].scorm_filename}</TableCell>
                      <TableCell><Link href={data.course[0].scorm_filename+"?filename="+data.course[0].scorm_filename}><Button>Open</Button></Link></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              </>
            ) : (
              <div className="border-border border-2 rounded-md border-dashed min-h-[200px] flex items-center justify-center flex-col gap-3">
                <h1 className="font-bold text-xl">No scorm course added</h1>
                <Dialog>
                  <div>
                    <DialogTrigger className="bg-primary text-white justify-center flex flex-row items-center p-1.5 rounded-md space-x-2 px-5 w-full">
                      Upload zip
                      <PlusCircledIcon className="ml-2"></PlusCircledIcon>
                    </DialogTrigger>
                  </div>
                  <DialogContent className="">
                    <DialogHeader>
                      <DialogTitle>Upload zip</DialogTitle>
                      <DialogDescription>
                        change information of this course
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <form action={await uploadScorm} encType="multipart/form-data"  className="flex flex-col items-center space-y-5">
                        <Input
                          name="file"
                          type="file"
                          
                          className="p-1.5"
                          accept=".zip"
                        ></Input>
                        <Input
                          name="id"
                          type="number"
                          value={params.id}
                          className="p-1.5 hidden"
                          hidden
                        ></Input>
                        <Button className="w-full justify-center">
                          Upload
                        </Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
type Params = {
  id: number;
};

export default Scorm;
