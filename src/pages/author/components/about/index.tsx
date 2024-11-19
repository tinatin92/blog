import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type AboutAuthorProps = {
  title: string;
  text: string;
  skills: string[];
};

const AboutAuthor: React.FC<AboutAuthorProps> = ({ title, text, skills }) => {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{text}</p>
      <div>
        {skills.map((skill, index) => (
          <Badge key={index} className="mr-2">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default AboutAuthor;