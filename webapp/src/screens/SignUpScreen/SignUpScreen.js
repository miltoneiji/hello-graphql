import React from 'react';

import SignUp from './SignUp';

class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      isSubmitting: false,
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state);
  }

  handleNameChange(evt) {
    this.setState({ name: evt.target.value });
  }

  handleEmailChange(evt) {
    this.setState({ email: evt.target.value });
  }

  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }

  render() {
    const { name, email, password, isSubmitting } = this.state;

    return(
      <SignUp
        name={name}
        email={email}
        password={password}
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
