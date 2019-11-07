import React from 'react';
import renderer from 'react-test-renderer';

import Atoms from './Atoms';
describe('Atoms', () => {
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Atoms />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
