import React from "react";
import ReactDOM from "react-dom";
import compose from "recompose/compose";

import AuthFormStateContainer from "./AuthFormStateContainer.jsx";
import AuthFormContainer from "./AuthFormContainer.jsx";
import SignUpFormView from "./SignUpFormView.jsx";

import submit from "./submit";
import validate from "./validate";

const SignUpForm = compose(
  AuthFormStateContainer,
  AuthFormContainer
)(SignUpFormView);

ReactDOM.render(
  <SignUpForm title="Sign Up" submit={submit} validate={validate} />,
  document.getElementById("root")
);
