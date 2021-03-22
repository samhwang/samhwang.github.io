/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import Project from './Project';

describe('Project Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const project = {
      title: 'title',
      description: 'description',
      url: 'https://samhwang.github.io',
    };
    const tree = render(
      <Project
        title={project.title}
        description={project.description}
        url={project.url}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should render project without URL', () => {
    const project = {
      title: 'title',
      description: 'description',
    };
    const tree = render(
      <Project title={project.title} description={project.description} />
    );
    expect(tree).toMatchSnapshot();
  });
});
