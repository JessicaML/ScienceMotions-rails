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
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
    <section id="test">
        <div className="container">
            <div className="col-lg-12">
                <div className="header">
                    <br/>
                    <h1>Monika Singh is a full stack developer. She loves loves coding, badminton, exploring new places and always tries to stay uptodate about her interests.

</h1>
                    <br/>
                    <Monika />
                </div>
            </div>
        </div>
    </section>

    );
  }
}
