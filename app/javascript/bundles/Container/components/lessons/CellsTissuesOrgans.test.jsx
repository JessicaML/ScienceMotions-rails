import React from 'react';
import renderer from 'react-test-renderer';
import CellsTissuesOrgans from './CellsTissuesOrgans';

describe('CellsTissuesOrgans', () => {
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<CellsTissuesOrgans />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
