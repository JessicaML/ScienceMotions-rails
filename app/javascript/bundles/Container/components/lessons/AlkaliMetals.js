import React from "react";
import Text from "./text/Text";
import Scene from "./AlkaliMetalsThree";

const AlkaliMetals = props => {
  
  return (
    <div>
      <section id="container" className="lesson-container">
        
        <Scene />
      </section>
      <Text props={props.description} />
    </div>
  );
};

export default props => <AlkaliMetals {...props} />;