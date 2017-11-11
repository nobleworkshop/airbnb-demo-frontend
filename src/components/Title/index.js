import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-family: "Circular Air", "Arial", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-style: normal;
  line-height: 34px;
  font-size: 32px;

  color: #383838;
`;

export default props => <Title>{props.content}</Title>;
