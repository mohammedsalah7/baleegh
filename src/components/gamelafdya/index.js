import React from "react";
import * as G from "./style";
import layerOne from "../../asstes/layerOne.svg";
import layerTwo from "../../asstes/layerTwo.svg";
import layerThree from "../../asstes/layerThree.svg";
import layerFour from "../../asstes/layerFour.svg";
import layerFive from "../../asstes/layerFive.svg";
import layerSix from "../../asstes/layerSix.svg";
import lafdya from "../../asstes/lafdya.svg";

export default function GameLaf() {
  return (
    <G.Container>
      <section className="title">
        <img src={lafdya} alt="lafdya" />
        <h4> المهارات اللفظية</h4>
      </section>
      <section className="game">
        <G.Links to="/Quiz">
          <img src={layerOne} alt="layer1" />
          <h4>المفردة الشاذة</h4>
        </G.Links>
        <G.Links to="/1">
          <img src={layerTwo} alt="layer2" />
          <h4>التناظر اللفظي</h4>
        </G.Links>
        <G.Links to="/1">
          <img src={layerThree} alt="layer3" />
          <h4>الربط</h4>
        </G.Links>
        <G.Links to="/1">
          <img src={layerFour} alt="layer4" />
          <h4>إكمال الجمل</h4>
        </G.Links>
        <G.Links to="/1">
          <img src={layerFive} alt="layer5" />
          <h4>الخطأ السياقي </h4>
        </G.Links>
        <G.Links to="/1">
          <img src={layerSix} alt="layer6" />
          <h4>استيعاب المقروء </h4>
        </G.Links>
      </section>
    </G.Container>
  );
}
