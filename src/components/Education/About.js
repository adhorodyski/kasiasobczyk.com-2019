import React, { Component } from 'react';
import styled from 'styled-components';

const Kids = require("../assets/kids.png");
const Instruments = require("../assets/instruments.png");
const Timer = require("../assets/timer.png");
const Calendar = require("../assets/calendar.png");

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
  margin-bottom: 100px;

  @media (max-width: 1200px) {
    flex-direction: column;
    transition: all 0.3s;
  }
`;

const LeftColumn = styled.div`
  width: 50%;
  text-align: left;
  padding-right: 50px;

  @media (max-width: 1200px) {
    width: 100%;
    text-align: left;
    transition: all 0.3s;
  }
`;

const RightColumn = styled.div`
  width: 50%;
  text-align: right;

  @media (max-width: 1200px) {
    width: 100%;
    text-align: right;
    transition: all 0.3s;
  }
`;

const CategoryGraphic = styled.img`
  height: 200px;
  margin: 30px 20%;
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

const Span = styled.span`
  background: rgba(0, 0, 0, 0.08);
  padding: 1px 3px;
`;

//partials
const TimerArticle = () => {
  return (
    <>
      <CategoryGraphic src={Timer} />
      <CategoryTitle>
        ABY DOBRZE WYKORZYSTAĆ CZAS...
      </CategoryTitle>
      <CategoryText>
        Są to <Span>30-minutowe spotkania-koncerty,</Span> podczas których<br />
        w bardzo przystępny sposób przedstawiam dzieciom<br />
        <Span>ważne zagadnienia muzyczne.</Span><br />
        <br />
        Czynię to w taki sposób,<br />
        aby mali melomani czerpali z tych spotkań przede wszystkim <Span>radość,</Span><br />
        dlatego układany wcześniej scenariusz każdego koncertu jest elastyczny<br />
      i <Span>dostosowany do wrażliwości dzieci</Span> w danej chwili.<br />
        Wszystko po to, by wykorzytać maksymalnie uwagę i skupienie dziecka.
      </CategoryText>
    </>
  );
};

const CalendarArticle = () => {
  return (
    <>
      <CategoryGraphic src={Calendar} />
      <CategoryTitle>
        WAŻNA JEST SYSTEMATYCZNOŚĆ.
      </CategoryTitle>
      <CategoryText>
        Spotykamy się z przedszkolakami <Span>cyklicznie,</Span> przez cały rok szkolny.<br />
      Daje nam to możliwość poznania się bliżej, <Span>zaprzyjaźnienia,</Span><br />
      oraz <Span>utrwalania poznanych dotąd wiadomości.</Span>
      </CategoryText>
    </>
  );
};

const KidsArticle = () => {
  return (
    <>
      <CategoryGraphic src={Kids} />
      <CategoryTitle>
        DLA KOGO?
      </CategoryTitle>
      <CategoryText>
        Audycje muzyczne adresowane są do <Span>najmłodszych odbiorców,</Span><br />
        a więc do <Span>przedszkolaków</Span>, jak również do dzieci wczesnoszkolnych.<br />
          Dobór słuchaczy jest przemyślany, gdyż właśnie wczesne lata<br />
        decydują o późniejszych <Span>zainteresowaniach i zamiłowaniu do muzyki</Span><br />
        oraz tworzą bagaż doświadczeń na całe życie.<br />
        <br />
        Założeniem audycji jest kształcenie, <Span>umuzykalnianie,</Span> uwrażliwianie<br />
        i <Span>kształtowanie gustów muzycznych dzieci,</Span> a także przygotowywanie<br />
        najmłodszych słuchaczy do odbioru muzyki.<br />
        <br />
        Cele audycji realizowane są poprzez słuchanie muzyki, jej przeżywanie<br />
        i stwarzanie możliwości do <Span>aktywnego udziału</Span> w spotkaniach z muzyką.
      </CategoryText>
    </>
  );
};

const InstrumentsArticle = () => {
  return (
    <>
      <CategoryGraphic src={Instruments} />
      <CategoryTitle>
        A CO NA KONCERCIE?
      </CategoryTitle>
      <CategoryText>
        Podczas koncertów dzieci <Span>poznają bliżej różne instrumenty,</Span><br />
        utwory, piosenki. <Span>Koncerty wzbogacam zabawami ruchowymi,</Span><br />
        zagadkami.<br />
        <br />
        <Span>Każde kolejne spotkanie to inny temat</Span> i wprowadzanie<br />
        nowych pojęć muzycznych.<br />
        <br />
        Jako <Span>prelegent i wykonawca,</Span> do współpracy koncertowej<br />
        zapraszam doświadczonych i sprawdzonych muzyków<br />
        <Span>ze środowiska kulturalno-oświatowego</Span> naszego miasta,<br />
        ale również z innych ośrodków.
      </CategoryText>
    </>
  );
};

//exported component
class About extends Component {
  render() {
    return (
      <StyledWrapper>
        <MainHeading>
          Koncerty edukacyjne
        </MainHeading>
        <SubHeading>
          Przez wiele lat prowadziłam koncerty Olsztyńskiej Filharmonii dla dzieci przedszkolnych,<br />ale od 2017 roku już jako
          Agencja Artystyczna stworzyłam nową trasę koncertową<br />
          i rozpoczęłam współpracę z kilkudziesięcioma placówkami przedszkolnymi<br />z woj. warmińsko-mazurskiego i nie tylko.
        </SubHeading>
        <ColumnsContainer>
          <LeftColumn>
            <TimerArticle />
            <CalendarArticle />
          </LeftColumn>
          <RightColumn>
            <KidsArticle />
            <InstrumentsArticle />
          </RightColumn>
        </ColumnsContainer>
      </StyledWrapper>
    );
  }
}

export default About;
