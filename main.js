// ELEMENTS
const btnNavToggle = document.querySelector("#btn-42-mobile");
const navBar = document.querySelector("#nav-bar");
const navBackground = document.querySelector("#nav-background");
const navList = document.querySelector("#primary-nav");

/* console.log(btnNavToggle); */
console.log(navBar);

btnNavToggle.addEventListener("click", () => {

    const navBarDisplayed = navBar.getAttribute("displayed");

    if (navBarDisplayed === "on") {
        navBar.setAttribute("displayed", "off");
    } else if (navBarDisplayed === "off" || navBarDisplayed === "initial") {
        navBar.setAttribute("displayed", "on");
    }
    
});


const navPadding = navBar.style.padding;
console.log(navBar.style.paddingTop);


/* navBackground.style.height = navList.clientHeight + "px"; */

