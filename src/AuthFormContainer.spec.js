import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

import AuthFormContainer from "./AuthFormContainer";
import SignUpFormView from "./SignUpFormView";

const SignUpForm = AuthFormContainer(SignUpFormView);

Enzyme.configure({ adapter: new Adapter() });

describe("AuthFormContainer", () => {
  const defaultProps = {
    email: "",
    password: "",
    onEmailChange: () => {},
    onPasswordChange: () => {},
    submit: () => Promise.resolve(false),
    validate: () => false
  };

  let wrapper;
  let props;

  beforeEach(() => {
    wrapper = mount(<SignUpForm {...defaultProps} {...props} />);
  });

  describe("when rendered initialy", () => {
    it(`"email" field should be empty`, () => {
      expect(wrapper.find("#email").props().value).toBe("");
    });

    it(`"password" field should be empty`, () => {
      expect(wrapper.find("#password").props().value).toBe("");
    });
  });

  describe(`when form is invalid`, () => {
    beforeAll(() => {
      props = {
        ...defaultProps,
        validate: () => false
      };
    });

    it(`the button should be disabled`, () => {
      expect(wrapper.find("button").props().disabled).toBe(true);
    });

    describe("when button is clicked", () => {
      beforeAll(() => {
        props = {
          ...props,
          submit: jest.fn()
        };
      });

      beforeEach(() => {
        wrapper.find("button").simulate("click");
      });

      it(`button click shouldn't invoke submit handler function`, () => {
        expect(props.submit).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe(`when form is valid`, () => {
    beforeAll(() => {
      props = {
        ...defaultProps,
        validate: () => true
      };
    });

    it("the button should be enabled", () => {
      expect(wrapper.find("button").props().disabled).toBe(false);
    });

    describe("when button is clicked", () => {
      beforeAll(() => {
        props = {
          ...props,
          submit: jest.fn()
        };
      });

      beforeEach(() => {
        wrapper.find("button").simulate("click");
      });

      it("button click should invoke submit handler function", () => {
        expect(props.submit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
