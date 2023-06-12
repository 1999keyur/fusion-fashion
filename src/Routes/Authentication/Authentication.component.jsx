import React, { Fragment } from "react";
import './Authentication.styles.scss'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../Components/SignUpForm/SignUpForm.component";
import SignInForm from "../../Components/SignInForm/SignInForm.component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <Fragment>
      {/* <CustomButton buttonType='google' onClick={logGoogleUser}>Sign In with Google</CustomButton>         */}
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </Fragment>
  );
};

export default Authentication;
