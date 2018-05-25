import PropTypes from 'prop-types';
import React from 'react';

export default class Indicators extends React.Component {
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
    <section id="visual">
        <div class="table">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <p>Acidic Solution</p>
                    <p class="animated infinite pulse" style="color:red;">[H+]>[OH-]</p>
                    <div class="redlitmus animated bounceIn">Red litmus - stays red</div>
                    <br />
                    <div class="bluelitmus red animated bounceIn">Blue litmus - turns red</div>
                </div>    
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <p>Neutral Solution</p>
                    <p class="animated infinite pulse">[H+]=[OH-]</p>
                    <div class="redlitmus animated bounceIn">Red litmus - stays red</div>
                    <br />
                    <div class="bluelitmus animated bounceIn">Blue litmus - stays blue</div>
                </div>    
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <p>Basic Solution</p>
                    <p class="animated infinite pulse" style="color:blue;">[H+]
                        <[OH-]</p>
                            <div class="redlitmus blu animated bounceIn">
                                Red litmus - turns blue
                            </div>
                            <br />
                            <div class="bluelitmus animated bounceIn">
                                Blue litmus - stays blue
                            </div>
                </div>
            </div>   
        </div>     
    </section>
    );
  }
}
