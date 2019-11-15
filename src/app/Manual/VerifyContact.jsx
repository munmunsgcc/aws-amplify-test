import React from "react";
import { VerifyContact } from "aws-amplify-react";

export default class CustomVerifyContact extends VerifyContact {
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
