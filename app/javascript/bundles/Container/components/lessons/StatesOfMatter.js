import React, { Fragment } from "react";
import Text from "./text/Text";

const StatesOfMatter = props => {
  return (
    <Fragment>
      <h1>Test</h1>
      <section id="visual" className="lesson-container">
        <div className="buttons">
          <button id="solid" onClick="changeState(500)">
            SOLID
          </button>
          <button id="liquid" onClick="changeState(200)">
            LIQUID
          </button>
          <button id="gas" onClick="changeState(50)">
            GAS
          </button>
        </div>
        <canvas
          ref="myCanvas"
          width="1000"
          height="1000"
          style={{border: 0, solid: '#000000'}}
        ></canvas>
      </section>
      <Text props={props.description} />
    </Fragment>
  );
};

export default StatesOfMatter;
