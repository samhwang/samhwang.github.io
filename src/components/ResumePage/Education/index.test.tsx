/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import Education from '.';
import { usePersonalInformationData } from '../../../hooks';

jest.mock('../../../hooks');

describe('Education section render', () => {
  it('Should match snapshot', () => {
    const mockHook = usePersonalInformationData as jest.MockedFunction<
      typeof usePersonalInformationData
    >;
    mockHook.mockReturnValueOnce({
      education: [
        {
          institute: 'Test',
          degree: 'Test',
          major: 'Test',
          duration: '2020 - 2021',
        },
      ],
    });
    const EducationSection = <Education />;
    const tree = render(EducationSection);
    expect(tree).toMatchSnapshot();
  });
});
