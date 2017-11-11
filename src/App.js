import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import Header from './containers/Header';
import Footer from './containers/Footer';

import SectionExplore from './containers/SectionExplore';
import SectionExperiences from './containers/SectionExperiences';

const Main = styled.main`
  padding-bottom: 64px;
`;
 
class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header />
      	<Main>
          <div className="container">
          	<SectionExplore />
          	<SectionExperiences />
          </div>
      	</Main>

      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />
      	<br />

      	<Footer />
      </div>
    );
  }
}

export default App;