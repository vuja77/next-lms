import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { registerAction } from "@/app/actions/auth";
import Middleware from "@/middelware";

const Register = () => {
  
  return (
    <div className="flex items-center h-screen justify-center p-24 flex-col space-y-5">
      <Card className="min-w-[400px] max-h-[420px] max-sm:min-h-[500px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <form action={registerAction}>
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-border" />
              </div>
            </div>
            <div className="flex gap-5 max-sm:flex-col">
              <div className="grid gap-2">
                <Label htmlFor="email">First name</Label>
                <Input
                  id="Firstname"
                  type="text"
                  name="first_name"
                  placeholder="John"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Last name</Label>
                <Input
                  id="email"
                  type="text"
                  name="last_name"
                  placeholder="Jon"
                />
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
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full" variant="Login">
              Create account
            </Button>
          </CardFooter>
        </form>
      </Card>

      <p>
        You have an account?
        <Link href="/login" className="text-primary font-bold">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register