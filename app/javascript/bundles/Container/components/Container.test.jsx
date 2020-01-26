import React from 'react';
import renderer from 'react-test-renderer';
import Container from './Container';

describe('Container', () => {
  window.scrollTo = jest.fn(() => ({})); 
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Container />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
