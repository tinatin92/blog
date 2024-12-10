import React from "react";
import Container from "@/components/ui/container";
import Title from "../components/page-title";
import OurMission from "../components/our-mission";
import AboutCard from "../components/cards";
import H1 from "@/components/ui/h1";
import StoryCard from "../components/our-story";
import JoinUS from "../components/join-us";

const aboutPageTitle = {
  title: "About bitBlogs",
  text: "Empowering tech enthusiasts to share knowledge and inspire innovation.",
};

const OurMissionData = {
  title: "Our Mission",
  text: "At bitBlogs, we believe in the power of shared knowledge. Our mission is to create a platform where tech enthusiasts, developers, and innovators can come together to share ideas, learn from each other, and push the boundaries of whats possible in the world of technology.",
  image:
    "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
};

const AboutCardData = [
  {
    image: "",
    title: "Rich Content",
    text: "Access a wide range of articles, tutorials, and insights on the latest tech trends and best practices.",
  },
  {
    image: "",
    title: "Rich Content",
    text: "Access a wide range of articles, tutorials, and insights on the latest tech trends and best practices.",
  },
  {
    image: "",
    title: "Rich Content",
    text: "Access a wide range of articles, tutorials, and insights on the latest tech trends and best practices.",
  },
];

const StoryCardData = {
  title: "Our Story",
  text: "Founded in 2023, bitBlogs started as a small project by a group of passionate developers who wanted to create a space for sharing their experiences and learning from others. What began as a simple blog quickly grew into a thriving community of tech enthusiasts from all around the world.",
};

const JoinUSData = {
  title: "Join Us on Our Journey",
  text: "Whether youre a seasoned developer, a curious beginner, or somewhere in between, theres a place for you at bitBlogs. Lets shape the future of technology together.",
};
const AboutPage: React.FC = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <Title {...aboutPageTitle} />
        <OurMission {...OurMissionData} />
        <section className="mt-11">
          <H1 title="What We Offer" />
          <div className="flex gap-5 mt-6">
            {AboutCardData.map((cardData) => {
              return <AboutCard {...cardData} />;
            })}
          </div>
        </section>
        <StoryCard {...StoryCardData} />
        <JoinUS {...JoinUSData} />
      </div>
    </Container>
  );
};

export default AboutPage;
