"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";

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
  const res = await axios.get("https://api-lms.work.gd/lms/course/" + id, {
    headers: {
      Authorization: "Bearer " + token?.value,
    },
  });
  console.log(res)
  return res.data;
}
export async function updateCourse(formData: FormData, id:any) {
  "use server";
  const token = cookies().get("token");
  console.log(id)
  console.log(formData)
  const res = await axios.put(
    "https://api-lms.work.gd/lms/course/"+id.id,
    {
      name: formData.get("name"),
      description: formData.get("description"),
      thumbnail: formData.get("thumbnail"),
      course_type_id: formData.get("category_id"),
    },
    {
      headers: {
        Authorization: "Bearer " + token?.value,
      },
    }
  );
    console.log(res.data)
  return res.data;
}

export async function uploadScorm(formData: FormData) {
  "use server";
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
