import React from "react";
import { SignIn } from "aws-amplify-react";

export default class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
  }

  showComponent() {
    return (
      <div>
        <form onSubmit={this.signIn}>
          <div>
            <label>Username</label>
            <input
              id="username"
              key="username"
              name="username"
              type="text"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              id="password"
              key="password"
              name="password"
              type="password"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            Forgot your password?
            <div
              onClick={() => {
                this.changeState("forgotPassword");
              }}
            >
              Reset Password
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.changeState("signUp");
              }}
            >
              Sign Up
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
