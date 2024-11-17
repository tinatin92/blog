import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const TagBox: React.FC = () => {
  return (
    <div>
      <Card className="flex flex-col space-y-1.5 p-6 w-full">
        <div>
          <div className="font-semibold leading-none tracking-tight mb-6">
            Popular Tags
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/">
            <Badge>Blockchain</Badge>
          </Link>
          <Link to="/">
            <Badge>Cryptocurrency</Badge>
          </Link>
          <Link to="/">
            <Badge>Technology</Badge>
          </Link>
          <Link to="/">
            <Badge>Programming</Badge>
          </Link>
          <Link to="/">
            <Badge>AI</Badge>
          </Link>
          <Link to="/">
            <Badge>Machine Learning</Badge>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default TagBox;
