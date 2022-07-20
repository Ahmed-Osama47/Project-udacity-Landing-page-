/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navMenu = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));
/**
 * End Global Variables
 * Start Functions
 * Build the nav
*/
function creatListItem() {
    for (sec of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href="#${sec.id}" data-nave"${sec.id}" class="menu__link">${sec.dataset.nav}</a>`
        navMenu.appendChild(listItem); 
    }
}
creatListItem();
// Styling for the active states with getBoundingClientRect
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active) {
if (
    active.getBoundingClientRect().top >= -400 &&
    active.getBoundingClientRect().top <= 150 
    ) {
        active.classList.add("your-active-class");
    } else {
        active.classList.remove("your-active-class");
    }});
};
/**
 * End Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll', function(){
    setActiveClass();
});
const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(event){
    scrollToElement(event)
})
// Build menu
buildNavigation()
// Scroll to section on link click

// Set sections as active