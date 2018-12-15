import React from "react";
import PropTypes from "prop-types";

export default function SignUpFormView(props) {
  const {
    email,
    isValid,
    onEmailChange,
    onPasswordChange,
    onSubmit,
    password,
    title
  } = props;

  return (
    <div className="form-container">
      <h1 className="form-container__title">{title}</h1>
      <div className="form-container__inputs">
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onChange={onEmailChange} />
        </div>
        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input id="password" value={password} onChange={onPasswordChange} />
        </div>
      </div>
      <div className="form-container__buttons">
        <button type="button" onClick={onSubmit} disabled={!isValid}>
          Next
        </button>
      </div>
    </div>
  );
}

SignUpFormView.propTypes = {
  email: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  password: PropTypes.string.isRequired,
  title: PropTypes.string
};

SignUpFormView.defaultProps = {
  isValid: true,
  onSubmit: null,
  title: ""
};
