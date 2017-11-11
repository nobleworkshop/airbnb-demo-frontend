import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

export const LogoLink = styled.a`
	display: block;
	position: relative;
	width: 30px;
	height: 32px;
	margin-top: 24px;
	margin-bottom: 24px;
`;

class Logo extends React.Component {
  render() {
    return (
      <LogoLink href="#">
        <img src={logo} alt="Airbnb" />
      </LogoLink>
    );
  }
};

export default Logo;