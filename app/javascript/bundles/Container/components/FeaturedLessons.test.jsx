import React from 'react';
import renderer from 'react-test-renderer';
import FeaturedLessons from './FeaturedLessons';

describe('FeaturedLessons', () => {
  window.scrollTo = jest.fn(() => ({})); 
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<FeaturedLessons />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
