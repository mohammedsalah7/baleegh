import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff8db;
  height: 89px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .start {
    display: flex;
    flex-direction: row;
    margin-left: 110px;
  }
  .start button {
    width: 151px;
    height: 47px;
    background-color: #ffbd62;
    padding: 1px;
    border: none;
    cursor: pointer;
    position: relative;
    margin-top: 20px;
    margin-left: -120px;
    z-index: 99;
    font-size: 17px;
    color: #193051;
    font-weight: bold;
  }
  .start img {
    width: 99.47px;
    height: 108.67px;
    position: absolute;
  }
  .join {
    display: flex;
    align-items: center;
    margin-left: 300px;
    font-size: 23px;
    color: #193051;
    font-weight: bold;
  }
`;
