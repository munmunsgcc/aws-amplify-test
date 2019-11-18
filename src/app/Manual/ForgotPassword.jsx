import React from "react";
import { ForgotPassword } from "aws-amplify-react";

const sendView = ({ username, handleInputChange }) => {
  return (
    <div>
      <div>Username *</div>
      <input
        defaultValue={username}
        placeholder="Enter your username"
        key="username"
        name="username"
        onChange={handleInputChange}
      />
    </div>
  );
};

const submitView = ({ handleInputChange }) => {
  return (
    <div>
      <div>
        <label>Code</label>
        <input
          key="code"
          name="code"
          autocomplete="off"
          onChange={handleInputChange}
          placeholder="Enter code here"
        ></input>
      </div>
      <div>
        <label>New Password</label>
        <input
          type="password"
          key="password"
          name="password"
          autocomplete="off"
          onChange={handleInputChange}
        ></input>
      </div>
    </div>
  );
};

export default class CustomForgotPassword extends ForgotPassword {
  constructor(props) {
    super(props);
    this.state = {
      delivery: null
    };
  }

  showComponent() {
    const { authData = {} } = this.props;
    const codeReceived = this.state.delivery || authData.username;

    // 1. Submit your username first.
    // 2. Click Send Code. Then the form should change to the one that asks for yout
    // code AND the new password.
    // 3. Click on Submit.
    return (
      <section>
        <h3>Reset your password here</h3>
        <div>
          <div>
            {codeReceived === true
              ? submitView({ handleInputChange: this.handleInputChange })
              : sendView({
                  username: authData.username,
                  handleInputChange: this.handleInputChange
                })}
            <div>
              {codeReceived === true ? (
                <button onClick={this.submit}>Submit</button>
              ) : (
                <button onClick={this.send}>Send Code</button>
              )}
            </div>
          </div>
        </div>
        <div>
          {codeReceived === true ? (
            <div onClick={this.send}>Resend Code</div>
          ) : (
            <div
              onClick={() => {
                this.changeState("signIn");
              }}
            >
              Back to Sign In
            </div>
          )}
        </div>
      </section>
    );
  }
}
