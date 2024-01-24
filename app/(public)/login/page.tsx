import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { loginAction } from "@/app/actions/auth";
import { Label } from "@/components/ui/label";
import Middleware from "@/middelware";
import { useContext } from "react";
import {DataContext} from "@/lib/authProvider";
const Login = () => {
  //@ts-ignore
  const { data } = useContext(DataContext);
  console.log(data)
  return (
    <div className="flex min-h-screen items-center justify-center p-24 flex-col">
      <div className="p-10 rounded-lg gap-5 flex-col flex  w-[400px] border file:border-0 border-border">
        <h1 className="font-bold text-2xl self-center">Welcome back!</h1>
        <form action={loginAction} className="space-y-5">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-border" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="*******"
            />
          </div>
          <Button type="submit" className="w-full" variant="Login">
            login
          </Button>
        </form>
      </div>
      <p>
        You dont have an account?
        <Link href="/register" className="text-primary font-bold">
          Create Account
        </Link>
      </p>
    </div>
  );
}

export default Login;