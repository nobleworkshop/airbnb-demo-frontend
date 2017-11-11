import React, { Component } from 'react';
import styled from 'styled-components';

import 'flexboxgrid2/flexboxgrid2.css'
import logoImg from './icons/logo.svg';
import arrowDown from "./icons/arrowDown.svg";

const FooterWrapper = styled.footer`
	display: block;
	position: relative;
	border-top: 1px solid rgba(72, 72, 72, 0.3);

	.navSection {
		padding-top: 48px;
		padding-bottom: 48px;
	}

	.copyrightSection {
		padding-top: 35px;
		padding-bottom: 35px;
	}

	.flex-row {
		display: flex;
	}

	.flex-end {
		justify-content: flex-end;
	}
`;

const Header = styled.h3`
  font-size: 15px;
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: bold;
  line-height: 18px;
  color: #383838;
`;

const NavVerticalHolder = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
`;

const NavHorizontalHolder = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
`;

const NavItem = styled.li`
	margin: 0;
	padding: 0;
	margin-bottom: 8px;
	font-size: 15px;
	line-height: 18px;
  	font-style: book;
`;

const NavLink = styled.a`
	color: #636363;
	text-decoration: none;

	&.horizontalMargin {
		margin-left: 8px;
		margin-right: 8px;

		&:last-child {
			margin-right: 0px;
		}
	}

	:hover {
		color: #FF5A5F;
		text-decoration: underline;
	}
`;

const HorizontalLine = styled.hr`
	margin: 0;
	padding: 0;
	border: 0;
	border-top: 1px solid rgba(72, 72, 72, 0.3);
`;

export const LogoLink = styled.a`
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  width: 21px;
  height: 22px;
  margin-right: 12px;
`;

export const Copyright = styled.span`
  font-size: 15px;
  line-height: 18px;
  color: #636363;
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  list-style: none;
  margin-left: 20px;
`;

export const SocialLink = styled.a`
  display: inline-block;
  margin-left: 12px;
  width: 24px;
  height: 24px;
  text-decoration: none;
  background-image: url(${props => props.pic});
  background-repeat: no-repeat;
  background-position: 0 0;
`;

export const Dropdown = styled.div`
  position: relative;
  margin-bottom: 16px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;

  &::after {
    position: absolute;
    content: "";
    width: 16px;
    height: 9px;
    top: 20px;
    right: 13px;
    background-image: url(${arrowDown});
    background-position: 0 0;
    background-size: contain;
  }
`;

export const DropdownPlaceholder = styled.span`
  font-style: normal;
  font-weight: 300;
  line-height: 23px;
  font-size: 18px;

  color: #383838;
  display: block;
  padding: 12px 30px 12px 16px;
`;

export const Select = styled.select`
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  width: 100%;
`;

class Footer extends React.Component {
  render() {

  	const SocialsPics = [
  	  require("./icons/facebook.svg"),
  	  require("./icons/twitter.svg"),
  	  require("./icons/instagram.svg")
  	];

    return (
    	<FooterWrapper>
	    	<div className="container">
		    	<section className="navSection">
			    	<div className="row">
				    	<div class="col-xs-3">
					    	<Dropdown>
					    	  <DropdownPlaceholder>English</DropdownPlaceholder>
					    	  <Select name="lang" id="lang">
					    	    <option value="eng">English</option>
					    	    <option value="rus">Russian</option>
					    	  </Select>
					    	</Dropdown>

					    	<Dropdown>
					    	  <DropdownPlaceholder>United States dollar</DropdownPlaceholder>
					    	  <Select name="lang" id="lang">
					    	    <option value="eng">United States dollar</option>
					    	    <option value="rus">Ruble</option>
					    	  </Select>
					    	</Dropdown>
				    	</div>
				    	<div class="col-xs-3 col-xs-offset-1">
		    		    	<Header>Airbnb</Header>
		    		    	<NavVerticalHolder>
			    		    	<NavItem>
			    		    		<NavLink href="#">Why Host</NavLink>
			    		    	</NavItem>
			    		    	<NavItem>
			    		    		<NavLink href="#">Hospitality</NavLink>
			    		    	</NavItem>
			    		    	<NavItem>
			    		    		<NavLink href="#">Responsible Hosting</NavLink>
			    		    	</NavItem>
			    		    	<NavItem>
			    		    		<NavLink href="#">Community Center</NavLink>
			    		    	</NavItem>
		    		    	</NavVerticalHolder>
				    	</div>
		    	    	<div class="col-xs-3">
		    		    	<Header>Discover</Header>
		    		    	<NavVerticalHolder>
			    		    	<NavItem>
			    		    		<NavLink href="#">Why Host</NavLink>
			    		    	</NavItem>
			    		    	<NavItem>
			    		    		<NavLink href="#">Hospitality</NavLink>
			    		    	</NavItem>
			    		    	<NavItem>
			    		    		<NavLink href="#">Responsible Hosting</NavLink>
			    		    	</NavItem>
			    		    	<NavItem>
			    		    		<NavLink href="#">Community Center</NavLink>
			    		    	</NavItem>
		    		    	</NavVerticalHolder>
		    	    	</div>
		    	    	<div class="col-xs-2">
		    		    	<Header>Hosting</Header>
		    		    	<NavVerticalHolder>
			    		    	<NavItem>
			    		    		<NavLink href="#">Why Host</NavLink>
			    		    	</NavItem>
			    		    	<NavItem>
			    		    		<NavLink href="#">Hospitality</NavLink>
			    		    	</NavItem>
			    		    	<NavItem>
			    		    		<NavLink href="#">Responsible Hosting</NavLink>
			    		    	</NavItem>
			    		    	<NavItem>
			    		    		<NavLink href="#">Community Center</NavLink>
			    		    	</NavItem>
		    		    	</NavVerticalHolder>
		    	    	</div>
			    	</div>
		    	</section>
		    	<HorizontalLine />
		    	<section className="copyrightSection">
			    	<div className="row">
		    	    	<div class="col-xs-6">
		    		    	<LogoLink href="#">
		    		    	  <LogoWrapper>
		    		    	    <img src={logoImg} alt="Airbnb" />
		    		    	  </LogoWrapper>
		    		    	  <Copyright>© Airbnb Inc.</Copyright>
		    		    	</LogoLink>
		    	    	</div>
		    	    	<div class="col-xs-6">
		    	    		<div className="flex-row flex-end">
			      		    	<NavHorizontalHolder>
			  	    		    	<NavItem>
			  	    		    		<NavLink className="horizontalMargin" href="#">Terms</NavLink>
			  	    		    	</NavItem>
			  	    		    	<NavItem>
			  	    		    		<NavLink className="horizontalMargin" href="#">Privacy</NavLink>
			  	    		    	</NavItem>
			  	    		    	<NavItem>
			  	    		    		<NavLink className="horizontalMargin" href="#">Site map</NavLink>
			  	    		    	</NavItem>
			      		    	</NavHorizontalHolder>
			    		    	<FooterSocials>
			    		    	  <SocialLink pic={SocialsPics[0]} href="#" />
			    		    	  <SocialLink pic={SocialsPics[1]} href="#" />
			    		    	  <SocialLink pic={SocialsPics[2]} href="#" />
			    		    	</FooterSocials>
		    	    		</div>
		    	    	</div>
			    	</div>
		    	</section>
	    	</div>
    	</FooterWrapper>
    );
  }
};

export default Footer;