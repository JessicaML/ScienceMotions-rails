import React, { Fragment } from "react";
import SoundPng from "images/sound.png";
import SoundGif from "images/sound.gif";
import SoundText from "./text/SoundText";
// import soundMp3 from "wouldnt_say.mp3";
// import soundOgg from "wouldnt_say.ogg";

class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgSrc: SoundPng };
    this.soundGif = this.soundGif.bind(this);
    this.soundPng = this.soundPng.bind(this);
  }

  soundGif() {
    this.setState({ imgSrc: SoundGif });
  }

  soundPng() {
    this.setState({ imgSrc: SoundPng });
  }

  render() {
    const { imgSrc } = this.state;
    return (
      <Fragment>
        <section id="visual">
          <div id="nav-one" className="nav">
            <audio id="beep-one">
              {/* <source src={soundMp3} controls />
              <source src={soundOgg} controls /> */}
              Your browser isn't invited for super fun time.
            </audio>
            <a href="#" id="sound">
              <img
                style={{ height: "175px", width: "800px" }}
                src={imgSrc}
                onMouseOver={this.soundGif}
                onMouseOut={this.soundPng}
              />
            </a>
          </div>
        </section>
        <SoundText />
      </Fragment>
    );
  }
}
export default Sound;
