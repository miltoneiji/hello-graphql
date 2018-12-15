import React from "react";
import styled from "styled-components";
import { createFragmentContainer, graphql } from "react-relay";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

interface IHomeProps {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
}

const Logged: React.SFC<IHomeProps> = ({ user, onLogout }) => (
  <div>
    <h1>You are logged!</h1>
    <div>
      <p>
        <strong>Name</strong>: {user.name}
      </p>
      <p>
        <strong>Email</strong>: {user.email}
      </p>
    </div>
    <Button styleType="link" onClick={onLogout}>
      Log out
    </Button>
  </div>
);

const NonLogged = () => (
  <div>
    <h1>Sorry, you must log in or create a new account</h1>
    <Link to="/login">
      <Button style={{ marginBottom: 8 }}>Log in</Button>
    </Link>
    <Link to="/register">
      <Button>Create account</Button>
    </Link>
  </div>
);

const Home: React.SFC<IHomeProps> = ({ user, onLogout }) => {
  if (user) return <Logged user={user} onLogout={onLogout} />;

  return <NonLogged />;
};

export default createFragmentContainer(
  Home,
  graphql`
    fragment Home_user on User {
      name
      email
    }
  `
);
