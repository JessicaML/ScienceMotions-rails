import React, { useState } from "react";
import Text from "./text/Text";
import StatesOfMatterCanvas from "./StatesOfMatterCanvas";

const StatesOfMatter = props => {
  const [circles, setCircles] = useState(100);

  return (
    <div>
      <section id="visual" className="lesson-container">
        <div className="buttons">
          <button id="solid" onClick={() => setCircles(500)}>
            SOLID
          </button>
          <button id="liquid" onClick={() => setCircles(200)}>
            LIQUID
          </button>
          <button id="gas" onClick={() => setCircles(50)}>
            GAS
          </button>
        </div>
        <StatesOfMatterCanvas circles={circles} />
      </section>
      <Text props={props.description} />
    </div>
  );
};

// export default StatesOfMatter;
export default props => <StatesOfMatter {...props} />;
