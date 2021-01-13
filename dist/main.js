// initial page load code
homeChoice = document.getElementById("home-choice") ;
homeChoice.classList.add("active"); // home page is selected by default

bottomMenu = document.getElementById("bottom-menu");
for (let element in bottomMenu.childNodes) {
    console.log(element);
}

// functions
function selectPage (e) {
    e.currentTarget.className = "choice active" ;
    

}

// renders the page selected
function renderPage () {
    
}