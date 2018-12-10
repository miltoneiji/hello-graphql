import React from 'react';
import styled from 'styled-components';

const colors = {
  primary: '#007bff',
  success: '#28a745',
  danger: '#dc3545',
  link: 'transparent',
};

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 250px;
  border-radius: 50px;
  padding: 10px 16px;
  background-color: ${props => colors[props.styleType || 'primary']};
  color: ${props => props.styleType && props.styleType === 'link' ? '#007bff' : 'white'}
  cursor: pointer;


  // move to a theme
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1;

  text-decoration: none !important;

  &:disabled {
    opacity: 0.65;
    cursor: default;
  }
`;

export default Button;
