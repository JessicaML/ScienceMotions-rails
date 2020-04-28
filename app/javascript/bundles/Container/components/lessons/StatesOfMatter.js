import React, { Fragment } from "react";
import Text from "./text/Text";
import eye1 from "../../../../../assets/images/eye1.png";
import eye2 from "../../../../../assets/images/eye2.png";

const Atoms = (props) => (
  <Fragment>
  {console.log('props', props)}
    <section id="visual" className="lesson-container">
    <div class="buttons">
      <button id="solid" onClick="changeState(500)">SOLID</button>
      <button id="liquid" onClick="changeState(200)">LIQUID</button>
      <button id="gas" onClick="changeState(50)">GAS</button>
    </div>
    <canvas id="myCanvas" width="1000" height="1000" style="border:0px solid #000000;">

    </canvas>
    </section>
    <Text props={props} />
  </Fragment>
);

export default Atoms;
