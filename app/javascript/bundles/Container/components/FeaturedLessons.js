import React from "react";
import styles from './FeaturedLessons.module.scss';

const FeaturedLessons = () => (
  <section id="second" className={styles.wrapper}>
    <div className={styles.header}>
      <a href="navigation.html">See all lessons here</a>
      <h1>Featured Lessons</h1>
    </div>
    <div className={styles.links}>
      <a href="lessons/1">
        <h1>Indicators</h1>
      </a>
      <a href="lessons/3">
        <h1>Cells, Tissues, Organs</h1>
      </a>
      <a href="lessons/2">
        <h1>DNA</h1>
      </a>
    </div>
  </section>
);
export default FeaturedLessons;
