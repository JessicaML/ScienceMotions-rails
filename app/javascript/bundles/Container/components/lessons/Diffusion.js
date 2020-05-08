import React from "react";
import DiffusionScript from "./DiffusionScript";
import Text from "./text/Text";

const Diffusion = props => {
  return (
      <section>
        <div className="diff">
          <DiffusionScript />
        </div>
        <div>
          <Text props={props.description} />
        </div>
      </section>
  );
};
export default props => <Diffusion {...props} />;
