import PropTypes from 'prop-types';
import React from 'react';

export default class FeaturedLessons extends React.Component {
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
        <div className="container">
            <div className="col-lg-12">
                <div className="header">
                    <br/>
                    <p><a href="#">See all lessons here</a></p>
                    <h2>Featured Lessons</h2>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 portfolio-item className">
                    <a href="#">
                        <h2>Atoms</h2>
                    </a>
                </div>
                <div className="col-md-4 portfolio-item dna">
                    <a href="#">
                        <h2>DNA</h2>
                    </a>
                </div>
                <div className="col-md-4 portfolio-item eye">
                    <a href="#">
                        <h2>Eye</h2>
                    </a>
                </div>

            </div>
            <div className="row">
                <div className="col-md-4 portfolio-item sound">
                    <a href="#">
                        <h2>Sound waves</h2>
                    </a>
                </div>
                <div className="col-md-4 portfolio-item diffusion">
                    <a href="#">
                        <h2>Diffusion</h2>
                    </a>
                </div>
                <div className="col-md-4 portfolio-item className">
                    <a href="#">
                        <h2>Classification</h2>
                    </a>
                </div>

            </div>
            <div className="row">
                <br/>
            </div>
        </div>




    );
  }
}
