import { Card } from "@/components/ui/card";

type BlogData = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_url: string | null; // Expecting a URL string from Supabase
};

const BlogBox: React.FC<BlogData> = ({
  title_ka,
  title_en,
  description_ka,
  description_en,
  image_url,
}) => {
  return (
    <Card className="p-5 w-full">
      <div className="mb-2 text-lg font-semibold">{title_ka}</div>
      <div className="mb-2 text-lg font-semibold">{title_en}</div>
      <div className="mb-4 text-lg">{description_ka}</div>
      <div className="mb-4 text-lg">{description_en}</div>
      {image_url ? (
        <img
          src={image_url}
          alt={`${title_en} Image`}
          className="w-full max-w-3xl rounded-md"
        />
      ) : (
        <div className="text-gray-500">No Image Available</div>
      )}
    </Card>
  );
};

export default BlogBox;
