import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik } from 'formik';

import SignIn from './SignIn';
import environment from '../../Environment';
import UserLoginWithEmailMutation from '../../mutations/UserLoginWithEmailMutation';

const handleSubmit = (evt: any) => {
  console.log(evt);
};

const SignInScreen: React.SFC<{}> = () => (
  <Formik
    initialValues={{ email: '', password: '', error: '' }}
    onSubmit={handleSubmit}
    render={SignIn}
  />
);

//class SignInScreen extends React.Component<ISignInScreenProps, ISignInScreenState> {
//
//  constructor(props: ISignInScreenProps) {
//    super(props);
//
//    this.handleSubmit = this.handleSubmit.bind(this);
//    this.handlePasswordChange = this.handlePasswordChange.bind(this);
//    this.handleEmailChange = this.handleEmailChange.bind(this);
//
//    this.state = {
//      email: '',
//      password: '',
//      error: '',
//      isSubmitting: false,
//    };
//  }
//
//  handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
//    evt.preventDefault();
//    this.setState({ isSubmitting: true });
//    UserLoginWithEmailMutation.commit(
//      environment,
//      {
//        email: this.state.email,
//        password: this.state.password,
//      },
//      ({ UserLoginWithEmailMutation }: any, jsError?: string) => {
//        this.setState({ isSubmitting: false });
//        const { token, error } = UserLoginWithEmailMutation;
//
//        if (error) {
//          this.setState({ error });
//          return;
//        }
//
//        localStorage.jwt = token;
//        this.props.history.push('/');
//      },
//    );
//  }
//
//  handleEmailChange(evt: React.ChangeEvent<HTMLInputElement>) {
//    this.setState({ email: evt.target.value });
//  }
//
//  handlePasswordChange(evt : React.ChangeEvent<HTMLInputElement>) {
//    this.setState({ password: evt.target.value });
//  }
//
//  render() {
//    const { email, password, isSubmitting, error } = this.state;
//
//    return(
//      <SignIn
//        email={email}
//        error={error}
//        password={password}
//        onEmailChange={this.handleEmailChange}
//        onPasswordChange={this.handlePasswordChange}
//        isSubmitting={isSubmitting}
//        onSubmit={this.handleSubmit}
//      />
//    );
//  }
//}

export default SignInScreen;
