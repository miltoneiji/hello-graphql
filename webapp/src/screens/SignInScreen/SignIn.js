import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Paper from '../../components/Paper';
import Button from '../../components/Button';
import InputField from '../../components/InputField';

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

const SignIn = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isSubmitting
}) => (
  <Wrapper>
    <Paper>
      <Title>Log In</Title>
      <form onSubmit={onSubmit}>
        <InputField
          type='text'
          placeholder='Email'
          value={email}
          onChange={onEmailChange}
          style={{ marginBottom: 8 }}
        />
        <InputField
          type='password'
          placeholder='Password'
          value={password}
          onChange={onPasswordChange}
          style={{ marginBottom: 32 }}
        />
        <Button type="submit" disabled={isSubmitting} style={{ marginBottom: 8 }}>
          Login
        </Button>
        <Link to="/register">
          <Button disabled={isSubmitting} styleType='link'>
            Create account
          </Button>
        </Link>
      </form>
    </Paper>
  </Wrapper>
);

export default SignIn;
