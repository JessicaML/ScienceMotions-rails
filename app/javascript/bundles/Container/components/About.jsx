import PropTypes from 'prop-types';
import React from 'react';

export default class About extends React.Component {

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
    <div className="container">
          <div className="row">
                <div className="col-md-3 portfolio-item">
                    <a href="#">
                    <img className="img-responsive" src="images/gifs/tube-2.png" alt=""/>
                    </a>
                </div>
                <div className="col-md-3 portfolio-item">
                    <a href="#">
                      <img className="img-responsive" src="images/gifs/faces-fast.gif" alt=""/>
                    </a>
                </div>
                <div className="col-md-3 portfolio-item">
                    <a href="#">
                    <img className="img-responsive" src="images/gifs/tube-2.png" alt=""/>
                    </a>
                </div>
                <div className="col-md-3 portfolio-item">
                    <a href="#">
                    <img className="img-responsive" src="images/gifs/tube.gif" alt=""/>
                    </a>
                </div>
                </div>
            <div className="row">
            <div className="col-lg-12">
                <div className="header">
                    <h1>ScienceMotions</h1>
                    <p>Biology, chemistry and physics lessons from the future.</p>
                    <p><a href="#">see more</a></p>
                </div>
            </div>
          </div>
        </div>
    );
  }
}
