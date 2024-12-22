import {
    useQuery,
    UseQueryOptions,
    UseQueryResult,
  } from "@tanstack/react-query";
  
  import { useBLogsQueryKeys } from "./hooks";
  import { fetchBlogInfo } from "@/supabase/blog";
  
  export const useGetBlogs = <T>({
    title,
    queryOptions,
  }: {
    title?: string; 
    queryOptions?: Omit<UseQueryOptions<unknown, unknown, T>, "queryKey">;
  } = {}): UseQueryResult<T, unknown> => {
    const { LIST } = useBLogsQueryKeys();
  
    return useQuery<unknown, unknown, T>({
      queryKey: [LIST, title], 
      queryFn: () => fetchBlogInfo(title), 
      ...queryOptions,
    });
  };
  