
let rating = null

function createRatings(){

    let ratings = document.getElementById("ratings")

    for (let i = 1; i < 6; i++) {
       let button = document.createElement("button")
       button.setAttribute("class", "rating")
       button.setAttribute("id", "star-"+i)
       button.addEventListener("click", function(){
        selectRating(i);
       })
       button.textContent = i
       ratings.appendChild(button)
    
      }
   
}

function selectRating(newRating) {


    let clickedButton = document.getElementById("star-" + newRating);
    clickedButton.classList.add("clicked");
    if (rating !== null) {
        let oldButton = document.getElementById("star-" + rating);
        oldButton.classList.remove("clicked")
    }
    rating = newRating
    if (rating !== null){
        let submit = document.getElementById("submit")
        submit.disabled = false
    }
}


function redirect(){

    let question = document.getElementById("question")
    question.setAttribute("style", "display:none")

    let thankYou = document.getElementById("thanks")
    thankYou.setAttribute("style", "display:visible")

    displayRating();


}

 function displayRating(){

    let result = document.getElementById("result")
    result.textContent = "You selected " + rating + " out of 5"

    
 }