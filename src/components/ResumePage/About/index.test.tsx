/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import About from '.';
import { usePersonalInformationData } from '../../../hooks';

jest.mock('../../../hooks');

describe('Render About Data', () => {
  it('Should match snapshot', () => {
    const mockHook = usePersonalInformationData as jest.MockedFunction<
      typeof usePersonalInformationData
    >;
    mockHook.mockReturnValueOnce({
      firstName: 'test',
      lastName: 'test',
      address: '123 Test Drive',
      email: 'test@test.com',
      socialLinks: [
        {
          icon: 'test-icon',
          name: 'test social icon',
          url: 'test social URL',
        },
      ],
    });
    const AboutSection = <About />;
    const tree = render(AboutSection);
    expect(tree).toMatchSnapshot();
  });
});
