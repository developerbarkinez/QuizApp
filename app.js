function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

//Question prototype
Question.prototype.checkAnswer = function (answer) {
  return this.answer = answer;
}

//Quiz Constructor
function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;

}
//Quiz Prototype
Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];

}
//Quiz isFinish
Quiz.prototype.isFinish = function () {
  return this.questions.length === this.questionIndex;
}

//Quiz Guess
Quiz.prototype.guess = function (answer) {
  var question = this.getQuestion();
  if (question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
}

var q1 = new Question("what's the best programming language",
  ["javascript", "python", "asp.net","visualbasic"], "javascript");
var q2 = new Question("what's the most popular programming language?",
  ["c#", "visual basic", "nodejs", "javascript"], "javascript");
var q3 = new Question("what's the best modern programming language",
  ["C#", "javascript", "python", "asp.net"], "javascript");

var questions = [q1, q2, q3];


//Start Quiz

var quiz=new Quiz(questions);
loadQuestion();

function loadQuestion(){
  if(quiz.isFinish()){
        showScore();
  }else{
    var questions1=quiz.getQuestion().text;
    document.querySelector('#questiontext').textContent=questions1;
    var choices1=quiz.getQuestion().choices;
    for(var i=0;i<choices1.length;i++){
      var span=document.querySelector('#choice'+i);
      span.innerHTML=choices1[i];
      guess('btn'+i,choices1[i]);
    }
    showProgress();
  }
}
function guess(id,guess){
  var btn=document.getElementById(id);
  btn.onclick=function(){
    quiz.guess(guess);
    loadQuestion();
  }

}

function showScore(){
 var html=`<h2>Score</h2><h4>${quiz.score}</h4>`;
 document.querySelector('.card-body').innerHTML=html;
}

function showProgress(){
  var totalQNum=quiz.questions.length;
  var questionNum=quiz.questionIndex+1;
  document.querySelector('#progress').innerHTML='Question '+questionNum+' of '+totalQNum;
}