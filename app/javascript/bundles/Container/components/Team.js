import React from "react";
import teamInfo from "./teamInfo.js";
import teamImgs from "./teamImgs";
import { ParallaxProvider, Parallax } from "react-skrollr";
import styles from './Team.module.scss';

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

      <section className="container">
        <div className={styles.header}>
          <h1>Team</h1>
        </div>
        <div className={styles.wrapper}>
          {teamInfo.map(function(item, key) {
            const imgSrc = teamImgs.find(img => {
              if (img.includes(item.image)) return img;
            });
            return (
              <div className={styles.teamItem} key={key}>
                <img
                  className={styles.img}
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
        </div>
      </section>
    </Parallax>
  </ParallaxProvider>
);

export default Team;
