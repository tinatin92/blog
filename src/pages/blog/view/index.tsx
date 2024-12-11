import Container from "@/components/ui/container";
import { getBlogInfo } from "@/supabase/blog";
import { useQuery } from "@tanstack/react-query";
import BlogBox from "../components/blogItem";

const BlogView: React.FC = () => {
  const {
    data: blogData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogData"],
    queryFn: () => getBlogInfo(),
    // onSuccess: (data) => reset(data),
  });
  console.log(blogData);
  {
    isLoading && <div>Loading...</div>;
  }
  {
    error && <div>Sorry, Data cant be fetched!</div>;
  }

  const supabaseImageUrl = import.meta.env
    .VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL;

  return (
    <Container>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="mb-8 text-4xl font-semibold">Blog List</h1>
        <div className="flex flex-col gap-6">
          {blogData?.map((blog) => {
            const blogImageUrl = blog?.image_url
              ? `${supabaseImageUrl}/${blog.image_url}`
              : null;

            return (
              <BlogBox
                key={blog.id}
                title_ka={blog.title_ka ?? ''}
                title_en={blog.title_en ?? ''}
                description_ka={blog.description_ka ?? ''}
                description_en={blog.description_en ?? ''}
                image_url={blogImageUrl}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default BlogView;
