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

Amplify.configure(awsconfig);
Analytics.configure({ disabled: true });

// 1. signIn
// 2. signUp
// 3. Confirm code
// 4. Change password
// 5. Forgot password
// 6. New password
// 7. verify email add
// 8. get current user
// 9. get current session

const Manual = () => (
  <div>
    Internal Apps
    <Authenticator hideDefault={true}>
      <SignIn />
      <SignUp />
      <ForgotPassword />
    </Authenticator>
  </div>
);

export default Manual;
