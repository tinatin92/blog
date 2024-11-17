import FeaturedAuthorsBox from "../../components/featured-authors";
import TagBox from "../../components/tag-box";
import BlogItem from "../../components/blog-item";
import Container from "@/components/ui/container";
// import { blogData } from "@/pages/home/data/blogItemData";
import { useEffect, useState } from "react";

import { getBlogItem } from "@/api/blog";


type BlogItem = {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  description: string;
  imageUrl: string;
  badges: string[];
  link: string;
}


const HomePage: React.FC = () => {
  const [blogData, setBlogData] = useState<BlogItem[]>([])
  

useEffect(() => {
  getBlogItem().then((blog) => {
    setBlogData(blog)
  })
},[])

  return (
    <>
      <Container>
        <div className="flex gap-8">
          <div className="flex flex-col gap-8">
          {blogData.map((blog) => (
            <BlogItem
              key={blog.id}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              readTime={blog.readTime}
              description={blog.description}
              imageUrl={blog.imageUrl}
              badges={blog.badges}
              link={blog.link}
            />
          ))}
          </div>
          <div className="flex flex-col md:w-1/3 gap-8">
            <TagBox />
            <FeaturedAuthorsBox />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
