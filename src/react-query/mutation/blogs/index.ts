
import { createBlog } from "@/supabase/blog";
import { useMutation, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

type BlogValue = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_file: File | null;
};

export const useCreateBlogMutation = ({
  queryOptions,
}: {
  queryOptions?: UseMutationOptions<null, unknown, BlogValue>;
} = {}): UseMutationResult<null, unknown, BlogValue> => {
  return useMutation<null, unknown, BlogValue>({
    mutationFn: createBlog,
    ...queryOptions,
  });
};





