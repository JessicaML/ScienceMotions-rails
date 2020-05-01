import React, { useRef } from "react";
import Text from "./text/Text";

const StatesOfMatter = (props) => {
   const canvas = useRef(null);

  const changeState =  function () {

   };

  return (
    <div>
      <section id="visual" className="lesson-container">
        <div className="buttons">
          <button id="solid" onClick={changeState(500)}>
            SOLID
          </button>
          <button id="liquid" onClick={changeState(200)}>
            LIQUID
          </button>
          <button id="gas" onClick={changeState(50)}>
            GAS
          </button>
        </div>
        <canvas
          ref={canvas}
          width="1000"
          height="1000"
          style={{ border: 0, solid: "#000000" }}
        ></canvas>
      </section>
      <Text props={props.description} />
    </div>
  );
};

// export default StatesOfMatter;
export default props => <StatesOfMatter {...props} />
