import styled from "styled-components";

export const GameWaitView = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;

  section {

  }
`;

export const Container = styled.div`

`;

export const LogoContainer = styled.div`
  flex-direction: column;
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 44px;
    font-weight: 500;
    line-height: 52px;
    text-align: center;
    color: #d1f4ff;
    text-shadow: 0px 2px 29px #90d8ef;
    margin-top: 20px;
    @media (max-width: 1000px) {
      font-size: 30px;
    }
  }
  @media (max-width: 1000px) {
    margin-bottom: 70px;
  }
`;

export const Logo = styled.img`
  width: 400px;
  @media (max-width: 1000px) {
    width: 250px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 100%;
  margin-top: 50px;
  img {
    width: 180px;
  }
  @media (max-width: 1000px) {
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 55px;
  margin-top: 70px;
  position: absolute;
  background-color: #dba90d;
  border: none;
  border-radius: 10px;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: #d1f4ff;
  text-shadow: 0px 2px 29px #90d8ef;
  cursor: pointer;
  :hover {
    text-shadow: 0px 0px 14px #90d8ef;
    box-shadow: 0px 6px 60px #dba90d;
  }
  @media (min-width: 1000px) {
    height: 60px;
    font-size: 22px;
  }
`;

export const CardsContainer = styled.div`
  display: grid;

  grid-template-columns: 50% 50%;

  flex-wrap: wrap;
`;
