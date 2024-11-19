import React from "react";
import Container from "@/components/ui/container";
import Profile from "../components/profile";
import AboutAuthor from "../components/about";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { blogData } from "@/pages/home/data/blogItemData";
import BlogItem from "@/pages/home/components/blog-item";

const profileData = {
  id:1,
  image:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  name: "Jane Doe",
  text: "Tech enthusiast, software engineer, and avid blogger. Passionate about AI, web development, and the future of technology.",
  followers: 1234,
  following: 567,
  links: ["https://www.facebook.com", "https://www.instagram.com"],
};

const aboutAuthorData = {
  title: "About Jane Doe",
  text: "Jane Doe is a seasoned software engineer with over a decade of experience in web development. She specializes in JavaScript, React, and Node.js, and has a keen interest in emerging technologies like AI and blockchain. Jane is a frequent speaker at tech conferences and contributes to various open-source projects.",

  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "AI",
    "Blockchain",
    "Web Development",
  ],
};

const AuthorPage: React.FC = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <Profile {...profileData} />

        <div className="mt-11">
          <Tabs defaultValue="article" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="article">
                Aricles
              </TabsTrigger>
              <TabsTrigger className="w-full" value="about">
                About
              </TabsTrigger>
            </TabsList>
            <TabsContent value="article">
              <div className="flex flex-col gap-6">
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
            </TabsContent>
            <TabsContent value="about">
              <AboutAuthor {...aboutAuthorData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default AuthorPage;
