var readlineS = require("readline-sync");
var ask = readlineS.question("Your Name?");
var ans = ask;
console.log("Welcome " + ans +" let's find out how much do you know about PRASHANT!")



var question1 = {
  question:"Where do he live? Chennai, Mumbai, Noida ",
  
  
  answer : "Noida",
}
var question2 = {
  question :"What is his favourite food? Gobhi Parantha, Bada Paav, Aalu Gobhi ",
 
  
  
  answer :"Gobhi Parantha",


}
var question3 = {
  question :
    "what is his favourite music instrument?Guitar, Tabla, Harmonium ",
  
  
  answer :"Guitar",


}
var question4 = {
  question :"what is his favourite sport? Football, Cricket, Volleyball ",
  
  
  answer :"Cricket",


}
var question5 = {
  question :"what is his favourite color? Black, Blue, Red ",
  
  
  answer :"Blue",


}
var score = 0;
function play(question,answer){
  var userans = readlineS.question(question);

  
  
  if (userans === answer){
    console.log("right!");
    score=score+1;
    
  }else{
    console.log("wrong!");
  }
  

  
}

var question = [question1,question2,question3,question4,question5];
for (i=0;i<question.length;i++){
  
  play(question[i].question,question[i].answer)
  
}
console.log("Your total score:",score," out of 5");