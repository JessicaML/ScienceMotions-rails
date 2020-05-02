import React, { Fragment } from "react";
import DiffusionScript from "./DiffusionScript";
import Text from "./text/Text";

const Diffusion = (props) => (
   <Fragment>
     <section id="visual" className="diffusion" className="lesson-container">
     <DiffusionScript props={props} />
     </section>
    <Text props={props.description} />
  </Fragment>
);
export default props => <Diffusion {...props} />;