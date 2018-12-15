import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, FormikProps, FormikActions } from 'formik';
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

export interface ISignInFormInput {
  email: string;
  password: string;
  serverError?: string;
}

interface ISignInScreenProps extends RouteComponentProps<any> {}

const SignInScreen: React.SFC<ISignInScreenProps> = props => {
  const handleSubmit = (values: ISignInFormInput, formikBag: FormikActions<ISignInFormInput> ) => {
    const { email, password } = values;
    const { setSubmitting, setErrors } = formikBag;

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
