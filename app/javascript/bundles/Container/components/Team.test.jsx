import React from 'react';
import renderer from 'react-test-renderer';
import Team from './Team';

describe('Team', () => {
  window.scrollTo = jest.fn(() => ({})); 
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Team />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
