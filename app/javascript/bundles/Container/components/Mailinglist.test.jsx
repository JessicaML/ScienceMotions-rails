import React from 'react';
import renderer from 'react-test-renderer';
import Mailinglist from './Mailinglist';

describe('Mailinglist', () => {
  window.scrollTo = jest.fn(() => ({})); 
  it('renders correctly when there are no items', () => {
    const rendered = renderer.create(<Mailinglist />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})
