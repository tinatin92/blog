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
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/supabase/auth";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
const LoginForm: React.FC = () => {
  // const [loginPayload, setLoginPayload] = useState({email:'',password: ''})
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { register, handleSubmit, formState } = useForm();

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/");
    },
  });

  const onSubmit = (loginPayload:any) => {
    handleLogin(loginPayload);
  };

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

              <Input
                {...register("email", {
                  required: t("login.email"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: t("login.message"),
                  },
                })}
              />
               {formState.errors?.email?.message &&
                typeof formState.errors.email.message === "string" && (
                  <span className="text-red-500 text-sm">
                    {formState.errors.email.message}
                  </span>
                )}
            </div>
            <div className="mt-5">
              <Label htmlFor="password">Your password</Label>
              <Input
                {...register("password", {
                  required: t("login.required"),
                  minLength: {
                    value: 8,
                    message: t("login.minLength"),
                  },
                  maxLength: {
                    value: 12,
                    message: t("login.maxLength"),
                  },
                })}
              />
               {formState.errors?.password?.message &&
                typeof formState.errors.password.message === "string" && (
                  <span className="text-red-500 text-sm">
                    {formState.errors.password.message}
                  </span>
                )}
            </div>
          </div>
          <Button onClick={handleSubmit(onSubmit)} className="mt-6 w-full">
            Log In
          </Button>
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
