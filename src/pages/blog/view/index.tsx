import Container from "@/components/ui/container";
import { getBlogInfo, getSearchedBlogInfo } from "@/supabase/blog";
import { useQuery } from "@tanstack/react-query";
import BlogBox from "../components/blogItem";
// import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import qs from "qs";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";

import { useDebounce } from "@uidotdev/usehooks";
import { formatCreatedAt } from '@/utils/formatCreatedAt'


type BlogFilterFormData = {
  title: string;
};
const FormDataDEfaultValues = {
  title: "",
};


const BlogView: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const parsedQueryParams = {
    ...FormDataDEfaultValues,
    ...qs.parse(searchParams.toString()),
  };

  const { control, watch } = useForm<BlogFilterFormData>({
    defaultValues: parsedQueryParams,
  });

  // const onSubmit = (formValue: BlogFilterFormData) => {
  //   setSearchParams(qs.stringify(formValue));
  // };

   // const debouncedSetSearchParams = useCallback(
  //   underscore.debounce((updatedParams: QueryParams) => {
  //     setSearchParams(qs.stringify(updatedParams));
  //   }, 500),

  //   [setSearchParams]
  // );

  const watchedSearchText = watch("title");

  const debouncedSearchText = useDebounce(watchedSearchText, 500)


  useEffect(() => {
    const currentParams = qs.parse(searchParams.toString());
    const updatedParams = { ...currentParams, title: debouncedSearchText };

    setSearchParams(qs.stringify(updatedParams));
  }, [debouncedSearchText, setSearchParams]);


  const {
    data: blogData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogData", searchParams.toString()],
    queryFn: () => {
      const title = searchParams.get("title") || "";
      return title ? getSearchedBlogInfo(title) : getBlogInfo();
    },
  });
  

  {
    isLoading && <div>Loading...</div>;
  }
  {
    error && <div>Sorry, Data cant be fetched!</div>;
  }

  const supabaseImageUrl = import.meta.env
    .VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL;



  return (
    <>
      <div className="flex flex-col gap-2 items-center mb-10">
        <div className="">
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => {
              return <Input onChange={onChange} value={value} />;
            }}
          />
        </div>
        {/* <Button onClick={handleSubmit(onSubmit)}>Filter</Button> */}
      </div>
      <Container>
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="mb-8 text-4xl font-semibold">Blog List</h1>
          <div className="flex flex-col gap-6">
            {blogData?.map((blog) => {
              const blogImageUrl = blog?.image_url
                ? `${supabaseImageUrl}/${blog.image_url}`
                : null;
              const formattedDate = formatCreatedAt(blog.created_at ?? "");
              return (
                <BlogBox
                  key={blog.id}
                  created_at={formattedDate}
                  title_ka={blog.title_ka ?? ""}
                  title_en={blog.title_en ?? ""}
                  description_ka={blog.description_ka ?? ""}
                  description_en={blog.description_en ?? ""}
                  image_url={blogImageUrl}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogView;
