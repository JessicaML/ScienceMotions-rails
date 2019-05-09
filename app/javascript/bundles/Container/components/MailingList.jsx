import React from "react";
import Mailchimp from "react-mailchimp-form";

{
  /* <form
            action="//jhn.us16.list-manage.com/subscribe/post-json?u=70d8e0ea2d8800a5f4e06792c&amp;id=b5095bc718&c=?"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          > */
}
const MailingList = () => (
  <div className="footer" className="container">
    <div className="row">
      <div className="col-md-12 portfolio-item">
        <div id="mc_embed_signup">
          <div id="mc_embed_signup_scroll">
            <div>
              <span>
                {" "}
                <i>
                  <p>
                    Science is about how shapes move in space, so we think
                    animation is the best way to explain it... and we want to
                    explain it in a way that's as fun to look at as MTV.
                  </p>
                </i>
              </span>
            </div>
            <label className="subscription" htmlFor="mce-EMAIL">
              Subscribe to our mailing list!
            </label>
            <Mailchimp
              action="//jhn.us16.list-manage.com/subscribe/post-json?u=70d8e0ea2d8800a5f4e06792c&amp;id=b5095bc718&c=?"
              fields={[
                {
                  name: "EMAIL",
                  placeholder: "Email",
                  type: "email",
                  required: true
                }
              ]}
              messages={{
                sending: "Sending...",
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "You must write an e-mail.",
                duplicate: "Too many subscribe attempts for this email address",
                button: "Subscribe!"
              }}
            />
            <div id="notification_container" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default MailingList;
