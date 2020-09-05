import React from "react";
import { hot } from 'react-hot-loader/root'
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

export default hot(Container);
