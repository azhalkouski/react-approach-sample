import React from "react";
import getDisplayName from "recompose/getDisplayName";
import withState from "recompose/withState";
import compose from "recompose/compose";

const withEmailState = withState("email", "setEmail", "");
const withPasswordState = withState("password", "setPassword", "");

export default function AuthFormStateContainer(WrappedComponent) {
  const Container = props => {
    const { email, password, setEmail, setPassword, ...restProps } = props;

    return (
      <WrappedComponent
        {...restProps}
        email={email}
        password={password}
        onEmailChange={e => setEmail(e.target.value)}
        onPasswordChange={e => setPassword(e.target.value)}
      />
    );
  };

  Container.displayName = `${AuthFormStateContainer.name}${getDisplayName(
    WrappedComponent
  )}`;

  return compose(
    withEmailState,
    withPasswordState
  )(Container);
}
