import React from "react";
import './CustomButton.styles.scss';

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_CLASS_TYPE = {
    google: 'google-sign-in',
    inverted: 'inverted',
  };

  return (
    <button
      className={`button-container ${BUTTON_CLASS_TYPE[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

