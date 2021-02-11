import React from "react";
import * as G from "./style";
import brian from "../../asstes/brian.svg";
import ahyaa from "../../asstes/ahyaa.svg";
import math from "../../asstes/math.svg";
import fezya from "../../asstes/fezya.svg";
import kamya from "../../asstes/kamya.svg";
import kimya from "../../asstes/kimya.svg";
import lafdya from "../../asstes/lafdya.svg";

export default function GameSection() {
  return (
    <G.Container>
      <section className="title">
        <img src={brian} alt="brain" />
        <h4>ألعاب بليغ</h4>
      </section>
      <section className="game">
        <G.Links to="/Lafdya">
          <img src={lafdya} alt="lafdya" />
          <h4> القدرات اللفظية</h4>
        </G.Links>
        <G.Links to="/1">
          <img src={kamya} alt="kamya" />
          <h4>القدرات الكمية</h4>
        </G.Links>
        <G.Links to="/1">
          <img src={math} alt="math" />
          <h4>
            المواد العلمية <span>رياضيات</span>
          </h4>
        </G.Links>
        <G.Links to="/1">
          <img src={fezya} alt="fezya" />
          <h4>
            المواد العلمية <span>فيزياء</span>
          </h4>
        </G.Links>
        <G.Links to="/1">
          <img src={kimya} alt="kimya" />
          <h4>
            المواد العلمية <span>كيمياء</span>
          </h4>
        </G.Links>
        <G.Links to="/1">
          <img src={ahyaa} alt="ahyaa" />
          <h4>
            المواد العلمية <span>أحياء</span>
          </h4>
        </G.Links>
      </section>
    </G.Container>
  );
}
