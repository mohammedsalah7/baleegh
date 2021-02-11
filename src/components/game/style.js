import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  direction: rtl;
  width: 1000px;
  margin: auto auto 50px;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .title h4 {
    width: 273px;
    height: 87px;
    display: flex;
    justify-content: center;
    font-size: 65px;
    font-weight: bold;
    color: #193051;
  }
  .title img {
    width: 64.02px;
    height: 77.97px;
    margin-top: 80px;
  }
  .game {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  .game a {
    width: 300px;
    height: 207px;
    border: none;
    margin: 5px;
    padding: 0px;
    background-color: #ffd5e8;
    display: flex;
    direction: ltr;
    text-decoration: none;

    /* flex-direction: flex-start; */
  }
  .game a:nth-child(1) {
    background-color: #dafdee;
  }
  .game a:nth-child(2) {
    background-color: #dafdee;
  }
  .game a:nth-child(1) h4 {
    width: 200px;
    height: 46px;
    font-weight: bold;
    font-size: 34px;
    color: #7ad1be;
    margin-right: 10px;
  }
  .game a:nth-child(2) h4 {
    width: 200px;
    height: 46px;
    font-weight: bold;
    font-size: 34px;
    color: #7ad1be;
    margin-right: 20px;
  }
  .game a img {
    width: 100px;
    margin-top: -60px;
    margin-left: 20px;
  }
  .game a h4 {
    direction: rtl;
    width: 150px;
    margin-top: 140px;
    color: #f669a9;
    font-size: 26px;
    font-weight: bold;
  }
`;

export const Links = styled(Link)``;
