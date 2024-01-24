"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";

export async function createCourse(formData: FormData) {
  "use server";
  const token = cookies().get("token");
  try {
    const res = await axios.post("http://127.0.0.1:8000/course", {
      name: formData.get("name"),
      thumbnail: "default.png",
      course_type_id: "1"
    },{
      headers: {
        'Authorization': "Bearer " + token?.value,
      },
    });

  } catch (err) {
    console.log(err)
  }
 
}

  