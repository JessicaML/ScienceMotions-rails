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
        <section id="second">
        <div class="container">
            <div class="col-lg-12">
                <div class="header">
                    <br/>
                    <p><a href="navigation.html">See all lessons here</a></p>
                    <h1>Featured Lessons</h1>
                    <br/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 portfolio-item class">
                    <a href="atoms/index.html">
                        <h1>Atoms</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item dna">
                    <a href="dna/index.html">
                        <h1>DNA</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item eye">
                    <a href="eye/index.html">
                        <h1>Eye</h1>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 portfolio-item sound">
                    <a href="sound_waves/index.html">
                        <h1>Sound waves</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item diffusion">
                    <a href="diffusion/index.html">
                        <h1>Diffusion</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item class">
                    <a href="classification/index.html">
                        <h1>Classification</h1>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 portfolio-item sound">
                    <a href="indicator/index.html">
                        <h1>Indicators</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item diffusion">
                    <a href="solarsystem/index.html">
                        <h1>Solar System</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item class">
                    <a href="states/lesson1.html">
                        <h1>State of matter</h1>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 portfolio-item sound">
                    <a href="groups_periods/index.html">
                        <h1>Groups And Periods</h1>
                    </a>
                </div>
            </div>
            <div class="row">
                <br/>
            </div>
        </div>
    </section>




    );
  }
}
