import type { FC } from 'react';

export interface SkillProps {
  title: string;
  description: string[];
}

const Skill: FC<SkillProps> = ({ title, description }) => (
  <>
    <div className="subheading mb-3">{title}</div>
    <ul>
      {description.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  </>
);

export default Skill;
