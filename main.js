// ELEMENTS
const btnNavToggle = document.getElementById("btn-42-mobile");
const navBar = document.getElementById("nav-bar");
const navBackground = document.getElementById("nav-background");
const navList = document.getElementById("primary-nav");

/* console.log(btnNavToggle); */
/* console.log(navBar); */

btnNavToggle.addEventListener("click", () => {

    const navBarDisplayed = navBar.getAttribute("displayed");

    if (navBarDisplayed === "on") {
        navBar.setAttribute("displayed", "off");
    } else if (navBarDisplayed === "off") {
        navBar.setAttribute("displayed", "on");
    }
    
});


const navPadding = navBar.style.padding;
/* console.log(navBar.style.paddingTop);
 */

/* navBackground.style.height = navList.clientHeight + "px"; */



const header = document.getElementById("header");

navBar.addEventListener("mouseover", () => {
    let navExpanded = navBar.getAttribute("nav-expanded");
    /* console.log(navExpanded); */
    
    if (navExpanded === "off") {
        navBar.setAttribute("nav-expanded", "on");
    }
})

navBar.addEventListener("mouseleave", () => {
    let navExpanded = navBar.getAttribute("nav-expanded");
    navBar.setAttribute("nav-expanded", "off");

})

document.addEventListener("click", (e) => {
    if (e.target.id !== "nav-bar" && e.target.id !== "btn-42-mobile") {
        const navBarDisplayed = navBar.getAttribute("displayed");
        if (navBarDisplayed === "on") {
            navBar.setAttribute("displayed", "off");
        }
    }
})