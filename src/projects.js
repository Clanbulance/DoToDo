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

/* this is the "add project button" */ 
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

/*addeventlistener on button  is in main.js*/

/* class for Projects */
class Project {
    constructor(name,start,tasknumber){
        this.name = name;
        this.start = Date.now();
        this.task = [];
        this.tasknumber = this.task.length;
    }
    get age(){
        return this.calcAge()
    }
    calcAge(){
        return (Date.now() - this.start)/1000;
    };
}

/*open a form to add different projects*/
function addProject(){

}



export {addProjectButton, projectsCheck, Project}; 