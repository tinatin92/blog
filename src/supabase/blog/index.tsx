import { supabase } from "@/supabase";

export const getBlogInfo = async () => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*");

    if (error) {
      throw error;
    }

    console.log("Blogs data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching blog info");
    throw error;
  }
};
