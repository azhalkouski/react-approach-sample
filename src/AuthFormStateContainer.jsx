import React, { useState } from "react";
import getDisplayName from "recompose/getDisplayName";

export default function AuthFormStateContainer(WrappedComponent) {
  const Container = props => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
      <WrappedComponent
        {...props}
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

  return Container;
}
