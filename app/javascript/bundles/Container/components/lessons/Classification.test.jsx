import React from 'react';
import renderer from 'react-test-renderer';
import Classification from './Classification';

describe('Classification', () => {
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Classification />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
