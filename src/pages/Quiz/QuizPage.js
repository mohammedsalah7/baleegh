import React from "react";
import Quiz from ".";
import * as Q from "./style";
import coins from "../../asstes/coins.svg";
import timer from "../../asstes/timer.svg";
import layerOne from "../../asstes/layerOne.svg";
import note from "../../asstes/note.svg";
import extraTime from "../../asstes/extraTime.svg";
import delAnswer from "../../asstes/delAnswer.svg";

export default function QuizPage() {
  return (
    <Q.Container>
      <section className="progress">
        <span>p</span>
      </section>
      <section className="show-info">
        <img src={coins} alt="coins" />
        <img src={timer} alt="timer" />
        <article>
          <span>المفردة الشاذة</span>
          <img src={layerOne} alt="layerOne" />
        </article>
      </section>
      {/* <section className="option">
        <article></article>
        <article></article>
        <article></article>
      </section> */}
      <Quiz />
      <section className="options">
        <button>
          <img src={note} alt="note" />
        </button>
        <button>
          <img src={extraTime} alt="extraTime" />
        </button>
        <button>
          <img src={delAnswer} alt="delAnswer" />
        </button>
      </section>
      <textarea
        className="write-notes"
        placeholder="...دون ملاحظتك على هذ السؤال"
      ></textarea>
      <section className="btn">
        <button>تحقق من الاجابة</button>
        <button>إغلاق صندوق الملاحظة</button>

        <button>خروج</button>
      </section>
    </Q.Container>
  );
}
