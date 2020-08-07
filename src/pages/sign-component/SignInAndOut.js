import React from "react";
import SignIn from "../../components/sign-in/sign-in-component";
import SignUp from "../../components/sign-up/sign-up";

import "./sign.styles.scss";

const SignInAndOut = () => {
  return (
    <div className="sign-in-andn-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndOut;
