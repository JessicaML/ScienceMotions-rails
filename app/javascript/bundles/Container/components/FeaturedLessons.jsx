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
                    <a href="physics/atoms">
                        <h1>Atoms</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item dna">
                    <a href="biology/dna">
                        <h1>DNA</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item eye">
                    <a href="biology/eye">
                        <h1>Eye</h1>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 portfolio-item sound">
                    <a href="physics/sound">
                        <h1>Sound waves</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item diffusion">
                    <a href="chemistry/diffusion">
                        <h1>Diffusion</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item class">
                    <a href="biology/classification">
                        <h1>Classification</h1>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 portfolio-item sound">
                    <a href="chemistry/indicators">
                        <h1>Indicators</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item diffusion">
                    <a href="chemistry/statesofmatter">
                        <h1>Solar System</h1>
                    </a>
                </div>
                <div class="col-md-4 portfolio-item class">
                    <a href="chemistry/statesofmatter">
                        <h1>States of matter</h1>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 portfolio-item sound">
                    <a href="chemistry/periodictable">
                        <h1>Groups And Periods</h1>
                    </a>
                </div>
                <div class="col-md-6 portfolio-item sound">
                    <a href="chemistry/periodictable">
                        <h1>Galaxy</h1>
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
