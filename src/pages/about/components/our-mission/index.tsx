import React from "react";

type OurMissionProps = {
  title: string;
  text: string;
  image: string
};

const OurMission: React.FC<OurMissionProps> = ({ title, text, image}) => {
  return (
    <section className="flex gap-8 items-center mt-11">
      <div className="space-y-4 w-1/2">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{text}</p>
      </div>
       <div className="w-1/2">
          <img className="rounded-lg object-cover w-[768px]" src={image} alt={title} />
       </div>
    </section>
  );
};

export default OurMission;
