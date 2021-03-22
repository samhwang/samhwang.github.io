/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import School from './School';

describe('School Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const input = {
      institute: 'RMIT University',
      degree: 'Bachelor of IT',
      major: '',
      duration: 'Oct 2016 - Oct 2017',
    };
    const tree = render(
      <School
        institute={input.institute}
        degree={input.degree}
        major={input.major}
        duration={input.duration}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
