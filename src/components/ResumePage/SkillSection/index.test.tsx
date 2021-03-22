/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import SkillSection from '.';
import { usePersonalInformationData } from '../../../hooks';

jest.mock('../../../hooks');

describe('Skill Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const mockHook = usePersonalInformationData as jest.MockedFunction<
      typeof usePersonalInformationData
    >;
    mockHook.mockReturnValueOnce({
      skills: [
        {
          title: 'asdfasdf',
          description: ['asdfasdf1234'],
        },
      ],
      techStack: ['js'],
    });
    const SkillSectionComponent = <SkillSection />;
    const tree = render(SkillSectionComponent);
    expect(tree).toMatchSnapshot();
  });
});
