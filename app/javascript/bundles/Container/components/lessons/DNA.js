import React, { Fragment } from "react";
import Adenine from "../../../../../assets/images/adenine.png";
import Cytosine from "../../../../../assets/images/cytosine.png";
import Guanine from "../../../../../assets/images/guanine.png";
import Thymine from "../../../../../assets/images/thymine.png";
import Text from "./text/Text";
import { ParallaxProvider, Parallax } from "react-skrollr";
import ButtonLinkToText from "./ButtonLinkToText";

const DNA = (props) => (
  <Fragment>
    <ParallaxProvider>
    <Parallax
      data={{
        "data-0":
          "background-image: linear-gradient(90deg, hsl(172, 100%, 50%), hsl(318, 68%, 68%)",
        "data-450":
          "background-image: linear-gradient(450deg, hsl(172, 100%, 50%), hsl(318, 68%, 68%)"
      }}
    >
    <section id="visual" className="dnaWrapper">
      <ButtonLinkToText />
      <img src={Thymine} className="dna-img t" />
      <img src={Cytosine} className="dna-img c" />
      <img src={Adenine} className="dna-img a" />
      <img src={Guanine} className="dna-img g" />
    </section>
    </Parallax>
  </ParallaxProvider>

    <Text props={props.description} />

  </Fragment>
);

export default DNA;
