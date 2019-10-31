import React from "react";
import About from "./About";
import FeaturedLessons from "./FeaturedLessons";
import Testimonials from "./Testimonials";
import MailingList from "./MailingList";

const Container = () => (
  <div className="nav-container">
    <About />
    <FeaturedLessons />
    <Testimonials />
    <MailingList />
  </div>
);

export default Container;
