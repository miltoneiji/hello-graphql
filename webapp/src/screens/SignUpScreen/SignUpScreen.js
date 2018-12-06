import React from 'react';

import SignUp from './SignUp';

class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);

    this.state = {
      name: '',
      username: '',
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

  handleUsernameChange(evt) {
    this.setState({ username: evt.target.value });
  }

  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }

  render() {
    const { name, username, password, isSubmitting } = this.state;

    return(
      <SignUp
        name={name}
        username={username}
        password={password}
        onNameChange={this.handleNameChange}
        onUsernameChange={this.handleUsernameChange}
        onPasswordChange={this.handlePasswordChange}
        isSubmitting={isSubmitting}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignUpScreen;
