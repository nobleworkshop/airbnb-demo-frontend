import React, { Component } from "react";
import styled from "styled-components";
import iconSearch from "./icon-search.svg";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  ::before {
    position: absolute;
    top: 13px;
    left: 16px;
    content: "";
    width: 21px;
    height: 22px;
    background-image: url(${iconSearch});
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  width: 100%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding: 12px 24px 12px 53px;

  font-family: "Circular Air Book", "Arial", sans-serif;
  line-height: 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;

  ::placeholder {
    color: #383838;
    opacity: 0.64;
  }

  :hover,
  :active,
  :focus {
    border: 1px solid #ff5a5f;
    outline: none;
  }
`;
