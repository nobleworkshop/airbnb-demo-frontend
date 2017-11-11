import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.a`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  img {
    display: block;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

const ImageContainer = styled.div`overflow: hidden;`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 14px;
`;

const Title = styled.h3`
  font-family: "Circular Air", "Arial", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 17px;
  color: #383838;
`;

export default props => (
  <Card href={props.link}>
    <ImageContainer>
      <img src={props.img} alt="#" />
    </ImageContainer>
    <ContentContainer>
      <Title>{props.title}</Title>
    </ContentContainer>
  </Card>
);
