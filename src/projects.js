/*
This module wil be used to populate the project bar
First we need to create the Add project button
This will act as the s  square.
In case this is clicked, a form will open to create a project
through a prototype/class function 
this object will be added to an array of objects

*/




function projectsCheck(){
    console.log("projets.js is being loaded")
}
const sideBarArea = document.querySelector(".sideBar");

function addProjectButton() {
    const sideBarArea = document.querySelector(".sideBar");
    const projectButton = document.createElement("div");
    projectButton.classList.add("projectButton");
    projectButton.style.border = "3px solid black";
    projectButton.style.borderRadius = "5%";
    projectButton.style.backgroundColor = "var(--third-color)"
    projectButton.innerText = "Add Project";
    projectButton.style.justifyContent = "center";
    projectButton.style.alignItems = "center";
    projectButton.style.display = "grid";
    sideBarArea.appendChild(projectButton);
}


export {addProjectButton, projectsCheck}; 