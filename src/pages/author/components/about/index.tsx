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
    <Card className='p-6 flex flex-col gap-6'>
      <h1 className='font-semibold'>{title}</h1>
      <p>{text}</p>
      <div>
        <h3 className='font-semibold mb-4'>Skills</h3>
        {skills.map((skill, index) => (
          <Badge variant='secondary' key={index} className="mr-2">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default AboutAuthor;