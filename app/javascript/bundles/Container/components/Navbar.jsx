import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#" />
      </div>
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">All lessons</a>
          </li>
          <li>
            <a href="#">Featured lessons</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default NavBar;
