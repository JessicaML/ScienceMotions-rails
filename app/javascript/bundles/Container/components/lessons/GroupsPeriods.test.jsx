import React from 'react';
import renderer from 'react-test-renderer';
import GroupsPeriods from './GroupsPeriods';

describe('GroupsPeriods', () => {
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<GroupsPeriods />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
