import PropTypes from "prop-types";
import React from "react";

export default class FeaturedLessons extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired // this is passed from the Rails view
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

  updateName = name => {
    this.setState({ name });
  };

  render() {
    return (
      <section id="second" className="container">
        <div className="center-text">
          <div className="row">
            <div className="col-lg-12">
              <div className="header">
                <br />
                <p>
                  <a href="navigation.html">See all lessons here</a>
                </p>
                <h1>Featured Lessons</h1>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 portfolio-item sound">
                <a href="lessons/36">
                  <h1>Indicators</h1>
                </a>
              </div>
              <div className="col-md-4 portfolio-item diffusion">
                <a href="lessons/34">
                  <h1>Cells, Tissues, Organs</h1>
                </a>
              </div>
              <div className="col-md-4 portfolio-item dna">
                <a href="lessons/37">
                  <h1>DNA</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
