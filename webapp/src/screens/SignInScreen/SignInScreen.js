import React from 'react';

import SignIn from './SignIn';

class SignInScreen extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state = {
      email: '',
      password: '',
      isSubmitting: false,
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state);
  }

  handleEmailChange(evt) {
    this.setState({ email: evt.target.value });
  }

  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }

  render() {
    const { email, password, isSubmitting } = this.state;

    return(
      <SignIn
        email={email}
        password={password}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        isSubmitting={isSubmitting}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignInScreen;
