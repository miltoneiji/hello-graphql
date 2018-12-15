import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignIn from './SignIn';
import environment from '../../Environment';
import UserLoginWithEmailMutation from '../../mutations/UserLoginWithEmailMutation';

const SignInFormSchema = yup.object().shape({
  email: yup.string()
    .email('Email is not valid!')
    .required('Email is required!'),
  password: yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required('Password is required!'),
});

const SignInScreen: React.SFC<{}> = props => {
  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    const { email, password, error } = values;
    UserLoginWithEmailMutation.commit(
      environment,
      { email, password },
      ({ UserLoginWithEmailMutation }: any, jsError?: string) => {
        const { token, error } = UserLoginWithEmailMutation;
        setSubmitting(false);

        if (error) {
          setErrors({ serverError: error });
        } else {
          localStorage.jwt = token;
          props.history.push('/');
        }
      }
    );
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', error: '' }}
      onSubmit={handleSubmit}
      validationSchema={SignInFormSchema}
      render={SignIn}
    />
  );
};

export default SignInScreen;
