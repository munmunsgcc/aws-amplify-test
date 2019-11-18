import React from "react";
import { ConfirmSignUp } from "aws-amplify-react";

export default class CustomConfirmSignUp extends ConfirmSignUp {
  constructor(props) {
    super(props);
    this.state = {
      mfaType: "SMS"
    };
  }

  showComponent() {
    const { hide } = this.props;
    const username = this.usernameFromAuthData();

    if (hide && hide.includes(CustomConfirmSignUp)) {
      return null;
    }

    return (
      <section>
        <h3>Confirm Sign Up</h3>
        <section>
          <div>
            <label>{this.getUsernameLabel()}</label>
            <input
              type="text"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              disabled={username}
              value={username ? username : ""}
            />
          </div>
        </section>
        <section>
          <div>
            <label>Confirmation Code</label>
            <input
              type="text"
              key="code"
              name="code"
              autoComplete="off"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Lost your code?</label>
            <div onClick={this.resend}>Resend code</div>
          </div>
        </section>
        <section>
          <button onClick={this.confirm}>Confirm</button>
          <div
            onClick={() => {
              this.changeState("signIn");
            }}
          >
            Back to Sign In
          </div>
        </section>
      </section>
    );
  }
}
