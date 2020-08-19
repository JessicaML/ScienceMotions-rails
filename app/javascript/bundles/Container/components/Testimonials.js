import React from "react";
import styles from './Testimonials.module.scss';

const Testimonials = () => (
  <section id="third" className={styles.wrapper}>
    <div className={styles.header}>
      <h1>Testimonials</h1>
    </div>
    <div className={styles.testimonials}>
      <div>
        <i>
          “It looks really cool! I use GCSE Bitesize but it doesn’t always
          explain things that well.”
        </i>
        <p> Blessing, GCSE Student, Brixton </p>
      </div>
      <div>
        <i>
          “This looks like it would be very helpful. Right now I use Gojimo,
          but it just uses lots of questions”
        </i>
        <p>Joseph, A-Level Biology Student, Camberwell</p>
      </div>
    </div>
  </section>
);
export default Testimonials;
