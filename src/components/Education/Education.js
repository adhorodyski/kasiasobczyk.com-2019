import React, { Component } from 'react';
import styled from 'styled-components';

import About from './About';
import Gallery from './Gallery';

//styled-components
const styledWrapper = styled.div`
  height: auto;
`;

// exported component
class Education extends Component {
  componentDidMount() {
    var orig = document.body.className;
    document.body.className = 'edu-bg';
  }

  componentWillUnmout() {
    document.body.className = '';
  }

  render() {
    return(
      <styledWrapper>
        <Gallery />
        <About />
      </styledWrapper>
    );
  }
}

export default Education;
