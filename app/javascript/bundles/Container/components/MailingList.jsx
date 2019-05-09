import React from "react";
import Mailchimp from "react-mailchimp-form";

const MailingList = () => (
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
  />
  // <div id="footer" className="container">
  //   <div className="row">
  //     <div className="col-md-12 portfolio-item">
  //       <div id="mc_embed_signup">
  //         <form
  //           action="//jhn.us16.list-manage.com/subscribe/post-json?u=70d8e0ea2d8800a5f4e06792c&amp;id=b5095bc718&c=?"
  //           method="post"
  //           id="mc-embedded-subscribe-form"
  //           name="mc-embedded-subscribe-form"
  //           className="validate"
  //           target="_blank"
  //           noValidate
  //         >
  //           <div id="mc_embed_signup_scroll">
  //             <div>
  //               <span>
  //                 {" "}
  //                 <i>
  //                   <p>
  //                     Science is about how shapes move in space, so we think
  //                     animation is the best way to explain it... and we want to
  //                     explain it in a way that's as fun to look at as MTV.
  //                   </p>
  //                 </i>
  //               </span>
  //             </div>
  //             <label className="subscription" htmlFor="mce-EMAIL">
  //               Subscribe to our mailing list!
  //             </label>
  //             <input
  //               type="email"
  //               value=""
  //               name="EMAIL"
  //               className="email form-control"
  //               id="mce-EMAIL"
  //               placeholder="email address"
  //               required
  //             />

  //             <div className="clear">
  //               <input
  //                 type="submit"
  //                 value="Subscribe"
  //                 name="subscribe"
  //                 id="mc-embedded-subscribe"
  //                 className="btn"
  //               />
  //             </div>
  //           </div>
  //           <div id="notification_container" />
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  //   <script src="js/jquery.js" />
  // </div>
);
export default MailingList;
