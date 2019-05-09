import React from "react";
import TubeOne from "images/tube-1.png";
import TubeTwo from "images/tube-2.png";
import TubeBright from "images/tube-bright.gif";
import FacesFast from "images/faces-fast.gif";
import { ParallaxProvider, Parallax } from "react-skrollr";

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
      <section className="container center-text">
        <div className="row">
          <div className="col-xs-6 col-md-3 portfolio-item">
            <img className="img-responsive" src={TubeOne} alt="" />
          </div>
          <div className="hidden-xs hidden-sm col-md-3 portfolio-item">
            <img className="img-responsive" src={TubeTwo} alt="" />
          </div>
          <div className="col-xs-6 col-md-3 portfolio-item">
            <img className="img-responsive" src={FacesFast} alt="" />
          </div>
          <div className="hidden-xs hidden-sm col-md-3 portfolio-item">
            <img className="img-responsive" src={TubeBright} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="header">
              <h1>ScienceMotions</h1>
              <p>Biology, chemistry and physics lessons from the future.</p>
              <p>
                <a href="#">see more</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-3 portfolio-item">
            <img className="img-responsive" src={FacesFast} alt="" />
          </div>
          <div className="hidden-xs hidden-sm col-md-3 portfolio-item">
            <img className="img-responsive" src={TubeTwo} alt="" />
          </div>
          <div className="hidden-xs hidden-sm col-md-3 portfolio-item">
            <img className="img-responsive" src={TubeOne} alt="" />
          </div>
          <div className="col-xs-6 col-md-3 portfolio-item">
            <img className="img-responsive" src={TubeBright} alt="" />
          </div>
        </div>
      </section>
    </Parallax>
  </ParallaxProvider>
);

export default About;
