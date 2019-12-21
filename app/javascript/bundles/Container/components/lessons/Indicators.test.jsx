import React from 'react';
import renderer from 'react-test-renderer';
import Indicators from './Indicators';

describe('Indicators', () => {
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Indicators />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
