import React from 'react';
import renderer from 'react-test-renderer';

import DNA from './DNA';
describe('LeaveCourseForm', () => {
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<DNA />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
