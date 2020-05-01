import React, { Fragment } from "react";
import Text from "./text/Text";
import { ParallaxProvider, Parallax } from "react-skrollr";

const Diffusion = (props) => (
  <Fragment>
      data={{
        "data-0":
          "background-image: linear-gradient(90deg, hsl(172, 100%, 50%), hsl(318, 68%, 68%)",
        "data-450":
          "background-image: linear-gradient(450deg, hsl(172, 100%, 50%), hsl(318, 68%, 68%)"
      }}
    >
    <section id="visual" className="diffusion">
      
    </section>
    <Text props={this.props.description} />
  </Fragment>
);

export default Diffusion;