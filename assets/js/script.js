




startTest.addEventListener("click", askQuestions);
 

function askQuestions(){
    timer()
 



    
 }

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
































