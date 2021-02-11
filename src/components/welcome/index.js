import React from "react";
import * as W from "./style";
import tree from "../../asstes/tree.svg";

export default function Wellcome() {
  return (
    <W.Container>
      <section className="right">
        <article className="info">
          <h3>مرحباً ميس</h3>
          <p>
            ابدأ بتدريبك اليومي لتقوية مهاراتك، أو اختر مهارة معينة من ألعاب
            بليغ.
          </p>
        </article>
        <article className="btn">
          <button>التدريب اليومي</button>
          <button>اشتراك الان</button>
        </article>
      </section>
      <section className="left">
        <img src={tree} alt="tree" />
        <p></p>
      </section>
    </W.Container>
  );
}
