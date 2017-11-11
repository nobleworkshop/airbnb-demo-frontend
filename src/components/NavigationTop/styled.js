import React, { Component } from "react";
import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  margin-top: 27px;
  margin-bottom: 24px;
`;

export const Item = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Circular Std Book", "Arial", sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 24px;
  font-size: 14px;
  text-align: center;
  color: #383838;
  text-decoration: none;
  list-style-type: none;

  :hover {
    color: #ff5a5f;
    text-decoration: underline;
  }
`;

export const Link = styled.a`
  color: #383838;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
