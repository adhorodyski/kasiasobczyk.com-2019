import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Logo = require('./assets/katsob-logo.png');

// styled-components
const Img = styled.img`
  height: 70px;
  width: auto;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

const PageHeader = styled.header`
  position: static;
  top: 0;
  left: 0;
  height: auto;
  width: 100%;
  background: transparent;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 8px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }
`;

// exported component
class Header extends Component {
  render() {
    return(
      <PageHeader>
        <Nav className="navbar">
          <Img src={Logo} alt='Kasia Sobczyk'/>
          <List className="nav justify-content-end">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/koncerty-solowe" activeClassName="active">
                koncerty solowe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/koncerty-edukacyjne" activeClassName="active">
                koncerty edukacyjne
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/oprawa-ceremonii"
                activeClassName="active">
                oprawa ceremonii
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#kontakt">
                kontakt
              </a>
            </li>
          </List>
        </Nav>
      </PageHeader>
    );
  }
}

export default Header;
