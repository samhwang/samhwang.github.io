/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import Skill from './Skill';

describe('Skill Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const skill = {
      title: 'asdfasdf',
      description: ['asdfasdf1234'],
    };
    const tree = render(
      <Skill title={skill.title} description={skill.description} />
    );
    expect(tree).toMatchSnapshot();
  });
});
