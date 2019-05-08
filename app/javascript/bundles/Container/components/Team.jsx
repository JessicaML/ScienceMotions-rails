import React from "react";
import teamInfo from "./teamInfo.js";
import teamImgs from "./teamImgs";

const Team = ({}) => (
  <section className="container">
    {teamInfo.map(function(item, key) {
      const imgSrc = teamImgs.find(img => {
        if (img.includes(item.image)) return img;
      });
      return (
        <div className="col-md-3 portfolio-item" key={key}>
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
);

export default Team;
