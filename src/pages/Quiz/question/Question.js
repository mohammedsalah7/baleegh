import React from "react";
import "./Question.css";
import bookmark from "../../../asstes/bookmark.svg";

const Question = (props) => {
  return (
    <section className="question">
      <h1>{props.question}</h1>
      <img src={bookmark} alt="bookmark" />
    </section>
  );
};

export default Question;
