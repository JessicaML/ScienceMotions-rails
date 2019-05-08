import React from "react";
import MonikaImg from "images/monika.png";

const Monika = ({}) => (
  <div>
    <img className="img-responsive" src={MonikaImg} alt="Monika portrait" />

    <p>
      <span>Monika Singh</span> is a full stack developer. She loves loves
      coding, badminton, exploring new places and always tries to stay uptodate
      about her interests.
    </p>
  </div>
);

export default Monika;
