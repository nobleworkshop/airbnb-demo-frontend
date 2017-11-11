import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ImageLink = styled.a`
  display: block;
  margin-bottom: 5px;
`;

const Container = styled.div``;

const Header = styled.div`margin-bottom: 3px;`;

const Title = styled.h3`
  display: block;
  font-family: "Circular Air", "Arial", sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 23px;
  font-style: normal;
  margin: 0;
  color: #383838;
`;

const Subtitle = styled.span`
  display: block;
  margin-bottom: 3px;
  font-family: "Circular Air", "Arial", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 13px;
  font-size: 10px;
  text-transform: uppercase;
  color: #383838;
`;

const Desc = styled.p`
  margin: 0;
  margin-bottom: 3px;
  font-family: "Circular Air", "Arial", sans-serif;
  font-style: normal;
  font-weight: light;
  line-height: 23px;
  font-size: 18px;
  color: #383838;
  opacity: 0.9;
`;

export default props => (
  <Card>
    <ImageLink href={props.link}>
      <img src={props.img} alt="#" width="229" height="164" />
    </ImageLink>
    <Container>
      <Header>
        <Subtitle>{props.subtitle}</Subtitle>
        <Title>{props.title}</Title>
      </Header>
      <Desc>About ${props.price} per person</Desc>
    </Container>
  </Card>
);
