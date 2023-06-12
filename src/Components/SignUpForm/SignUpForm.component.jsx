import React, { Fragment, useState } from "react";
import './SignUpForm.styles.scss';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// components
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

const SignUpForm = () => {
  const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formField, setFormField] = useState(defaultFormField);
  console.log(formField);
  const { displayName, email, password, confirmPassword } = formField;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormField(defaultFormField);
    } catch (error) {
      if ((error.code = "auth/email-already-in-use")) {
        alert("can't create user, email already in use");
      } else console.log("some error ocurred", error);
    }
  };
  return (
    <Fragment>
        <div className="sign-up-container">
        <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
      </div>
    </Fragment>
  );
};

export default SignUpForm;
