import React, { Component } from "react";
import styled from "styled-components";
import starImg from "./stars.svg";

const Reviews = styled.p`margin: 0;`;
const Rating = styled.span`
  display: inline-block;
  width: 76px;
  height: 13px;
  margin-right: 8px;
`;
const Stats = styled.span`
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;

  color: #383838;
`;

function GetHostStatus(props) {
  const hostStatus = props.hostStatus;
  if (hostStatus) {
    return (
      <span>
        <Stats>{props.quantity}</Stats>
        <Stats>&nbsp;· {hostStatus}</Stats>
      </span>
    );
  } else return <Stats>{props.quantity}&nbsp;reviews</Stats>;
}

export default props => (
  <Reviews>
    <Rating>
      <img width="76" height="13" src={starImg} alt="5 stars" />
    </Rating>
    <GetHostStatus hostStatus={props.hostStatus} quantity={props.quantity} />
  </Reviews>
);
