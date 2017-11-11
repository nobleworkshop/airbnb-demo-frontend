import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import Card from "./CardExperiences.js";

const cardPics = [
  require("./img/card1.png"),
  require("./img/card2.png"),
  require("./img/card3.png"),
  require("./img/card4.png")
];

const Experiences = styled.section`padding-top: 45px;`;

export default props => (
  <Experiences>
    <div className="row between-xs baseline-xs">
      <div className="col-xs-9 col-md-10">
        <Title content="Experiences" />
      </div>
      <div className="col-xs-3 col-md-2">
      </div>
    </div>
    <div className="row">
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            img={cardPics[0]}
            link="#"
            title="Forest therapy"
            price={29}
            reviewsQuantity={44}
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            img={cardPics[1]}
            link="#"
            title="Whale watching"
            price={69}
            reviewsQuantity={46}
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            img={cardPics[2]}
            link="#"
            title="Table Mountain Summit, Cable Car Down"
            price={69}
            reviewsQuantity={44}
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            img={cardPics[3]}
            link="#"
            title="Salsa Night"
            price={50}
            reviewsQuantity={44}
          />
        </div>
    </div>
  </Experiences>
);
