import React from "react";
import teamInfo from "./teamInfo.js";
import teamImgs from "./teamImgs";
import { ParallaxProvider, Parallax } from "react-skrollr";

const Team = ({}) => (
  <ParallaxProvider className="nav-container">
    <Parallax
      data={{
        "data-0":
          "background-image: linear-gradient(90deg, hsl(172, 100%, 50%), hsl(318, 68%, 68%)",
        "data-450":
          "background-image: linear-gradient(450deg, hsl(172, 100%, 50%), hsl(318, 68%, 68%)"
      }}
    >

      <section className="container teamWrapper">
        <div className="header">
          <h1>Team</h1>
        </div>
        <div className="wrapper">
          {teamInfo.map(function(item, key) {
            const imgSrc = teamImgs.find(img => {
              if (img.includes(item.image)) return img;
            });
            return (
              <div className="teamItem" key={key}>
                <img
                  className="img"
                  src={imgSrc}
                  alt={item.image}
                />
                <p>
                  <span>{item.name}</span> {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </Parallax>
  </ParallaxProvider>
);

export default Team;
