import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type ProfileProps = {
  image: string,
  name: string,
  text: string,
  followers: number,
  following: number
  links: string[]
};

const Profile: React.FC<ProfileProps> = ({ image, text, name, links,followers, following }) => {
  return (
    <Card className="p-6">
      <div className="flex">
        <div className="w-1/4 ">
          <div className="w-36 h-36">
          <Avatar className="flex h-full w-full items-center justify-center rounded-full bg-muted">
           <img className="object-cover" src={image} alt={name}/>
          </Avatar>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <div className="text-muted-foreground mb-4">{text}</div>
          <div className="flex gap-3 justify-center">
            {links.map((link) => {
              return (
                <Link to={link}>
                  <Button>svg</Button>
                </Link>
              );
            })}
          </div>
          <div className="flex">
             <div>
                <span>svg</span>
                <span>{followers}</span>
                <span>Follovers</span>
             </div>
             <div>
                <span>svg</span>
                <span>{following}</span>
                <span>Following</span>
             </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
