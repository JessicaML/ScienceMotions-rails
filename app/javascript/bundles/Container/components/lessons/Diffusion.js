import React from "react";
import DiffusionScript from "./DiffusionScript";
import Text from "./text/Text";
import ButtonLinkToText from "./ButtonLinkToText";

const Diffusion = props => {
  return (
      <section>
        <ButtonLinkToText />

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
