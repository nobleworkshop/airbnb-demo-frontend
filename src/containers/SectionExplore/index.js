import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import Card from "./CardExplore.js";

const cardPics = [
  require("./img/card-1.png"),
  require("./img/card-2.png"),
  require("./img/card-3.png")
];

const Explore = styled.section`padding-top: 36px;`;

export default props => (
  <Explore>
    <div className="row between-lg">
      <div className="col-xs-9 col-md-10">
        <Title content="Explore Airbnb" />
      </div>
    </div>
    <div className="row">
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card
            img={cardPics[0]} link="#" title="Homes"
          />
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card img={cardPics[1]} link="#" title="Experiences" />
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card img={cardPics[2]} link="#"  title="Restaurants" />
        </div>
    </div>
  </Explore>
);
