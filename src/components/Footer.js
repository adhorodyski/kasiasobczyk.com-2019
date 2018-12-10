import React, { Component } from 'react';
import styled from 'styled-components';

// styled-components
const PageFooter = styled.footer`
  background: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin: 10px auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContactOption = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 20px;

  @media (max-width: 800px) {
    margin: 20px auto;
  }
`;

const Value = styled.p`
  font-size: 15px;
  text-align: center;
  line-height: 0.7;
  margin-bottom: 0;
  font-weight: 500;
`;

const Key = styled.p`
  font-size: 12px;
  margin-bottom: 0;
`;

const PageCaption = styled.p`
  text-align: center;
  font-size: 10px;
  width: 100%;
  margin-bottom: 4px;
`;

// exported component
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "kasia.sobczyk@vp.pl",
      phone: "781 449 713",
      facebook: "/officialkasiasobczyk",
      facebookLink: "https://www.facebook.com/OfficialKasiaSobczyk/",
      pageAuthor: "Adam Horodyski",
      pageProductionYear: "2018"
    }
  }
  render() {
    return(
      <PageFooter id='kontakt'>
        <StyledWrapper>
          <ContactOption className="contactOption">
            <Value>
              {this.state.mail}
            </Value>
            <Key>
              mail
            </Key>
          </ContactOption>
          <ContactOption className="contactOption">
            <Value
              id='phone'>
              {this.state.phone}
            </Value>
            <Key>
              telefon
            </Key>
          </ContactOption>
          <ContactOption className="contactOption">
            <Value
              as='a'
              href={this.state.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              id='facebook'>
              {this.state.facebook}
            </Value>
            <Key>
              facebook
            </Key>
          </ContactOption>
        </StyledWrapper>
        <PageCaption>
          {this.state.pageProductionYear}, {this.state.pageAuthor}
        </PageCaption>
      </PageFooter>
    );
  }
}

export default Footer;
