import React from 'react';

function Skill(props: SkillProps) {
  const { title, description } = props;
  return (
    <>
      <div className="subheading mb-3">{title}</div>
      <ul>
        {description.map((line, key) => (
          <li key={key}>{line}</li>
        ))}
      </ul>
    </>
  );
}

export default Skill;