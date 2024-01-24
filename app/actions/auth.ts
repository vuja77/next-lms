"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
export async function registerAction(formData: FormData) {
  "use server";
  
    const res = await axios.post("http://127.0.0.1:8000/register", {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      mail: formData.get("email"),
      password: formData.get("password"),
      confirm_password: formData.get("password"),
    });

    if (res.data.success.token) {
      cookies().set("token", res.data.success.token);
      redirect("/student", RedirectType.push);
    } else {
      console.log("error")
    }

}

export async function loginAction(formData: FormData) {
  "use server";
  const res = await axios.post("http://127.0.0.1:8000/login", {
    mail: formData.get("email"),
    password: formData.get("password"),
  });

  if (res.data.success.token) {
    cookies().set("token", res.data.success.token);
    redirect("/professor", RedirectType.push);
  }
}
export async function detailsAction() {
  const token = cookies().get("token");

  ("use server");
  const res = await axios.get("http://127.0.0.1:8000/details", {
    headers: {
      Authorization: "Bearer " + token?.value,
    },
  });
  return res.data.success;
}
