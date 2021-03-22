/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import Experiences from '.';
import { usePersonalInformationData } from '../../../hooks';

jest.mock('../../../hooks');

describe('Experience Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const mockHook = usePersonalInformationData as jest.MockedFunction<
      typeof usePersonalInformationData
    >;
    mockHook.mockReturnValueOnce({
      experience: [
        {
          title: 'Junior Full Stack Developer',
          companyName: 'Hertz Australia',
          description: [
            'Built the Github Actions and GitHub packages pipeline to publish the Flexicar website docker images, along with setting up APIs to access GitHub packages for cleaning up when necessary',
          ],
          duration: 'Oct 2019 - Present',
          techIcons: ['js'],
          technologies: ['JavaScript (jQuery, NodeJS, ReactJS and ExpressJS)'],
        },
      ],
    });
    const ExperienceSection = <Experiences />;
    const tree = render(ExperienceSection);
    expect(tree).toMatchSnapshot();
  });
});
