import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Paper from '../../components/Paper';
import Button from '../../components/Button';
import InputField from '../../components/InputField';

interface ISignUpProps {
  name: string;
  email: string;
  password: string;
  error?: string;
  isSubmitting: boolean;
  onNameChange: (evt: React.FormEvent<HTMLInputElement>) => void;
  onEmailChange: (evt: React.FormEvent<HTMLInputElement>) => void;
  onPasswordChange: (evt: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

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

const ErrorMessage = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  color: red;
  text-align: center;
  margin: 0;
  margin-bottom: 16px;
`;

const SignUp:React.SFC<ISignUpProps> = ({
  name,
  email,
  password,
  error,
  onNameChange,
  onEmailChange,
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
          value={email}
          placeholder='Email'
          onChange={onEmailChange}
          style={{ marginBottom: 8 }}
        />
        <InputField
          type='password'
          value={password}
          placeholder='Password'
          onChange={onPasswordChange}
          style={{ marginBottom: 32 }}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
