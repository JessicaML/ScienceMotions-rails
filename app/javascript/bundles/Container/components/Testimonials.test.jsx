import React from 'react';
import renderer from 'react-test-renderer';
import Testimonials from './Testimonials';

describe('Testimonials', () => {
  window.scrollTo = jest.fn(() => ({})); 
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Testimonials />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
