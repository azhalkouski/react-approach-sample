import React from "react";
import PropTypes from "prop-types";
import getDisplayName from "recompose/getDisplayName";

export default function AuthFormContainer(WrappedComponent) {
  const Container = props => {
    const { email, password, validate, submit, ...restProps } = props;

    return (
      <WrappedComponent
        {...restProps}
        email={email}
        isValid={validate(email, password)}
        onSubmit={() => submit(email, password)}
        password={password}
      />
    );
  };

  Container.displayName = `${AuthFormContainer.name}${getDisplayName(
    WrappedComponent
  )}`;

  Container.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    validate: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
  };

  return Container;
}
