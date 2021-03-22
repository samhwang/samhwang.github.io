/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import ProjectSection from '.';
import { usePersonalInformationData } from '../../../hooks';

jest.mock('../../../hooks');

describe('Project section rendering', () => {
  it('Should match snapshot', () => {
    const mockHook = usePersonalInformationData as jest.MockedFunction<
      typeof usePersonalInformationData
    >;
    mockHook.mockReturnValueOnce({
      projects: [
        {
          title: 'Test Title',
          description: 'Test Description',
          url: 'test url',
        },
      ],
    });
    const ProjectsComponent = <ProjectSection />;
    const tree = render(ProjectsComponent);
    expect(tree).toMatchSnapshot();
  });
});
