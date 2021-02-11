import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  direction: rtl;
  width: 1000px;
  margin: 90px auto 80px;

  .title {
    display: flex;
    width: 350px;
    height: 120px;
    flex-direction: row;
    justify-content: center;
  }
  .title h4 {
    width: 258px;
    height: 51px;
    display: flex;
    justify-content: center;
    font-size: 38px;
    font-weight: bold;
    color: #5b87eb;
  }
  .title img {
    width: 105.44px;
    height: 85.45px;
    margin-top: 25px;
    color: red;
  }
  .game {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .game a {
    width: 201.54px;
    height: 215.57px;
    border: none;
    margin: 15px;
    padding: 0px;
    background-color: #f2f6ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    direction: ltr;
    text-decoration: none;
    align-items: center;
  }

  .game a h4 {
    direction: rtl;
    color: #193051;
    font-size: 29px;
    font-weight: normal;
  }
`;

export const Links = styled(Link)``;
