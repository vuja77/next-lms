"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter} from "next/router";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Header from "@/components/functional/header";
import CourseSideBar from "@/components/functional/courseSideBar";
import { getCookie } from "cookies-next";
const MyPage = ({ params }: { params: { id: string } }) => {
  const scormFilename = useParams();
  const token = getCookie("token")
  useEffect(() => {
    
    const urlParams = new URLSearchParams(window.location.search);
    console.log(params);
    
    // Dynamically set the iframe source
    const iframe = document.querySelector("iframe");
    if (iframe) {
      //@ts-ignore
      iframe.setAttribute(
        "src",
      //@ts-ignore
        `https://api-lms.work.gd/lms/storage/courses/${params.file_name}/index.html`
      );
    }
    // @ts-ignore
    // let setup = async () => {
    //   // @ts-ignore
    //   window.SetDataChunk = (a) => {
    //     let b = JSON.parse(a).d;
    //     console.log(a);
    //     console.log("alo");
    //   };
    //   // @ts-ignore

    //   window.SetReachedEnd = () => {
    //     fetch("http://127.0.0.1:8000/send-mail", {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`, // Dodajte token u zaglavlje za autorizaciju
    //       },
    //     })
    //   };
    //   // @ts-ignore
    //   window.GetDataChunk = () => {
    //     let result = null;
    //     console.log("aa");

    //     return result;
    //   };
    //   // @ts-ignore
    //   window.ConcedeControl = window.history.back;
    //   // @ts-ignore
    //   console.log(document.getElementById("ifr").contentDocument.title);
    // };

    // setup();
  }, []);

  return (
    <>
      <div className="bg-background min-h-screen">

        <div className="bg-background flex ">
          <iframe
            id="ifr"
            src=""
            frameBorder="0"
            className="w-screen h-screen border-border"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MyPage;
