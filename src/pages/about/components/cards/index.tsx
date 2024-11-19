import React from "react";
import { Card } from "@/components/ui/card";

type CardProps = {
  image: string;
  title: string;
  text: string;
};

const AboutCard: React.FC<CardProps> = ({ text, title, image }) => {
  return (
    <Card className="p-6 w-1/3 flex flex-col gap-6">
      <div>
        <div className="">{image}</div>
        <div className="font-semibold leading-none tracking-tight">{title}</div>
      </div>
      <div >
        <p>{text}</p>
      </div>
    </Card>
  );
};

export default AboutCard;
