import React from 'react';
import renderer from 'react-test-renderer';
import About from './About';

describe('About', () => {
  window.scrollTo = jest.fn(() => ({})); 
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<About />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
