import React from 'react';
import { shallow } from 'enzyme';
/* import 'jest-styled-components'; */
import { Button } from './button';

describe('Button component', () => {
  it('Renders button', () => {
    const button = shallow(<Button>button</Button>);
    expect(button).toMatchSnapshot();
  });
});
