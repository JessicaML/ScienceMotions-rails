import PropTypes from 'prop-types';
import React from 'react';

import Monika from './Monika';

export default class Team extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 className syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-className
  }

  render() {
    return (
      <Monika />

    );
  }
}
