import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const SoundcloudLogo = require("../assets/soundcloud.png");

//styled-components
const SoundcloudStyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin: 20px auto;
`;

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const Link = styled.a`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  margin: 20px auto;
  -webkit-box-shadow: 0px 7px 17px 0px rgba(0,0,0,0.12);
  -moz-box-shadow: 0px 7px 17px 0px rgba(0,0,0,0.12);
  box-shadow: 0px 7px 17px 0px rgba(0,0,0,0.12);
  &:hover {
    animation: ${scale} 0.4s;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  opacity: 0.85;
  &:hover {
    opacity: 1;
    animation: ${scale} 0.6s;
  }
`;

class Soundcloud extends Component {
  render() {
    return (
      <SoundcloudStyledWrapper>
        <Text>
          Jestem na Soundcloud,<br />kliknij by mnie posłuchać:
        </Text>
        <Link
          href={this.props.soundcloudLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={SoundcloudLogo}/>
        </Link>
      </SoundcloudStyledWrapper>
    );
  }
}

export default Soundcloud;
