"use client"
import { useEffect } from 'react';
import { useRouter,useParams } from 'next/navigation';

const MyPage: React.FC = () => {
  const router = useRouter();
  const scormFilename = useParams();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(scormFilename)
    // Dynamically set the iframe source
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.setAttribute("src", `https://lms-next.work.gd/ets-site-backend/storage/app/public/courses/${scormFilename.scorm}/`);
    }
    
  }, []);

  return (
    <>
      <iframe id="ifr" src="" frameBorder="0"></iframe>
      <style jsx>{`
        * {
          margin: 0px;
          padding: 0px;
        }

        body {
          overflow: hidden;
        }

        iframe {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default MyPage;
