"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { tr } from "date-fns/locale";

export async function fetchCourses() {
  "use server";
  const token = cookies().get("token");
  const res = await axios.get("https://api-lms.work.gd/lms/course", {
    headers: {
      Authorization: "Bearer " + token?.value,
    },
  });

  return res;
}
export async function fetchCourse(id: string) {
  "use server";
  const token = cookies().get("token");
  try {

  const res = await axios.get("https://api-lms.work.gd/lms/course/" + id, {
    headers: {
      Authorization: "Bearer " + token?.value,
    },
  });
  console.log(res)
  return res.data;
}
catch (err) {
  console.log(err)
}

}
export async function updateCourse(formData: FormData, id:any) {
  "use server";
  const token = cookies().get("token");
  console.log(id)
  console.log(formData.get("file"))
   const res = await axios.put(
     "https://api-lms.work.gd/lms/course/"+id.id,
     {
     file: formData.get("file"),

     },
     {
       headers: {
         Authorization: "Bearer " + token?.value,
       },
     }
  );
}

export async function uploadScorm(formData: FormData) {
  "use server";
  console.log(formData)

  try {
    const res = await axios.post(
      "https://api-lms.work.gd/lms/upload-scorm-course",
      formData,
      {
        headers: {},
      }
    );
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchProfessorsCourse() {
  "use server";
  const token = cookies().get("token");

  try {
    const res = await axios.get("https://api-lms.work.gd/lms/getProfessorCourse", {
      headers: {
        Authorization: "Bearer " + token?.value,
      },
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
