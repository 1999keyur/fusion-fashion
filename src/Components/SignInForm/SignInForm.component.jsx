// library import methods
import React, { Fragment, useState } from "react";
// styles
import "./SignInForm.styles.scss";
// firebase components
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
// Context Componenet
// Components
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

const SignInForm = () => {
  const defaultFormField = {
    email: "",
    password: "",
  };
  const [formField, setFormField] = useState(defaultFormField);
  console.log(formField);
  const { email, password } = formField;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // await ;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormField(defaultFormField);
    } catch (error) {
      // console.log("some error ocurred", error);
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("No User Found");
          break;
        default:
          console.log("error occured", error);
      }
    }
  };
  return (
    <Fragment>
      <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign In with email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            required
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <FormInput
            label="Password"
            required
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <div className="sign-in-button-container">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              buttonType="google"
              onClick={signInWithGoogle}
            >
              Google Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignInForm;
