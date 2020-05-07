import React from "react";
import DiffusionScript from "./DiffusionScript";
import Text from "./text/Text";

const Diffusion = props => {
  return (
      <section>
        <div id="diffusion">
          <DiffusionScript />
        </div>
        <div>
          <Text props={props.description} />
        </div>
      </section>
  );
};
export default props => <Diffusion {...props} />;
