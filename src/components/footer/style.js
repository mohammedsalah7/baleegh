import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #dafdee;
  height: 138px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .right {
    direction: rtl;
    width: 500px;
    height: 120px;
    margin-top: 15px;
    margin-right: 20px;
  }
  .right article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .right article a {
    text-decoration: none;
    color: #193051;
    font-size: 22px;
  }
  .right p {
    text-decoration: none;
    color: #193051;
    font-size: 22px;
  }
  .social {
    height: 30px;
    width: 70px;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    margin-left: 30px;
  }
  .social a img {
    height: 31.51px;
    width: 31.51px;
  }
`;
export const Links = styled(Link)``;
