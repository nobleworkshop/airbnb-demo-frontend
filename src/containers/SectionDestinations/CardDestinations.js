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
  font-size: 15px;
  font-weight: bold;
  line-height: 19px;
  font-style: normal;
  color: #383838;
  margin: 0;
`;

export default props => (
  <Card>
    <ImageLink href={props.link}>
      <img src={props.img} alt="#" width="147" height="220" />
    </ImageLink>
    <Container>
      <Header>
        <Title>{props.title}</Title>
      </Header>
    </Container>
  </Card>
);
