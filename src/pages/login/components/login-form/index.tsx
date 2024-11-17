import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  return (
   <div className="min-h-screen bg-background flex items-center justify-center">
     <Card className="w-160 ">
      <CardHeader>
        <CardTitle className="tracking-tight text-2xl font-bold text-center">
          Log in to BitBlogs
        </CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div>
          <div>
            <Label htmlFor="email">Your email</Label>
            <Input id="email" />
          </div>
          <div className="mt-5">
            <Label htmlFor="password">Your password</Label>
            <Input id="password" />
          </div>
        </div>
        <Button className="mt-6 w-full">Log In</Button>
      </CardContent>

      <CardFooter>
        <div className="flex justify-between w-full">
          <div>
            <Link className="text-sm text-primary hover:underline" to="/">
              Forgot Password?
            </Link>
          </div>
          <div>
            <span className="text-sm mx-3">Dont have an account</span>
            <Link className="text-primary hover:underline" to="/register">
              Sing Up
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
   </div>
  );
};

export default LoginForm;
