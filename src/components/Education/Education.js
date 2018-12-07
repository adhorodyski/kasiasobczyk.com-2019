import React, { Component } from 'react';
import styled from 'styled-components';

import About from './About';
import Gallery from './Gallery';

//styled-components
const styledWrapper = styled.div`
  height: auto;
  min-height: 500px;
`;

// exported component
class Education extends Component {
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
