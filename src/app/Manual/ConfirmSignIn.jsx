import React from "react";
import { ConfirmSignIn } from "aws-amplify-react";

export default class CustomConfirmSignIn extends ConfirmSignIn {
  constructor(props) {
    super(props);
    this.state = {
      mfaType: "SMS"
    };
  }

  showComponent() {
    const { hide } = this.props;

    if (hide && hide.includes(CustomConfirmSignIn)) {
      return null;
    }

    return (
      <section>
        <h3>{`Confirm ${this.state.mfaType} Code`}</h3>
        <div>
          <form onSubmit={this.confirm}>
            <div>
              <label>Code</label>
              <input
                type="text"
                autoFocus
                key="code"
                name="code"
                autoComplete="off"
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <div>
                <button type="submit">Confirm</button>
              </div>
              <div>
                <div
                  onClick={() => {
                    this.changeState("signIn");
                  }}
                >
                  Back to Sign In
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
