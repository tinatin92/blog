import { supabase } from "@/supabase";
import { createTimestamp } from "@/utils/timestamp";

export const fetchBlogInfo = async (title?: string) => {
  try {
    const query = supabase.from("blogs").select("*");

   
    if (title) {
      query.or(`title_en.ilike.%${title}%,title_ka.ilike.%${title}%`);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    console.log("Blogs data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching blog info", error);
    throw error;
  }
};





export const createBlog = async (formValues: any, userId: string) => {
  const timestamp = createTimestamp();

  if (formValues.image_file) {
   
    const { data: imageData, error: uploadError } = await supabase
      .storage
      .from("blog_images")
      .upload(formValues.image_file.name, formValues.image_file);

    if (uploadError) {
      throw new Error("Error uploading image");
    }

   
    const { error: insertError } = await supabase.from("blogs").insert({
      title_ka: formValues.title_ka,
      title_en: formValues.title_en,
      description_ka: formValues.description_ka,
      description_en: formValues.description_en,
      image_url: imageData?.path,
      user_id: userId,
      created_at: timestamp,
    });

    if (insertError) {
      throw new Error("Error creating blog");
    }

    return { success: true };
  } else {
    throw new Error("Image file is required");
  }
};
