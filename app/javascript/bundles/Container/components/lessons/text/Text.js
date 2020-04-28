import React from "react";

const AtomsText = (props) => (
  <section id="text">
    {console.log('props', props)}

    <div>
      <h1>Atomic structure</h1>
      <p>{props}</p>
      <p>
        All substances are made from tiny particles called
        <span id="text-1"> atoms</span>. An atom has a small central nucleus
        made up of smaller sub-atomic particles called
        <span id="text-2"> protons and neutrons</span>. The nucleus is
        surrounded by even smaller sub-atomic particles called
        <span id="text-3"> electrons</span>.
      </p>
    </div>
  </section>
);

export default AtomsText;
