import React, { Component } from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import Card from "./CardReservations";

const cardPics = [
  require("./img/card-1.png"),
  require("./img/card-2.png"),
  require("./img/card-3.png"),
  require("./img/card-4.png")
];

const Reservations = styled.section`padding-top: 45px;`;

export default props => (
  <Reservations>
    <div className="row between-xs baseline-xs">
      <div className="col-xs-9 col-md-10">
        <Title content="Popular reservations around the world" />
      </div>
      <div className="col-xs-3 col-md-2" />
    </div>
    <div className="row">
      <div className="col-xs-6 col-md-4 col-lg-3">
        <Card
          img={cardPics[0]}
          link="#"
          title="Chumley’s"
          subtitle="Speakeasy"
          price={60}
        />
      </div>
      <div className="col-xs-6 col-md-4 col-lg-3">
        <Card
          img={cardPics[1]}
          link="#"
          title="Hanjan"
          subtitle="Korean gastropub"
          price={50}
        />
      </div>
      <div className="col-xs-6 col-md-4 col-lg-3">
        <Card
          img={cardPics[2]}
          link="#"
          title="Prime Meats"
          subtitle="German american"
          price={55}
        />
      </div>
      <div className="col-xs-6 col-md-4 col-lg-3">
        <Card
          img={cardPics[3]}
          link="#"
          title="Seaprice"
          subtitle="Fine seafood"
          price={70}
        />
      </div>
    </div>
  </Reservations>
);
