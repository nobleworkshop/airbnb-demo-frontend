import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

import SectionExplore from "./containers/SectionExplore";
import SectionExperiences from "./containers/SectionExperiences";
import SectionHomes from "./containers/SectionHomes";
import SectionReservations from "./containers/SectionReservations";
import SectionDestinations from "./containers/SectionDestinations";

const Main = styled.main`padding-bottom: 64px;`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <div className="container">
            <SectionExplore />
            <SectionExperiences />
            <SectionHomes />
            <SectionReservations />
            <SectionDestinations />
          </div>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
