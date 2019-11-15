import React from "react";
import { ConfirmSignIn } from "aws-amplify-react";

export default class CustomConfirmSignIn extends ConfirmSignIn {
  constructor(props) {
    super(props);
    this.state = {
      delivery: null
    };
  }

  showComponent() {
    return <div />;
  }
}
