// middleware.js

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { usePathname } from "next/navigation";
import { headers } from "next/headers";
const Middleware = (handler: any) => () => {
  const token = cookies().get("token");
  const role: number = 2;
  const headersList = headers();
  const fullUrl = headersList.get("referer");


  if (token && role == 2) {
        return handler()
  } else if (token && role == 1) {
    redirect("/student");
  } else {
    redirect("/login")
  }
};

export default Middleware;
