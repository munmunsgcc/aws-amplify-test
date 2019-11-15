import React from "react";
import { Authenticator } from "aws-amplify-react";
import { Auth, Analytics } from "aws-amplify";

import awsconfig from "../aws-exports";

Auth.configure(awsconfig);
Analytics.configure({ disabled: true });

// Modify the theme based on these values
// https://github.com/aws-amplify/amplify-js/blob/master/packages/aws-amplify-react/src/Amplify-UI/Amplify-UI-Theme-Sample.jsx

const App = () => {
  const theme = {
    button: {
      backgroundColor: "red",
      fontSize: "20px",
      fontFamily: "Helvetica"
    }
  };

  return <Authenticator authState="signIn" theme={theme} />;
};

export default App;
