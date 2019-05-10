import React, { Fragment } from "react";
import AtomText from "./text/AtomText";
// import Atomsjs from "Atoms.js";

const Atoms = () => (
  <Fragment>
    <section id="top">
      <div className="box" />
      <div className="box2" />
      <div className="gurprit">
        <div className="face facepiece">
          <svg viewBox="0 0 744.1 1052.4">
            <ellipse
              transform="scale(1,-1)"
              ry="270"
              rx="270"
              cy="-493.8"
              cx="371.4"
              style={{
                fill: "#00ff00",
                strokeLinecap: "square",
                strokeWidth: "10",
                stroke: "#000"
              }}
            />
          </svg>
        </div>
        <svg viewBox="0 0 744.1 1052.4" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style="display:none"
      >
        <defs>
          <filter id="squiggly-0">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="0"
            />
            <feDisplacementMap
              id="displacement"
              in="SourceGraphic"
              in2="noise"
              scale="2"
            />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="squiggly-2">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="3"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="squiggly-4">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="4"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>
      </svg>
    </section>
    <AtomText />
  </Fragment>
);

export default Atoms;
