import React from "react";
import { RequireNewPassword } from "aws-amplify-react";

export default class CustomRequireNewPassword extends RequireNewPassword {
  constructor(props) {
    super(props);
    this.state = {
      verifyAttr: null
    };
  }

  showComponent() {
    const { hide } = this.props;

    if (hide && hide.includes(RequireNewPassword)) {
      return null;
    }

    const {
      challengeParam: { requiredAttributes = [] }
    } = this.props.authData;

    return (
      <section>
        <h3>Change Password</h3>
        <div>
          <div>
            <input
              key="password"
              name="password"
              type="password"
              onChange={this.handleInputChange}
              placeholder="New Password"
              autoFocus
            />
            {requiredAttributes.map(attribute => {
              return (
                <input
                  type="text"
                  name={attribute}
                  key={attribute}
                  onChange={this.handleInputChange}
                />
              );
            })}
          </div>
          <div>
            <button onClick={this.change}>Change</button>
            <div
              onClick={() => {
                this.changeState("signIn");
              }}
            >
              Back to Sign In
            </div>
          </div>
        </div>
      </section>
    );
  }
}
