import React from "react";
import Text from "./text/Text";
import AlkaliMetalsThree from "./AlkaliMetalsThree";

const AlkaliMetals = props => {
  
  return (
    <div>
      <section id="container" className="lesson-container">
        
        <AlkaliMetalsThree />
      </section>
      <Text props={props.description} />
    </div>
  );
};

export default props => <AlkaliMetals {...props} />;