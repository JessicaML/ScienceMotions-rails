import React from "react";
import $ from "jquery";

class MailingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
    };
  }

  render() {
    return (
      <footer className="footer">
        <form
          action="https://github.us16.list-manage.com/subscribe/post?u=70d8e0ea2d8800a5f4e06792c&amp;id=b5095bc718"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div>
              <span style={{ color: "#fff" }}>
                <i>
                  <p>
                    Science is about how shapes move in space, so we think
                    animation is the best way to explain it... and we want to
                    explain it in a way that's as fun to look at as MTV.
                  </p>
                </i>
              </span>
            </div>
          </div>
          <div className="mailchimp">
            <label htmlFor="mce-EMAIL">Subscribe to our mailing list!</label>
            <div>
              <label htmlFor="MERGE0">
                <input
                  type="email"
                  name="EMAIL"
                  id="MERGE0"
                  value={this.state.emailValue}
                  onChange={(e) => {
                    this.setState({ emailValue: e.target.value });
                  }}
                  autoCapitalize="off"
                  autoCorrect="off"
                />
              </label>
              <input type="submit" name="subscribe" className="button" />
            </div>
          </div>
        </form>
      </footer>
    );
  }
}

export default MailingList;
