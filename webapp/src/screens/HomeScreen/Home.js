import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';

const Home = ({ user }) => (
  <div>
    { user ? `Hello ${user.name}` : 'Unknown user' }
  </div>
);

export default createFragmentContainer(
  Home,
  graphql`
    fragment Home_user on User {
      name
    }
  `
);
