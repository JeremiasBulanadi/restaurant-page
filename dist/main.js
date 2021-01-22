// TODO:

// initial page load code
let banner = document.getElementById("top-banner");

let pages = [
    `<div id="home-page" class="page">
        <div class="img-container" id="banner-img-container">
            <img src="../images/restaurant.png" alt="Cafe">
        </div>

        <div class="banner-text">
            <span class="header">
                Le Fleur de Lis
            </span>
            <span class="text">
                A cafe, a bistro, a respite.
            </span>
        </div>
    </div>`,

    `<div id="menu-page" class="page">
        <div class="menu-item">
            <h6 class="menu-item-header text">Deep Burger</h6>
            <img src="../images/bassburger.jpg" alt="Fish Burger">
            <div class="menu-item-description">
                <p class="text">
                    Fresh from the lake. So fresh in fact, you can taste the lake with every bite.
                </p>
            </div>
        </div>

        <div class="menu-item">
            <h6 class="menu-item-header text">House Special</h6>
            <img src="../images/burger.jpg" alt="Burger">
            <div class="menu-item-description">
                <p class="text">
                    A medium rare patty between vegetables, cheese, and bacon.
                </p>
            </div>
        </div>

        
        <div class="menu-item">
            <h6 class="menu-item-header text">Hotdog</h6>
            <img src="../images/hotdog.jpg" alt="Hotdog">
            <div class="menu-item-description">
                <p class="text">
                    I don't know what to tell you mate, it's just a hotdog.
                </p>
            </div>
        </div>
    </div>`,
    
    `<div id="about-page" class="page">
        <img src="../images/cafe-de-flore-5233973_960_720.webp" alt="">
        <article class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis, leo nec aliquam euismod, lorem arcu suscipit elit, vel lobortis metus risus a dui. Sed ac tincidunt massa. Nullam maximus eu libero nec euismod. Integer justo urna, vulputate id fermentum vel, maximus eu mi. Nulla sollicitudin diam eu felis ornare mattis. Morbi neque risus, venenatis nec nulla sed, aliquam convallis purus. Vestibulum porttitor tellus id elit bibendum, vitae egestas ex dictum. Fusce finibus suscipit quam sed molestie.
        </article>
    </div>`

]

banner.innerHTML = pages[0];

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
    if (target.className === "choice") changePage(target.getAttribute("data-choice"));
    target.className = target.className === "choice" ? "choice active" : "choice" ;
}

function changePage(choice) {
    if (choice === "home") banner.innerHTML = pages[0] ;
    if (choice === "menu") banner.innerHTML = pages[1] ;
    if (choice === "about") banner.innerHTML = pages[2] ;
}

function menuItem() {
    
}