import React, { Fragment } from "react";
import Text from "./text/Text";
import Pupil from "../../../../../assets/images/pupil.png";
import Cornea from "../../../../../assets/images/cornea.png";
import Fovea from "../../../../../assets/images/fovea.png";
import Cillary_muscle from "../../../../../assets/images/cillarymuscle.png";
import Lens from "../../../../../assets/images/lens.png";
import Conjunctiva from "../../../../../assets/images/conjunctiva.png";
import ButtonLinkToText from "./ButtonLinkToText";

const Eye = (props) => (
  <Fragment>
    <section id="visual" className="lesson-container eye">
      <ButtonLinkToText />
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
    <Text props={props.description} />
  </Fragment>
);

export default Eye;
