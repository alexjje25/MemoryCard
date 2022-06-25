import styled from "styled-components";

export const HomeView = styled.main`
  width:100%;

  .image{
    width:1080px;
    height:1920px;
    margin-left: 10px;
    background-size: cover;

  }
  .logo{
    width:600px;
    height: 100px;
    margin-top: -50px;

  }
  .btn{
    position: relative;
    width: 60%;
    height: 60px;
    border: none;
    border-radius: 5px 20px 5px;
    background-color: #294A9B;
    color: white;
    font-size: 18px;
    font-weight:800;
    margin-top: 0px;
    margin-left: -21px;
    background:linear-gradient(rgba(55, 109, 168, 1), rgba(28, 136, 248, 1));
    cursor: pointer;
    :hover{
      background: linear-gradient(rgba(28, 136, 248, 1), rgba(55, 109, 168, 1));
    }
  }
  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 18rem;
  }
  .title{
    position:relative;
    font-size: 30px;
    color: rgba(55, 109, 168, 1);
    text-align: center;
    margin-top:-100px;
    font-family: Khula;
    font-weight: 800;
  }
`;
