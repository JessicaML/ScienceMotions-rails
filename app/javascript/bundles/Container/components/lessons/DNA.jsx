import React, { Fragment } from "react";
import Adenine from "images/adenine.png";
import Cytosine from "images/cytosine.png";
import Guanine from "images/guanine.png";
import Thymine from "images/thymine.png";
import DNAText from "./text/DNAText";
import { ParallaxProvider, Parallax } from "react-skrollr";

const DNA = () => (
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
    <section id="visual">
      <img src={Thymine} className="dna-img t" />
      <img src={Cytosine} className="dna-img c" />
      <img src={Adenine} className="dna-img a" />
      <img src={Guanine} className="dna-img g" />
    </section>
    </Parallax>
  </ParallaxProvider>

    <DNAText />

  </Fragment>
);

export default DNA;
