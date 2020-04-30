import React from "react";

const Text = ({props}) => (
  <section id="text">
    <div dangerouslySetInnerHTML={{__html: props}} />
  </section>
);

export default Text;
