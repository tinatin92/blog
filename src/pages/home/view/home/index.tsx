import FeaturedAuthorsBox from "../../components/featured-authors";
import TagBox from "../../components/tag-box";
import BlogItem from "../../components/blog-item";
const HomePage: React.FC = () => {
  return <>
     <BlogItem />
     <FeaturedAuthorsBox />
     <TagBox />
  </>;
};

export default HomePage;
