import type { FC } from 'react';
import { usePersonalInformationData } from '../../../hooks';
import Skill from './Skill';
import type { SkillProps } from './Skill';
import LangIcon from '../../Icons/LangIcon';

export type TechStackMetadata = string[];
export type SkillsMetadata = SkillProps[];

interface SkillsProp {
  skills: SkillsMetadata;
  techStack: TechStackMetadata;
}

const SkillSection: FC = () => {
  const { skills, techStack }: SkillsProp = usePersonalInformationData();

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills and Proficiency</h2>

        {skills.map(({ title, description }) => (
          <Skill title={title} description={description} key={title} />
        ))}
        <ul className="list-inline dev-icons">
          {techStack.map((language) => (
            <LangIcon name={language} key={language} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillSection;
