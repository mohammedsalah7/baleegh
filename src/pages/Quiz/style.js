import styled from "styled-components";

export const Container = styled.div`
  width: 931px;
  margin: auto;

  .progress {
    background-color: #b2b2b2;
    border-radius: 15px;
    color: #b2b2b2;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .show-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .show-info img :nth-child(1) {
    width: 175px;
    height: 73px;
  }
  .show-info img :nth-child(2) {
    width: 129px;
    height: 129px;
  }
  .show-info article {
    width: 160px;
    height: 73px;
    background-color: #dafdee;
    display: flex;
    justify-content: center;
  }
  .show-info article img {
    width: 37.25px;
    height: 35.16px;
    margin-top: 20px;
  }
  .show-info article span {
    width: 52px;
    height: 43px;
    font-size: 17px;
    font-weight: bold;
    color: #7ad1be;
    margin-top: 20px;
  }
  .options {
    margin-top: -190px;
    margin-bottom: 40px;
    display: flex;
    direction: rtl;
    justify-content: center;
    align-content: center;
  }
  .options button {
    background: none;
    border: none;
    padding: 0px;
    cursor: pointer;
  }
  .options button img {
    width: 80px;
    height: 81px;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    background-color: #eaeaea;
    padding: 15px;
  }

  .btn button:nth-child(1) {
    border: 1px solid #b2b2b2;
    width: 145px;
    height: 50px;
    background-color: #eaeaea;
    padding: 0;
    border-radius: 7px;
    cursor: pointer;
    color: #b2b2b2;
    font-size: 18px;
  }
  .btn button:nth-child(2) {
    border: 1px solid #5b87eb;
    width: 283px;
    height: 50px;
    background-color: #dbe6ff;
    padding: 0;
    border-radius: 7px;
    cursor: pointer;
    color: #5b87eb;
    font-size: 18px;
  }
  .btn button:nth-child(3) {
    border: 1px solid #f669a9;
    width: 145px;
    height: 50px;
    background-color: #ffd5e8;
    padding: 0;
    border-radius: 7px;
    cursor: pointer;
    color: #f669a9;
    font-size: 22px;
  }
  .write-notes {
    width: 925px;
    height: 150px;
    font-size: 20px;
    resize: none;
    direction: rtl;
    margin-bottom: 25px;
  }
`;
