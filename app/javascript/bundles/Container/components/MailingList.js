import React from "react";
import $ from "jquery";

{
  /* <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
<script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */
}

class MailingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      fNameValue: "",
      lNameValue: ""
    };
  }

  onSubmit() {
    preventDefault();

    $.ajax({
      type: $form.attr("method"),
      url: $form.attr("action"),
      data: $form.serialize(),
      cache: false,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      error: function(err) {
        $(".notification_container").html(
          '<span className="alert">Could not connect to server. Please try again later.</span>'
        );
      },
      success: function(data) {
        if (data.result != "success") {
          var message = data.msg.substring();
          $(".notification_container").html(
            '<span className="alert">' + message + "</span>"
          );
        } else {
          var message = data.msg;
          $(".notification_container").html(
            '<span className="success">' + message + "</span>"
          );
        }
      }
    });
  }

  render() {
    return (
      <footer className="footer">
        <form
          action="https://github.us16.list-manage.com/subscribe/post-json"
          method="POST"
          noValidate
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
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
              <input type="hidden" name="u" value="70d8e0ea2d8800a5f4e06792c" />
              <input type="hidden" name="id" value="b5095bc718" />
              <label htmlFor="MERGE0">
                <input
                  type="email"
                  name="EMAIL"
                  id="MERGE0"
                  value={this.state.emailValue}
                  onChange={e => {
                    this.setState({ emailValue: e.target.value });
                  }}
                  autoCapitalize="off"
                  autoCorrect="off"
                />
              </label>
              <input
                type="submit"
                onClick={this.onSubmit}
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
                aria-label="Please leave the following three fields empty"
              >
                <label htmlFor="b_email">Email: </label>
                <input
                  type="email"
                  name="b_email"
                  tabIndex="-1"
                  defaultValue=""
                  placeholder="youremail@gmail.com"
                  id="b_email"
                />
              </div>
              <div className="notification_container" />
            </div>
          </div>
        </form>
      </footer>
    );
  }
}

export default MailingList;
