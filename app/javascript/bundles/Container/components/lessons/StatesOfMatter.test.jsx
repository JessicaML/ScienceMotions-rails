import React from 'react';
import renderer from 'react-test-renderer';
import StatesOfMatter from './Sound';

describe('StatesOfMatter', () => {
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<StatesOfMatter />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
