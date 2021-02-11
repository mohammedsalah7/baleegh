import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #dafdee;
  margin: 120px auto;
  width: 1000px;
  height: 307px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    margin-left: -40px;
  }
  .left img {
    width: 307px;
    height: 307px;
    margin-top: -60px;
    margin-right: -40px;
  }
  .left p {
    width: 90px;
    height: 30px;
  }
  .right {
    width: 780px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .right .info {
    display: flex;
    direction: rtl;
    flex-direction: column;
  }
  .right .info h3 {
    color: #193051;
    width: 195px;
    height: 57px;
    font-weight: bold;
    font-size: 43px;
    color: #193051;
  }
  .right .info p {
    color: #193051;
    width: 722px;
    height: 28px;
    font-size: 21px;
    color: #193051;
    margin-top: -40px;
  }
  .right .btn {
    width: 450px;
    display: flex;
    justify-content: space-between;
    direction: rtl;
    flex-direction: row;
    padding: 15px;
    margin-left: 290px;
  }
  .right .btn :nth-child(1) {
    background-color: #85ddb6;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    font-size: 24px;
    width: 227px;
    height: 63px;
    color: #fff;
    padding: 0px;
  }
  .right .btn :nth-child(2) {
    color: #fff;
    background-color: #f669a9;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    font-size: 24px;
    width: 180px;
    height: 63px;
    padding: 0px;
  }
`;
