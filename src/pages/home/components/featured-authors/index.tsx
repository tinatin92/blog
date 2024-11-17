import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const FeaturedAuthorsBox: React.FC = () => {
  return (
    <div className="">
      <Card className="flex flex-col space-y-1.5 p-6 w-full">
        <div className="font-semibold leading-none tracking-tight mb-6">
          Featured Authors
        </div>

        <ul className="space-y-4">
          <li>
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <Link className="font-semibold hover:underline" to="">
                  Alice Johnson
                </Link>
                <p className="text-sm text-muted-foreground">
                  Blockchain Enthusiast
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <Link className="font-semibold hover:underline" to="">
                  Alice Johnson
                </Link>
                <p className="text-sm text-muted-foreground">
                  Blockchain Enthusiast
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <Link className="font-semibold hover:underline" to="">
                  Alice Johnson
                </Link>
                <p className="text-sm text-muted-foreground">
                  Blockchain Enthusiast
                </p>
              </div>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default FeaturedAuthorsBox;
