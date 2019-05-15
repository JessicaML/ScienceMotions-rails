import React from "react";

const DNAText = ({}) => (
  <section className="text">
    <div className="table">
      <section className="text">
        <h1>Structure of DNA</h1>
        <p>Each gene in a molecule of DNA contains:</p>
        <p>
          _A different sequence of
          <span id="text-1"> bases</span>
        </p>
        <p>_Codes for a particular protein</p>
        <p>
          In DNA, two strands coil together to form a double helix. There are
          chemical cross-links between the two strands, formed by
          <span id="text-2"> pairs of bases</span>
        </p>
        .
        <p>
          Each strand of DNA is made of chemicals called bases. Do not confuse
          these with the bases you meet when you study acids and alkalis in
          chemistry. There are four different types of bases, shown as
          <span id="text-3"> A, T, C and G</span>.
        </p>
        <p>
          Proteins are made in the cytoplasm of a cell, not in the nucleus.
          Genes cannot leave the nucleus, so a copy of the gene is needed. This
          copy is able to leave the nucleus to go into the cytoplasm so that
          proteins can be made by the cell.
        </p>
      </section>
    </div>
  </section>
);

export default DNAText;
