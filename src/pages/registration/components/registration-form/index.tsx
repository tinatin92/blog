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

const RegistrationForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-160 ">
        <CardHeader>
          <CardTitle className="tracking-tight text-2xl font-bold text-center">
            Sign Up for BitBlogs
          </CardTitle>
          <CardDescription className="text-center">
            Create your account to start blogging
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" />
            </div>
            <div>
              <Label htmlFor="email">Your email</Label>
              <Input id="email" />
            </div>
            <div>
              <Label htmlFor="password">Your password</Label>
              <Input id="password" />
            </div>
            <div>
              <Label htmlFor="password2">Confirme password</Label>
              <Input id="password2" />
            </div>
          </div>
          <Button className="mt-6 w-full">Sign Up</Button>
        </CardContent>

        <CardFooter>
          <div className="flex justify-center items-center w-full">
            <div>
              <span className="text-sm mx-3">Already have an account?</span>
              <Link className="text-primary hover:underline" to="/login">
                Log In
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegistrationForm;
