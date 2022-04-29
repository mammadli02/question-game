var questionData = [{
    q: {
      question: "The sky is blue?",
      answer: "t",
    },
  },
  {
    q: {
      question: "There are 365 days in a year?",
      answer: "t",
    },
  },
  {
    q: {
      question: "There are 42 ounces in a pound?",
      answer: "f",
    },
  },
  {
    q: {
      question: "The Declaration of Independence was created in 1745?",
      answer: "f",
    },
  }, {
    q: {
      question: "Bananas are vegetables?",
      answer: "f",
    },
  },
];


class DomElements {

  question = document.querySelector("#question")
  score = document.querySelector("#score")
}
class QuestionsGame extends DomElements {
  score = 0;
  nextQuestion = 0;
  questions = [];


  constructor(suallar) {
    super();
    this.questions = suallar;
  }
  startGame() {
    this.question.innerHTML = this.questions[this.nextQuestion].q.question;
  }

  changeGame(cavab) {
    if (["t", "f"].indexOf(cavab) === -1) {
      alert("yalniz t ve f herflerini qeyd edin!!")
      return;
    }

    if (this.questions[this.nextQuestion].q.answer === cavab) {
      this.nextQuestion += 1;
      this.score++
      score.innerHTML = "Final Score: " + this.score + " out of " + questionData.length;
      this.startGame();
      alert("correct!")
      return


    } else {
      alert("false!")
    }
  }
}
var questionsGameHighLevel = new QuestionsGame(questionData);
questionsGameHighLevel.startGame();
window.onkeydown = function (e) {
  questionsGameHighLevel.changeGame(e.key);
};