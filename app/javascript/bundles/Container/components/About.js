import React from "react";
import TubeOne from "../../../../assets/images/tube-1.png";
import TubeTwo from "../../../../assets/images/tube-2.png";
import TubeBright from "../../../../assets/images/tube-bright.gif";
import FacesFast from "../../../../assets/images/faces-fast.gif";
import { ParallaxProvider, Parallax } from "react-skrollr";
import styles from './About.module.scss';

const About = ({}) => (
  <ParallaxProvider>
    <Parallax
      data={{
        "data-0":
          "background-image: linear-gradient(90deg, hsl(172, 100%, 50%), hsl(318, 68%, 68%)",
        "data-450":
          "background-image: linear-gradient(450deg, hsl(172, 100%, 50%), hsl(318, 68%, 68%)"
      }}
    >

        <div className={styles.imgItems}>
          <img className="img" src={TubeOne} alt="test tube" />
          <img className="img" src={TubeTwo} alt="test tube" />
          <img className="img" src={FacesFast} alt="face" />
          <img className="img" src={TubeBright} alt="test tube" />
        </div>
        <div className={styles.header}>
          <h1>ScienceMotions</h1>
          <p>Biology, chemistry and physics lessons from the future.</p>
          <p>
            <a href="#">see more</a>
          </p>
        </div>
        <div className={styles.imgItems}>
          <img className="img" src={FacesFast} alt="face" />
          <img className="img" src={TubeTwo} alt="test tube" />
          <img className="img" src={TubeOne} alt="test tube" />
          <img className="img" src={TubeBright} alt="test tube" />
        </div>
    </Parallax>
  </ParallaxProvider>
);

export default About;
