import type { FC } from 'react';

export interface JobDescriptionProps {
  title: string;
  companyName: string;
  description: string[];
  duration: string;
  technologies: string[];
}

const JobDescription: FC<JobDescriptionProps> = ({
  title,
  companyName,
  description,
  duration,
  technologies,
}) => (
  <>
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{companyName}</div>
        <ul>
          {description.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <h4>Technologies involved:</h4>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{duration}</span>
      </div>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{duration}</span>
    </div>
  </>
);

export default JobDescription;
