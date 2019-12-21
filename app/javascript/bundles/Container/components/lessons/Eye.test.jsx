import React from 'react';
import renderer from 'react-test-renderer';
import Eye from './Eye';

describe('Eye', () => {
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Eye />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
