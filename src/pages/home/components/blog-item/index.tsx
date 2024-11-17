import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

type BlogItemProps = {
  title: string;
  author: string;
  date: string;
  readTime: string;
  description: string;
  imageUrl: string;
  badges: string[];
  link: string;
};

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  author,
  date,
  readTime,
  description,
  imageUrl,
  badges,
  link,
}) => {
  const { t } = useTranslation();
  console.log(t("lang-version"));

  return (
    <Link to={link}>
      {/* {t("home-page.lang-version")} */}
      <Trans>home-page.lang-version</Trans>
      <Card className="flex flex-col space-y-1.5 p-6 gap-y-8">
        <div className="w-full">
          <img
            className="rounded-lg object-cover w-full h-[200px]"
            src={imageUrl}
            alt="shadcn"
          />
        </div>
        <div>
          <h2 className="tracking-tight text-2xl font-bold">{title}</h2>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link className="hover:underline" to="">
              {author}
            </Link>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex space-x-2 ">
          {badges.map((badge, index) => (
            <Link key={index} to="/search">
              <Badge>{badge}</Badge>
            </Link>
          ))}
        </div>
      </Card>
    </Link>
  );
};

export default BlogItem;
