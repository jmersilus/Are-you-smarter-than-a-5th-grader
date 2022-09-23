document.getElementById("#wrong1")
wrong1.addEventListener("click", wrongAnwser);

document.getElementById("#wrong2")
wrong2.addEventListener("click", wrongAnwser);

document.getElementById("#wrong3")
wrong3.addEventListener("click", wrongAnwser);

document.getElementById("#right")
right.addEventListener("click", rightAnwser);

function wrongAnwser(){
    window.alert("wrong")
}

function rightAnwser(){
    window.alert("right")

}

// Figure out how to link right anwser to next set
// Wrong anwser will give alert