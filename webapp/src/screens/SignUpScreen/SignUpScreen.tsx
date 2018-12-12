import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import SignUp from './SignUp';
import environment from '../../Environment';
import UserRegisterWithEmailMutation from '../../mutations/UserRegisterWithEmailMutation';

interface ISignUpScreenProps extends RouteComponentProps<any>{}
interface ISignUpScreenState {
  name: string;
  email: string;
  password: string;
  error: string;
  isSubmitting: boolean;
}

class SignUpScreen extends React.Component<ISignUpScreenProps, ISignUpScreenState> {

  constructor(props: ISignUpScreenProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      isSubmitting: false,
    };
  }

  handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    this.setState({ isSubmitting: true });
    UserRegisterWithEmailMutation.commit(
      environment,
      {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      },
      (
        { UserRegisterWithEmailMutation }: any, // TODO: fix it
        jsError?: string
      ) => {
        this.setState({ isSubmitting: false });
        const { token, error } = UserRegisterWithEmailMutation;

        if (error) {
          this.setState({ error });
          return;
        }

        // For simplicity
        localStorage.jwt = token;
        this.props.history.push('/');
      },
    );
  }

  handleNameChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: evt.target.value });
  }

  handleEmailChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ email: evt.target.value });
  }

  handlePasswordChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: evt.target.value });
  }

  render() {
    const { name, email, password, error, isSubmitting } = this.state;

    return(
      <SignUp
        name={name}
        email={email}
        password={password}
        error={error}
        onNameChange={this.handleNameChange}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        isSubmitting={isSubmitting}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignUpScreen;
