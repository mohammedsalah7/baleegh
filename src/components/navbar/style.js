import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid #999;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
  .right {
    width: 550px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
  }
  .left a {
    display: flex;
    align-items: center;
    color: #193051;
    padding: 5px;
    text-decoration: none;
  }
  .left a span {
    padding: 4px;
  }
`;
