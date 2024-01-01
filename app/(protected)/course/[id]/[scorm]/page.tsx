"use client";
import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Header from "@/components/header";
const MyPage: React.FC = () => {
  const router = useRouter();
  const scormFilename = useParams();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(scormFilename);
    // Dynamically set the iframe source
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.setAttribute(
        "src",
        `https://lms-next.work.gd/ets-site-backend/storage/app/public/courses/${scormFilename.scorm}/`
      );
    }
  }, []);

  return (
    <>
    <div className="flex flex-row items-center h-screen w-screen justify-between pr-24">
      <div className="h-full flex flex-row items-start justify-self-start self-start p-10">
        {/* <Image 
          src="/logo.png"
          width={90}
          height={30}
          alt='logo'
        ></Image> */}
        <Button onClick={() => router.back()}>
          <ArrowLeftIcon></ArrowLeftIcon>
          Back
        </Button>
      </div>
      <div >
        <iframe
          id="ifr"
          src=""
          frameBorder="0"
          className="w-[70vw] h-[90vh] slef-end rounded-md border-2 border-border"
        ></iframe>
      </div>
    </div>
    </> 
  );
};

export default MyPage;
