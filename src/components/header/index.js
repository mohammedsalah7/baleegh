import React from "react";
import money from "../../asstes/money.svg";
import * as H from "./style";
export default function Header() {
  return (
    <H.Container>
      <section className="start">
        <button>إبدأ اللعب الأن</button>
        <img src={money} alt="coins" />
      </section>
      <section className="join">
        <p>اشترك في تحدي بليغ الآن لفرصة ربح العديد من الجوائز!</p>
      </section>
    </H.Container>
  );
}
