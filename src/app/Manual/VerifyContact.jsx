import React from "react";
import { VerifyContact } from "aws-amplify-react";

const verifyView = ({ authData, handleInputChange }) => {
  if (!authData) {
    console.log("No user to verify.");
    return null;
  }

  if (!authData.unverified) {
    console.log("No unverified information on user.");
    return null;
  }

  const {
    unverified: { email, phone_number }
  } = authData;

  return (
    <div>
      {email && (
        <div>
          <input
            type="radio"
            key="email"
            name="contact"
            value="email"
            onChange={handleInputChange}
          />
          <label>Email</label>
        </div>
      )}
      {phone_number && (
        <div>
          <input
            type="radio"
            key="phone_number"
            name="contact"
            value="phone_number"
          />
          <label>Phone Number</label>
        </div>
      )}
    </div>
  );
};

const submitView = handleInputChange => {
  return (
    <div>
      <input
        type="text"
        name="code"
        key="code"
        autoComplete="off"
        onChange={handleInputChange}
      />
      <label>Code</label>
    </div>
  );
};

export default class CustomVerifyContact extends VerifyContact {
  constructor(props) {
    super(props);
    this.state = {
      verifyAttr: null
    };
  }

  showComponent() {
    const { authData, hide } = this.props;

    if (hide && hide.includes(CustomVerifyContact)) {
      return null;
    }

    return (
      <section>
        <header>
          <h3>Account recovery requires verified contact information</h3>
          <div>
            {this.state.verifyAttr
              ? submitView(this.handleInputChange)
              : verifyView({
                  authData,
                  handleInputChange: this.handleInputChange
                })}
          </div>
        </header>
        <div>
          {this.state.verifyAttr ? (
            <button type="button" onClick={this.submit}>
              Submit
            </button>
          ) : (
            <button type="button" onClick={this.verify}>
              Verify
            </button>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              this.changeState("signedIn", authData);
            }}
          >
            Skip
          </div>
        </div>
      </section>
    );
  }
}
