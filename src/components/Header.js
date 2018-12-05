import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Logo = require('./assets/katsob-logo.png');

// styled-components
const Img = styled.img`
  height: 70px;
`;

const PageHeader = styled.header`
  position: static;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background: transparent;
`;

// exported component
class Header extends Component {
  render() {
    return(
      <PageHeader>
        <nav className="navbar">
          <Img src={Logo} alt='Kasia Sobczyk'/>
          <ul className="nav justify-content-end">
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
          </ul>
        </nav>
      </PageHeader>
    );
  }
}

export default Header;
