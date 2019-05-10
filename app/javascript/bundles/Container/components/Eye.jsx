import React, { Fragment } from "react";
import EyeText from "./text/EyeText";
import Pupil from "images/pupil.png";
import Cornea from "images/cornea.png";
import Fovea from "images/fovea.png";
import Cillary_muscle from "images/cillary_muscle.png";
import Lens from "images/lens.png";
import Conjunctiva from "images/conjunctiva.png";

const Eye = () => (
  <Fragment>
    <section id="top">
      <div id="" />
      <div id="pupil">
        <img src={Pupil} />
      </div>
      <div id="cornea">
        <img src={Cornea} />
      </div>

      <div id="fovea">
        <img src={Fovea} />
      </div>

      <div id="cillary_muscle">
        <img src={Cillary_muscle} />
      </div>

      <div id="lens">
        <img src={Lens} />
      </div>

      <div id="conjunctiva">
        <img src={Conjunctiva} />
      </div>
    </section>
    <EyeText />
  </Fragment>
);

export default Eye;
