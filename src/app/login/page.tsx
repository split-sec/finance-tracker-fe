export const metadata = {
  title: "Login",
  description: "Login page"
};

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"

export default function Signin() {
  return (
    <>
      <div className="m-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold my-4 text-center">finance tracker.</h1>
        <Card className="my-20 w-[90%] max-w-80 flex flex-col items-center">
          <CardHeader>
            <CardTitle className="text-lg">Log In</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
