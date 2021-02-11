import React from "react";
import * as F from "./style";
import instagram from "../../asstes/instagram.svg";
import twitter from "../../asstes/twitter.svg";

export default function Footer() {
  return (
    <F.Container>
      <section className="social">
        <F.Links to="/tiwitter">
          <img src={twitter} alt="twitter" />
        </F.Links>
        <F.Links to="/instagram">
          <img src={instagram} alt="instagram" />
        </F.Links>
      </section>
      <section className="right">
        <article>
          <F.Links to="/1">عن بليغ</F.Links>
          <F.Links to="/1"> الأسئلة الشائعة</F.Links>
          <F.Links to="/1"> الخصوصية</F.Links>
          <F.Links to="/1"> المدونة</F.Links>
          <F.Links to="/1">أصدقاء بليغ </F.Links>
        </article>
        <p>جميع الحقوق محفوظة © شركة فصيح لتقنية المعلومات 2020</p>
      </section>
    </F.Container>
  );
}
