import React from 'react';
import renderer from 'react-test-renderer';

import DNA from './DNA';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<DNA />).toJSON();
  expect(tree).toMatchSnapshot();
});