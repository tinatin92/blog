import React from "react";
import { Card } from "@/components/ui/card";

type StoryProps = {
  title: string;
  text: string;
};

const StoryCard: React.FC<StoryProps> = ({ title, text }) => {
  return (
    <section className="mt-11">
      <Card className="bg-muted p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-muted-foreground mb-4">{text}</p>
      </Card>
    </section>
  );
};

export default StoryCard;
