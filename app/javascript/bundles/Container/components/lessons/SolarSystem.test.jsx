import React from 'react';
import renderer from 'react-test-renderer';
import SolarSystem from './SolarSystem';

describe('SolarSystem', () => {
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<SolarSystem />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})