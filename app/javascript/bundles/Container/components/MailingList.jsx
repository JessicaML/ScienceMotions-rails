import React from "react";

class MailingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      fNameValue: "",
      lNameValue: ""
    };
  }

  render() {
    return (
      <form
        action="https://github.us16.list-manage.com/subscribe/post"
        method="POST"
        noValidate
      >
        <input type="hidden" name="u" value="70d8e0ea2d8800a5f4e06792c" />
        <input type="hidden" name="id" value="b5095bc718" />
        <label htmlFor="MERGE0">
          Email
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
        <label htmlFor="MERGE1">
          First name
          <input
            type="text"
            name="FNAME"
            id="MERGE1"
            value={this.state.fNameValue}
            onChange={e => {
              this.setState({ fNameValue: e.target.value });
            }}
          />
        </label>
        <label htmlFor="MERGE2">
          Last name
          <input
            type="text"
            name="LNAME"
            id="MERGE2"
            value={this.state.lNameValue}
            onChange={e => {
              this.setState({ lNameValue: e.target.value });
            }}
          />
        </label>
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        />

        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
          aria-label="Please leave the following three fields empty"
        >
          <label htmlFor="b_name">Name: </label>
          <input
            type="text"
            name="b_name"
            tabIndex="-1"
            value=""
            placeholder="Freddie"
            id="b_name"
          />

          <label htmlFor="b_email">Email: </label>
          <input
            type="email"
            name="b_email"
            tabIndex="-1"
            value=""
            placeholder="youremail@gmail.com"
            id="b_email"
          />

          <label htmlFor="b_comment">Comment: </label>
          <textarea
            name="b_comment"
            tabIndex="-1"
            placeholder="Please comment"
            id="b_comment"
          />
        </div>
      </form>
    );
  }
}

export default MailingList;
