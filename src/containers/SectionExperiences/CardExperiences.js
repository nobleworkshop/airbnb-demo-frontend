import React, { Component } from "react";
import styled from "styled-components";
import Reviews from "../../components/Reviews";

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

const Price = styled.b`
  font-family: "Circular Air", "Arial", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 19px;
  font-size: 15px;

  color: #383838;
`;
const Title = styled.h3`
  display: inline;
  margin: 0;
  font-family: "Circular Air", "Arial", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 19px;
  font-size: 15px;

  color: #383838;
`;

export default props => (
  <Card>
    <ImageLink href={props.link}>
      <img src={props.img} alt="#" width="229" height="346" />
    </ImageLink>
    <Container>
      <Header>
        <Price>${props.price}&nbsp;</Price>
        <Title>{props.title}</Title>
      </Header>
      <Reviews quantity={props.reviewsQuantity} hostStatus={props.hostStatus} />
    </Container>
  </Card>
);
