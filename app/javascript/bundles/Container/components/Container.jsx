import PropTypes from 'prop-types';
import React from 'react';

import Navbar from './Navbar';
import About from './About';
import FeaturedLessons  from './FeaturedLessons';
import Testimonials from './Testimonials';
import MailingList from './MailingList';

export default class Container extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
          <Navbar />
          <About />
          <FeaturedLessons />
          <Testimonials />
          <MailingList />
      </div>
    );
  }
}
