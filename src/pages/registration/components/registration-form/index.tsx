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

import { useMutation } from "@tanstack/react-query";
import { register } from "@/supabase/auth";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const RegistrationForm: React.FC = () => {

  const { t } = useTranslation();
 

  const { register: formHookRegister, handleSubmit, formState } = useForm();

  const { mutate: handleRegistration } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  // const handleSubmit = () => {
  //   if (!!registerPAyload.email && !!registerPAyload.password) {
  //     handleRegistration(registerPAyload);
  //   }
  // };
  const onSubmit = (fildsValue: any) => {
    console.log(fildsValue);
    handleRegistration(fildsValue);
  };

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
            {/*   <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" />
            </div> */}
            <div>
              <Label htmlFor="email">Your email</Label>
              <Input
                {...formHookRegister("email", {
                  required: t("registration.required"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: t("registration.message"),
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
            <div>
              <Label htmlFor="password">Your password</Label>
              <Input
                {...formHookRegister("password", {
                  required: t("registration.required"),
                  minLength: {
                    value: 8,
                    message: t("registration.minLength"),
                  },
                  maxLength: {
                    value: 12,
                    message: t("registration.maxLength"),
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

            {/*    <div>
              <Label htmlFor="password2">Confirme password</Label>
              <Input id="password2" />
            </div> */}
          </div>
          <Button onClick={handleSubmit(onSubmit)} className="mt-6 w-full">
            Sign Up
          </Button>
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
