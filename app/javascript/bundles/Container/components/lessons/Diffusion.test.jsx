import React from 'react';
import renderer from 'react-test-renderer';
import Diffusion from './Diffusion';

describe('Diffusion', () => {
  window.scrollTo = jest.fn(() => ({})); 
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Diffusion />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})