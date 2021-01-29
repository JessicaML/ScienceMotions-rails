import React, { lazy, Suspense } from "react";
import Loader from "../../../../assets/images/loader.gif";

const About = lazy(() => import("./About"));
const FeaturedLessons = lazy(() => import("./FeaturedLessons"));
const Testimonials = lazy(() => import("./Testimonials"));
const MailingList = lazy(() => import("./MailingList"));

const renderLoader = () => (
  <div className="loadingImage">
    <img src={Loader} alt="loading image" />
  </div>
);

const Container = () => (
  <Suspense fallback={renderLoader()}>
    <div className="nav-container">
      <About />
      <FeaturedLessons />
      <Testimonials />
      <MailingList />
    </div>
  </Suspense>
);

export default Container;
