startTest.addEventListener("click", askQuestions);
 

function askQuestions(){
    timer()


 




 }
// Timer using a progress bar instead
 function timer(){
    var timeleft = 60;
    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
      }
      document.getElementById("progressBar").value = 60 - timeleft;
      timeleft -= 1;
    }, 1000);    
}

const questions = [
    {
      question: "Commonly used data types Do NOT include:",
      answers: {
        1: "strings",
        2: "booleans",
        3: "alerts",
        4: "numbers"
      },
      correctAnswer: "2"
    },
    {
      question: "The condition in an if / else statement is enclosed with?",
      answers: {
        1: "quotes",
        2: "curly",
        3: "parenthesis",
        4: "square brackets"
      },
      correctAnswer: "3"
    },
    {
      question: "Arrays in javascript can be used to store?",
      answers: {
        1: "Numbers and strings",
        2: "Other arrays",
        3: "Booleans",
        4: "All the above"
      },
      correctAnswer: "4"
    }
  ];






























