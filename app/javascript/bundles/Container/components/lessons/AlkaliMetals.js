import React from "react";
import Text from "./text/Text";
import Box from "./AlkaliMetalsThree";

const AlkaliMetals = props => {
  
  return (
    <div>
      <section id="top" className="lesson-container">
        <Box />
        <div className="main">
          <div id="container"></div>
          <div id="menu">
            <a className="button-flip">
              <button id="helix" className="btn" style={{color: "#fff"}}>VIEW ALKALI METALS</button>
            </a>
            <a className="button-flip">
              <button id="table">TABLE VIEW</button>
            </a>
          </div>
        </div>
      </section>
      <Text props={props.description} />
    </div>
  );
};

export default props => <AlkaliMetals {...props} />;