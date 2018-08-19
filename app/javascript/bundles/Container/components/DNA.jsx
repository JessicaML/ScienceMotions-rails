import PropTypes from "prop-types";
import React from "react";
import Adenine from "images/adenine.png";
import Cytosine from "images/cytosine.png";
import Guanine from "images/guanine.png";
import Thymine from "images/thymine.png";
// import "../../../scimo/scripts/jquery-3.3.1.min.js";
// import "../../../scimo/scripts/DNA.js";

const DNA = ({}) => (
  <section id="visual">
    <div className="table">
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-3">
          <p>DNA</p>
          <p>Here is the DNA lesson</p>
          <img src={Cytosine} className="dna-img" className="c" />
          <img src={Thymine} className="dna-img" className="t" />
          <img src={Adenine} className="dna-img" className="a" />
          <img src={Guanine} className="dna-img" className="g" />
        </div>
      </div>
    </div>
  </section>
);

export default DNA;
