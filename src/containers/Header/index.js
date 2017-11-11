import React, { Component } from 'react';
import styled from 'styled-components';

import 'flexboxgrid2/flexboxgrid2.css'

import Logo from '../../components/Logo';
import SearchInput from '../../components/SearchInput';
import NavigationTop from '../../components/NavigationTop';

export const HeaderWrapper = styled.div`
	display: block;
	position: relative;
	border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

class Header extends React.Component {
  render() {
    return (
    	<HeaderWrapper>
		  	<div className="container">
		      	<div className="row">
			      	<div className="col-xs-2 col-md-1 col-xl-1">
			      		<Logo />
			      	</div>
			      	<div className="col-xs-10 col-md-7 col-xl-5">
			      		<SearchInput />
			      	</div>
			      	<div className="col-xs-0 col-md-4 col-xl-6">
			      		<NavigationTop />
			      	</div>
		  		</div>
		  	</div>
    	</HeaderWrapper>
    );
  }
};

export default Header;