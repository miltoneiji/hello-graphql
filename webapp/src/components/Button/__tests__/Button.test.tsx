import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import Button from '../Button';

describe('<Button />', () => {
  it('renders properly', () => {
    const { container } = render(
      <Button>
        Hello, paper!
      </Button>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
