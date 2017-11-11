import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import Card from "./CardDestinations";

const cardPics = [
  require("./img/card1.png"),
  require("./img/card2.png"),
  require("./img/card3.png"),
  require("./img/card4.png"),
  require("./img/card5.png"),
  require("./img/card6.png")
];

const Destinations = styled.section`padding-top: 45px;`;

export default props => (
  <Destinations>
    <div className="row between-xs baseline-xs">
      <div className="col-xs-10 col-md-10">
        <Title content="Featured Destinations" />
      </div>
      <div className="col-xs-3 col-md-2" />
    </div>
    <div className="row">
      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card img={cardPics[0]} link="#" title="Paris" />
      </div>
      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card img={cardPics[1]} link="#" title="Miami" />
      </div>
      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card img={cardPics[2]} link="#" title="Tokyo" />
      </div>
      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card img={cardPics[3]} link="#" title="Cape town" />
      </div>
      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card img={cardPics[4]} link="#" title="Seoul" />
      </div>
      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card img={cardPics[5]} link="#" title="Los Angeles" />
      </div>
    </div>
  </Destinations>
);
