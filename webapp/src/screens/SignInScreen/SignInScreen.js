import React from 'react';

import SignIn from './SignIn';

class SignInScreen extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);

    this.state = {
      username: '',
      password: '',
      isSubmitting: false,
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state);
  }

  handleUsernameChange(evt) {
    this.setState({ username: evt.target.value });
  }

  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }

  render() {
    const { username, password, isSubmitting } = this.state;

    return(
      <SignIn
        username={username}
        password={password}
        onUsernameChange={this.handleUsernameChange}
        onPasswordChange={this.handlePasswordChange}
        isSubmitting={isSubmitting}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignInScreen;
