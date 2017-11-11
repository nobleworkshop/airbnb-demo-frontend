import React, { Component } from "react";
import styled from "styled-components";

import { Wrapper, Item, Link } from "./styled";

class NavigationTop extends React.Component {
  render() {
    return (
      <Wrapper>
        <Item>
          <Link href="#">Become a host</Link>
        </Item>
        <Item>
          <Link href="#">Help</Link>
        </Item>
        <Item>
          <Link href="#">Sign Up</Link>
        </Item>
        <Item>
          <Link href="#">Log In</Link>
        </Item>
      </Wrapper>
    );
  }
}

export default NavigationTop;
