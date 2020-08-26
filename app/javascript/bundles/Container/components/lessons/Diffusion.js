import React from "react";
import DiffusionScript from "./DiffusionScript";
import Text from "./text/Text";
import ButtonLinkToText from "./ButtonLinkToText";

const Diffusion = props => {
  return (
    <section className="diffusionWrapper">
      <div className="buttonWrapper">
        <ButtonLinkToText />
      </div>
      <DiffusionScript />
      <Text props={props.description} />
    </section>
  );
};
export default props => <Diffusion {...props} />;
