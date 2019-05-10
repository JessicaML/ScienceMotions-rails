import React, { Fragment } from "react";
import IndicatorsText from "./text/IndicatorsText";

const Indicators = () => (
  <Fragment>
    <section id="visual">
      <div className="table">
        <div className="row">
          <div className="col-sm-1" />
          <div className="col-sm-3">
            <p>Acidic Solution</p>
            <p className="animated infinite pulse">[H+] &#62 [OH-]</p>
            <div className="redlitmus animated bounceIn">
              Red litmus - stays red
            </div>
            <br />
            <div className="bluelitmus red animated bounceIn">
              Blue litmus - turns red
            </div>
          </div>
          <div className="col-sm-1" />
          <div className="col-sm-3">
            <p>Neutral Solution</p>
            <p className="animated infinite pulse">[H+]=[OH-]</p>
            <div className="redlitmus animated bounceIn">
              Red litmus - stays red
            </div>
            <br />
            <div className="bluelitmus animated bounceIn">
              Blue litmus - stays blue
            </div>
          </div>
          <div className="col-sm-1" />
          <div className="col-sm-3">
            <p>Basic Solution</p>
            <p className="animated infinite pulse">[H+] &#60; [OH-] </p>
            <div className="redlitmus blu animated bounceIn">
              Red litmus - turns blue
            </div>
            <br />
            <div className="bluelitmus animated bounceIn">
              Blue litmus - stays blue
            </div>
          </div>
        </div>
      </div>
    </section>
    <IndicatorsText />
  </Fragment>
);

export default Indicators;
