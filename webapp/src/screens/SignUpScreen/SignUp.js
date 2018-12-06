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

const SignUp = ({
  name,
  username,
  password,
  onNameChange,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
  isSubmitting
}) => (
  <Wrapper>
    <Paper>
      <Title>Register</Title>
      <form onSubmit={onSubmit}>
        <InputField
          type='text'
          value={name}
          placeholder='Name'
          onChange={onNameChange}
          style={{ marginBottom: 24 }}
        />
        <InputField
          type='text'
          value={username}
          placeholder='Username'
          onChange={onUsernameChange}
          style={{ marginBottom: 8 }}
        />
        <InputField
          type='password'
          value={password}
          placeholder='Password'
          onChange={onPasswordChange}
          style={{ marginBottom: 32 }}
        />
        <Button type="submit" disabled={isSubmitting} style={{ marginBottom: 8 }}>
          Create account
        </Button>
        <Link to="/login">
          <Button disabled={isSubmitting} styleType='link'>
            Login
          </Button>
        </Link>
      </form>
    </Paper>
  </Wrapper>
);

export default SignUp;