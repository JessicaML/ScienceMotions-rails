import PropTypes from 'prop-types';
import React from 'react';
import TubeOne from 'images/tube-1.png'
import TubeTwo from 'images/tube-2.png'
import TubeBright from 'images/tube-bright.gif'
import FacesFast from 'images/faces-fast.gif'

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
    <section className="container">
          <div className="row">
               <div className="col-md-3 portfolio-item">
                    <img className="img-responsive" src={TubeOne} alt=""/>
                </div>
                <div className="col-md-3 portfolio-item">
                <img className="img-responsive" src={TubeTwo} alt=""/>
            </div>
            <div className="col-md-3 portfolio-item">
                <img className="img-responsive" src={FacesFast} alt=""/>
            </div>
            <div className="col-md-3 portfolio-item">
                <img className="img-responsive" src={TubeBright} alt=""/>
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
          <div className="row">
               <div className="col-md-3 portfolio-item">
                    <img className="img-responsive" src={FacesFast} alt=""/>
                </div>
                <div className="col-md-3 portfolio-item">
                    <img className="img-responsive" src={TubeTwo} alt=""/>
                </div>
                <div className="col-md-3 portfolio-item">
                    <img className="img-responsive" src={TubeOne} alt=""/>
                </div>
                <div className="col-md-3 portfolio-item">
                    <img className="img-responsive" src={TubeBright} alt=""/>
                </div>
            </div>
        </section>
    );
  }
}
