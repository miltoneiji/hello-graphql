import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Field, ErrorMessage } from "formik";

import Paper from "../../components/Paper";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

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

//const ErrorMessage = styled.p`
//  font-family: sans-serif;
//  font-size: 16px;
//  color: red;
//  text-align: center;
//  margin: 0;
//  margin-bottom: 16px;
//`;

const SignIn = ({
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isSubmitting
}) => (
  <Wrapper>
    <Paper>
      <Title>Log In</Title>
      <Form>
        <Field
          type="email"
          name="email"
          render={({field}) => (
            <InputField {...field} style={{ marginBottom: 8 }} placeholder={"Email"} />
          )}
        />
        <Field
          type="password"
          name="password"
          render={({field}) => (
            <InputField {...field} style={{ marginBottom: 32 }} placeholder={"Password"} />
          )}
        />
        <ErrorMessage name="password" component="div" />
        <Button type="submit" disabled={isSubmitting} style={{ marginBottom: 8 }}>
          Create account
        </Button>
      </Form>
      <Link to="/register">
        <Button disabled={isSubmitting} styleType="link">
          Create account
        </Button>
      </Link>
    </Paper>
  </Wrapper>
);

export default SignIn;
