import React, { Component } from "react";
import Question from "./question/Question";
import Answer from "./answer/answer";
import "./Quiz.css";

export default class Quiz extends Component {
  // initiating the local state
  state = {
    quiestions: {
      1: "؟ما هي المفردة الشاذة",
      2: "؟ماهو عكس  ذهب ",
      3: "ماهي المفردة الشاذة",
    },
    answers: {
      1: {
        1: "سيارة",
        2: "بيت",
        3: "باص",
        4: "طائرة",
      },
      2: {
        1: "اخذ",
        2: "امسك",
        3: "جاء",
        4: "أوصل",
      },
      3: {
        1: "خندق",
        2: "بئر",
        3: "حفرة",
        4: "مبنى",
      },
    },
    correctAnswers: {
      1: "2",
      2: "3",
      3: "4",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
  };

  // the method that checks the correct answer
  checkAnswer = (answer) => {
    const { correctAnswers, step } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  render() {
    let {
      quiestions,
      answers,
      correctAnswer,
      clickedAnswer,
      step,
    } = this.state;
    return (
      <div className="Content">
        {step <= Object.keys(quiestions).length ? (
          <>
            <Question question={quiestions[step]} />
            <Answer
              answer={answers[step]}
              step={step}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}
