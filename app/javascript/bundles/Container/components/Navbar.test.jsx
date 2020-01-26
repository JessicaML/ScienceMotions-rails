import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('Navbar', () => {
  window.scrollTo = jest.fn(() => ({})); 
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Navbar />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
