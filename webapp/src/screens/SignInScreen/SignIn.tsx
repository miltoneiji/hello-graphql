import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Field, ErrorMessage, FormikProps, FieldProps } from "formik";

import Paper from "../../components/Paper";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

import { ISignInFormInput } from './SignInScreen';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  margin: 0;
  margin-bottom: 32px;
`;

const ErrorMessageWithStyle = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  color: red;
  text-align: center;
  margin: 0;
  margin-bottom: 16px;
`;

const SignIn = (props: FormikProps<ISignInFormInput>) => {
  const {
    isSubmitting,
    errors,
  } = props;

  return (
    <Wrapper>
      <Paper>
        <Title>Log In</Title>
        <Form>
          <div style={{ marginBottom: 8 }}>
            <Field
              name="email"
              render={({ field }: FieldProps) => (
                <InputField {...field} placeholder={"Email"} />
              )}
            />
            <ErrorMessage
              name="email"
              render={error => <ErrorMessageWithStyle>{error}</ErrorMessageWithStyle>}
            />
          </div>
          <div style={{ marginBottom: 32 }}>
            <Field
              name="password"
              render={({ field }: FieldProps) => (
                <InputField {...field} placeholder={"Password"} type="password" />
              )}
            />
            <ErrorMessage
              name="password"
              render={error => <ErrorMessageWithStyle>{error}</ErrorMessageWithStyle>}
            />
          </div>
          <Button type="submit" disabled={isSubmitting} style={{ marginBottom: 8 }}>
            Login
          </Button>
        </Form>
        { errors.serverError && (<ErrorMessageWithStyle>{errors.serverError}</ErrorMessageWithStyle>)}
        <Link to="/register">
          <Button disabled={isSubmitting} styleType="link">
            Create account
          </Button>
        </Link>
      </Paper>
    </Wrapper>
  )
};

export default SignIn;
