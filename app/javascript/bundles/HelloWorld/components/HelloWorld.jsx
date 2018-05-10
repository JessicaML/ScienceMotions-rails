import PropTypes from 'prop-types';
import React from 'react';

export default class HelloWorld extends React.Component {
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
        <div id="container" data-0="background-image:linear-gradient(90deg, hsl(172, 100%, 50%), hsl(318, 68%, 68%);" data-450="background-image:linear-gradient(450deg, hsl(172, 100%, 50%), hsl(318, 68%, 68%);">

        <h1>ScienceMotions</h1>
        <p>Biology, chemistry and physics lessons from the future.</p>
      </div>



    );
  }
}
