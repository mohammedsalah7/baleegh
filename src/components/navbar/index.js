import React from "react";
import logo from "../../asstes/logo.svg";
import profileImg from "../../asstes/account.svg";
import pen from "../../asstes/pen.svg";
import book from "../../asstes/book.svg";
import progress from "../../asstes/progress.svg";
import coins from "../../asstes/coins.svg";

import * as N from "./style";

export default function Navbar() {
  return (
    <N.Container>
      <section className="right">
        <img src={profileImg} alt="profileImg" />
        <img src={progress} alt="progress" />
        <img src={coins} alt="progress" />
      </section>
      <section className="left">
        <a href="#2">
          <span>إختر</span>
          <img src={pen} alt="pen" />
        </a>

        <a href="#1">
          {" "}
          <span>تعلم</span>
          <img src={book} alt="book" />
        </a>
        <img src={logo} alt="log" />
      </section>
    </N.Container>
  );
}
