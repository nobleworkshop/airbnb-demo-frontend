import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import Card from "./CardHomes";

const cardPics = [
  require("./img/card-1.png"),
  require("./img/card-2.png"),
  require("./img/card-3.png")
];

const Homes = styled.section`padding-top: 45px;`;

export default props => (
  <Homes>
    <div className="row between-xs baseline-xs">
      <div className="col-xs-9 col-md-10">
        <Title content="Homes" />
      </div>
      <div className="col-xs-3 col-md-2" />
    </div>
    <div className="row">
      <div className="col-xs-8 col-md-5 col-lg-4">
        <Card
          img={cardPics[0]}
          link="#"
          title="La Salentina, see, nature & relax"
          price={82}
          reviewsQuantity={97}
          desc="Entire house  ·  9 beds"
          hostStatus="Superhost"
        />
      </div>
      <div className="col-xs-8 col-md-5 col-lg-4">
        <Card
          img={cardPics[1]}
          link="#"
          title="Your private 3 bedr. riad and exclusive bathroom"
          price={82}
          reviewsQuantity={161}
          desc="Entire house  ·  5 beds"
          hostStatus="Superhost"
        />
      </div>
      <div className="col-xs-8 col-md-5 col-lg-4">
        <Card
          img={cardPics[2]}
          link="#"
          title="Dreamy Tropical Tree House"
          price={200}
          reviewsQuantity={364}
          desc="Entire house  ·  1 bed"
          hostStatus="Superhost"
        />
      </div>
    </div>
  </Homes>
);
