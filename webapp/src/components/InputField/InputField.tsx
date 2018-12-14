import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 250px;
  border-radius: 50px;
  border-style: solid;
  border-color: #959595;
  padding: 10px 16px;
  background-color: #ffffff;

  font-family: sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1;

  ::placeholder {
    color: #ccc;
  }
`;

export default InputField;
