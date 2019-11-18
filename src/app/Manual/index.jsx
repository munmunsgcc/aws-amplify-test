import React from "react";
import Amplify, { Analytics } from "aws-amplify";
import {
  withAuthenticator,
  Authenticator
  // ForgotPassword
} from "aws-amplify-react";

import awsconfig from "../../aws-exports";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import VerifyContact from "./VerifyContact";
import ConfirmSignIn from "./ConfirmSignIn";
import ConfirmSignUp from "./ConfirmSignUp";
import RequireNewPassword from "./RequireNewPassword";

Amplify.configure(awsconfig);
Analytics.configure({ disabled: true });

const Manual = () => (
  <div>
    Internal Apps
    <Authenticator hideDefault={true}>
      <SignIn />
      <SignUp />
      <ForgotPassword />
      <VerifyContact />
      <ConfirmSignIn />
      <ConfirmSignUp />
      <RequireNewPassword />
    </Authenticator>
  </div>
);

export default Manual;
