import React from 'react';
import renderer from 'react-test-renderer';
import Sound from './Sound';

describe('Sound', () => {
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Sound />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
