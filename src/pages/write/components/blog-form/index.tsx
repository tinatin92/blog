import { useState } from "react";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { useAtom } from "jotai";
import { userAtom } from "@/store/auth";
import { Link } from "react-router-dom";

import { useCreateBlogMutation } from "@/react-query/mutation/blogs";

type BlogFormData = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_file: null | File;
  created_at: string;
};

const FormDataDEfaultValues = {
  title_ka: "",
  title_en: "",
  description_ka: "",
  description_en: "",
  image_file: null,
  created_at: "",
};

const Blog: React.FC = () => {
  const [user] = useAtom(userAtom);

  const { control, handleSubmit, reset } = useForm<BlogFormData>({
    defaultValues: FormDataDEfaultValues,
  });
  const [successMessage, setSuccessMessage] = useState("");

  const { mutate, isPending, isError } = useCreateBlogMutation({
    queryOptions: {
      onSuccess: () => {
        setSuccessMessage("Blog created successfully!");
        reset();
      },
      onError: (err) => {
        console.error("Error creating blog:", err);
      },
    },
  });

  const onSubmit = (formValues: BlogFormData) => {
   
    const formDataWithUser = {
      ...formValues,
      user_id: user?.id,
    };

    mutate(formDataWithUser);
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error while creating the blog. Please try again later.</div>;
  }

  return (
    <>
      <Container>
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl font-semibold mb-9">Write a new Blog!</h1>
          <div className="flex flex-col gap-6 w-1/3">
            {successMessage && (
              <div className="p-5">
                <div className="font-semibold text-2xl text-lime-700 text-center">
                  {successMessage}
                </div>
                <div className="flex gap-1 mt-3 justify-center">
                  <div className="font-semibold">You can see it on</div>
                  <Link
                    className="underline font-semibold text-blue-800"
                    to="/blogs"
                  >
                    Blogs Page
                  </Link>
                </div>
              </div>
            )}
            <div>
              <Label htmlFor="title_ka">Title (KA)</Label>
              <Controller
                control={control}
                name="title_ka"
                render={({ field: { onChange, value } }) => (
                  <Input onChange={onChange} value={value} />
                )}
              />
            </div>

            <div>
              <Label htmlFor="title_en">Title (EN)</Label>
              <Controller
                control={control}
                name="title_en"
                render={({ field: { onChange, value } }) => (
                  <Input onChange={onChange} value={value} />
                )}
              />
            </div>

            <div>
              <Label htmlFor="description_ka">Description (KA)</Label>
              <Controller
                control={control}
                name="description_ka"
                render={({ field: { onChange, value } }) => (
                  <Input onChange={onChange} value={value} />
                )}
              />
            </div>

            <div>
              <Label htmlFor="description_en">Description (EN)</Label>
              <Controller
                control={control}
                name="description_en"
                render={({ field: { onChange, value } }) => (
                  <Input onChange={onChange} value={value} />
                )}
              />
            </div>

            <div>
              <Label htmlFor="image">Image</Label>
              <Controller
                control={control}
                name="image_file"
                render={({ field: { onChange } }) => (
                  <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      onChange(file);
                    }}
                    placeholder="File"
                  />
                )}
              />
            </div>

            <Button onClick={handleSubmit(onSubmit)}>send</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
