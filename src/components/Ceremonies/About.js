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
  margin-bottom: 100px;

  @media (max-width: 1200px) {
    flex-direction: column;
    transition: all 0.3s;
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
  }
`;

const RightColumn = styled.div`
  width: 50%;

  @media (max-width: 1200px) {
    width: 100%;
    text-align: right;
    transition: all 0.3s;
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
          Oprawa ceremonii
        </MainHeading>
        <SubHeading>
          Ceremonie kościelne, cywilne, ostatnie pożegnanie...
        </SubHeading>
        <ColumnsContainer>
          <LeftColumn>
            <CategoryTitle>
              Na ten wyjątkowy w Państwa życiu czas zapewniam<br />najwyższy poziom oprawy muzycznej.<br />
              <br />Śpiewam podczas całej uroczystości<br />włącznie z częściami stałymi mszy.
            </CategoryTitle>
            <CategoryText>
              (Psalm, Alleluja, Hymn do Ducha Św.)
            </CategoryText>
          </LeftColumn>
          <RightColumn>
            <CategoryText>
              W repertuarze posiadam zarówno utwory klasyczne, sakralne,
              <br />jak i inne odpowiednio dopasowane do charakteru uroczystości.
              <Highlight>
                <br />
                Ave Maria - F.Schubert<br />
                Panis Angelicus - C. Franck<br />
                Hallelujah - L. Cohen<br />
                Schowaj mnie<br />
                Tylko Ty mnie prowadź<br />
                Nim świt obudzi mrok<br />
                Oczekuję ciebie Panie<br />
                oraz inne...
              </Highlight>
            </CategoryText>
            <CategoryTitle>
              Zdaję sobie sprawę,<br />że moje uczestnictwo w uroczystości jest uzupełnieniem,<br />które ma umilić, bądź ułatwić Państwu przeżycie tych ważnych chwil.<br /><br />Dlatego właśnie wspierając muzycznie<br />tak bardzo dbam o styl i klasę wykonania.
            </CategoryTitle>
          </RightColumn>
        </ColumnsContainer>
      </StyledWrapper>
    );
  }
}

export default About;
