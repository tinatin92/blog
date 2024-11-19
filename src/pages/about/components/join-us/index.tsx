import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type JoinUsProps = {
  title: string;
  text: string;
};

const JoinUS: React.FC<JoinUsProps> = ({ title, text }) => {
  return (
    <section className="mt-11 ">
      <div className="flex flex-col justify-center text-center items-center">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <div className="text-muted-foreground mb-6">{text}</div>
        <Link to="/register">
          <Button>Get Started Today</Button>
        </Link>
      </div>
    </section>
  );
};

export default JoinUS;
