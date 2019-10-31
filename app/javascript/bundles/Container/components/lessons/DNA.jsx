import React, { Fragment } from "react";
import { ParallaxProvider, Parallax } from 'react-skrollr'
import Adenine from "images/adenine.png";
import Cytosine from "images/cytosine.png";
import Guanine from "images/guanine.png";
import Thymine from "images/thymine.png";
import DNAText from "./text/DNAText";

const DNA = () => (
  <Fragment>
    <ParallaxProvider>
      <Parallax
        data={{
          'data-top': 'opacity: 0;',
          'data-bottom-center': 'opacity: 1;',
          'data-bottom': 'opacity: 0;'
        }}
      >
        <section id="visual">
          <div className="table">
            <div className="row">
              <div className="col-sm-3 dna-img-container">
                <div className="dna-img-span" ><img src={Cytosine} className="dna-img c" /></div>
                <div className="dna-img-span"><img src={Thymine} className="dna-img t" /></div>
                <div className="dna-img-span"><img src={Adenine} className="dna-img a" /></div>
                <div className="dna-img-span"><img src={Guanine} className="dna-img g" /></div>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </ParallaxProvider>
    <DNAText />

  </Fragment>
);

export default DNA;
