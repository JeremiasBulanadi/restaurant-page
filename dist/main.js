// TODO:

// initial page load code
let homeChoice = document.getElementById("home-choice") ;
homeChoice.classList.add("active"); // home page is selected by default

let bottomMenu = document.getElementById("bottom-menu");
let choices = Array.from(bottomMenu.getElementsByClassName("choice"));
choices.forEach(choice => choice.onclick = "selectPage(event)");
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click',selectPage);
}

// functions
function selectPage (e) {
    for (let i = 0; i < choices.length; i++) {
        choices[i].className = "choice";
    }
    target = e.currentTarget;
    target.className = target.className === "choice" ? "choice active" : "choice" ;

}
