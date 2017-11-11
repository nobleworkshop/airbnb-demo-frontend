import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Wrapper,
  Input
} from "./styled";

class SearchInput extends React.Component {
  render() {
    return (
      <Wrapper>
      	<Input placeholder='Try “Miami”'/>
      </Wrapper>
    );
  }
};

export default SearchInput;