import React, { Component } from 'react';
import styled from 'styled-components';

//styled-components
const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: left;
`;

const MainHeading = styled.h1`
  font-size: 50px;
  font-weight: 700;
  font-style: italic;
`;

const SubHeading = styled(MainHeading)`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin: 0 0 50px 0;
`;

const ColumnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    flex-direction: column;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }
`;

const LeftColumn = styled.div`
  width: 50%;
  text-align: right;
  padding-right: 50px;

  @media (max-width: 1200px) {
    width: 100%;
    text-align: left;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }
`;

const RightColumn = styled.div`
  width: 50%;

  @media (max-width: 1200px) {
    width: 100%;
    text-align: right;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }
`;

const CategoryTitle = styled(SubHeading)`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const CategoryText = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0 0 50px 0;
`;

const Highlight = styled(CategoryText)`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

//exported component
class About extends Component {
  render() {
    return (
      <StyledWrapper>
        <MainHeading>
          Koncerty solowe
        </MainHeading>
        <SubHeading>
          Zawsze występuję w towarzystwie realizatora dźwięku,<br />
          dysponuję profesjonalnym nagłośnieniem, oraz oświetleniem.
        </SubHeading>
        <ColumnsContainer>
          <LeftColumn>
            <CategoryTitle>
              Letnie koncerty wokalne<br />
              na żaglowcu "Chopin"
            </CategoryTitle>
            <CategoryText>
              W lipcu i sierpniu zapraszam do Mikołajek na rejsy<br />
              po jeziorach mazurskich, słuchając najpiękniejszych<br />
              utworów wszechczasów i podziwiając krajobrazy.
            </CategoryText>
          </LeftColumn>
          <RightColumn>
            <CategoryTitle>
              "Zaczarowany świat Walta Disneya"
            </CategoryTitle>
            <CategoryText>
              Najpiękniejsze piosenki z bajek i filmów dla dzieci,<br />
              między innymi:<br />
              <Highlight>
                Pocahontas<br />
                Cinderella<br />
                Pinokio<br />
                Królewna Śnieżka i 7 krasnoludków<br />
                Aladyn...
              </Highlight>
            </CategoryText>
            <CategoryTitle>
              "Muzyczny świat filmu i musicalu"
            </CategoryTitle>
            <CategoryText>
              Najpiękniejsze arie musicalowe, między innymi: <br />
              <Highlight>
                Nędznicy<br />
                Cats<br />
                Jesus Christ Superstar<br />
                West Side Story...
              </Highlight>
              <br />
              Oraz perełki muzyki filmowej (nagrodzone Oscarami i nie tylko).
            </CategoryText>
            <CategoryTitle>
              "Lata 20-te, lata 30-te"
            </CategoryTitle>
            <CategoryText>
              Niezapomniane evergreeny z okresu dwudziestolecia<br />
              międzywojennego, między innymi:<br />
              <Highlight>
                Ja się boję sama spać<br />
                Pamiętasz była jesień<br />
                Już nigdy, Mały Gigolo...
              </Highlight>
            </CategoryText>
            <CategoryTitle>
              Koncert Bożonarodzeniowy
            </CategoryTitle>
            <CategoryText>
              Najpiękniejsze kolędy polskie i nie tylko<br />
              oraz utwory o charakterze świątecznym.
            </CategoryText>
          </RightColumn>
        </ColumnsContainer>
      </StyledWrapper>
    );
  }
}

export default About;
