import React, { Fragment } from "react";
import Text from "./text/Text";
import classnames from "classnames";

const phrases = [
  "Movement - they can move and change their position.",
  "Reproduction – they can make more of the same kind of organism as themselves.",
  "Sensitivity – they can detect or sense stimuli and respond to them.",
  "Growth - they can permanently increase their size or dry mass by increasing the number or size of their cells.",
  "Respiration – they can create chemical reactions that break down nutrient molecules in living cells to release energy.",
  "Excretion – they can excrete toxic materials, waste products of metabolism, and excess substances (note that excretion is not the same as egestion).",
  "Nutrition - they can take in and absorb nutrients such as organic substances and mineral ions. These nutrients contain the raw materials or energy needed for growth and tissue repair."
];

const styles = ["zero", "one", "two", "three", "four", "five", "six"];

class Classification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: phrases[0],
      value: 0
    };
  }

  changeInput = e => {
    const newPhrase = phrases[e.target.value];
    this.setState({ phrase: newPhrase, value: e.target.value });
  };

  render() {
    const { phrase, value } = this.state;
    const classNames = classnames("phrase", styles[value]);
    return (
      <Fragment>
        <section id="visual" className="classification" className="lesson-container">
          <div id="header">
            <h1>Characteristics of living organisms </h1>
            <input
              type="range"
              defaultValue="0"
              min="0"
              max="6"
              onChange={this.changeInput}
            />
          </div>
          <div className={classNames}>{phrase}</div>
        </section>
        <Text props={this.props.description} />
      </Fragment>
    );
  }
}
export default Classification;
