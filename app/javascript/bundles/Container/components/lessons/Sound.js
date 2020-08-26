import React, { Fragment } from "react";
import { ReactMic } from 'react-mic';
import SoundPng from "../../../../../assets/images/sound.png";
import SoundGif from "../../../../../assets/images/sound.gif";
import Text from "./text/Text";
import ButtonLinkToText from "./ButtonLinkToText";

class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgSrc: SoundPng, record: false };
    this.soundGif = this.soundGif.bind(this);
    this.soundPng = this.soundPng.bind(this);
  }

  soundGif() {
    this.setState({ imgSrc: SoundGif });
  }

  soundPng() {
    this.setState({ imgSrc: SoundPng });
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  toggleMic = () => !this.state.record ? this.startRecording() : this.stopRecording()

  render() {
    const { imgSrc, record } = this.state;

    return (
      <Fragment>
        <section id="visual" className="sound" className="lesson-container">
          <ButtonLinkToText />
          <div id="nav-one" className="nav">
            <audio id="beep-one">
              Your browser isn't invited for super fun time.
            </audio>
            <a id="sound" className="sound__waveImage" onClick={this.toggleMic}>
              {record ? <ReactMic
                record={this.state.record}
                className="sound-wave"
                onStop={this.onStop}
                onData={this.onData}
                strokeColor="#438298"
                backgroundColor="#fff"
                width={800}
                height={175}
              /> : <img
              style={{ height: "175px", width: "800px" }}
              src={imgSrc}
              onMouseOver={this.soundGif}
              onMouseOut={this.soundPng}
            />}
            </a>
          </div>
        </section>
        <Text props={this.props.description} />
      </Fragment>
    );
  }
}
export default Sound;
