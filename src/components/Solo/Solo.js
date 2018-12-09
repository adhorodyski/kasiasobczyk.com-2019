import React, { Component } from 'react';
import styled from 'styled-components';

import Soundcloud from './Soundcloud';
import About from './About';
import Gallery from './Gallery';

// styled-components
const styledWrapper = styled.div`
  height: auto;
`;

const flexWrapper = styled.div`
  width: 100%;
`;

// exported component
class Solo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundcloudLink: "https://soundcloud.com/katarzynasobczyk/sets/koncerty-solowe-fragmenty"
    };
  }

  componentDidMount() {
    document.body.className = 'solo-bg';
  }

  componentWillUnmout() {
    document.body.className = '';
  }

  render() {
    return(
      <styledWrapper>
        <flexWrapper className="flexWrapper">
          <Soundcloud
            soundcloudLink={this.state.soundcloudLink}
          />
          <Gallery />
        </flexWrapper>
        <About />
      </styledWrapper>
    );
  }
}

export default Solo;
