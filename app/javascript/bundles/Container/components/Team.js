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
      <h1>Team</h1>

      <section
        className="container"
        style={{
          paddingTop: "30px"
        }}
      >
        {teamInfo.map(function(item, key) {
          const imgSrc = teamImgs.find(img => {
            if (img.includes(item.image)) return img;
          });
          return (
            <div className="col-md-4 portfolio-item" key={key}>
              <img
                className="img-responsive"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "245px",
                  height: "245px",
                  marginBottom: "35px"
                }}
                src={imgSrc}
                alt={item.image}
              />
              <p
                style={{
                  fontSize: "12px"
                }}
              >
                {" "}
                <span>{item.name}</span> {item.description}
              </p>
            </div>
          );
        })}
      </section>
    </Parallax>
  </ParallaxProvider>
);

export default Team;
