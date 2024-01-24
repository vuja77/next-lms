"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";

export async function getCert() {
  "use server";
  const token = cookies().get("token");
  try {
    const res = await axios.get("https://api-lms.work.gd/generateCert", {
      headers: {
        'Authorization': "Bearer " + token?.value,
      },
    });
    console.log(res)
    return res;
  } catch (err) {
    console.log(err)
  }
 
}

  