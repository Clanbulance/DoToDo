import { newProject, makeProject} from "./inputs";

/*
This module wil be used to populate the project bar
First we need to create the Add project button
This will act as the s  square.
In case this is clicked, a form will open to create a project
through a prototype/class function 
this object will be added to an array of objects

*/

let projects = [];


function projectsCheck(){
    console.log("projets.js is being loaded")
}
const sideBarArea = document.querySelector(".sideBar");

/* this is the "add project button" */ 
function addProjectButton() {
    console.log("prjbtn step - 1 ")
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
    projectButton.addEventListener("click", ()=>{
        newProject();
    })
    console.log("prjbtn step - 2")
}




/*addeventlistener on button  is in main.js*/

/* class for Projects */
class Project {
    constructor(name,start,tasknumber){
        this.name = name;
        this.start = Date.now();
        this.task = [];
        
    }
    get age(){
        return this.calcAge()
    }
    calcAge(){
        return (Date.now() - this.start)/1000;
    };
}


/*Display a square for every project 
    Send this to the sideBar div which is a grid box*/

function createSquares(array){
    console.log("step 1 --before loop"); 
    console.log(array);
    array.forEach((element) => {
        console.log(`step 2 --in loop`); 
        const sideBarArea = document.querySelector(".sideBar");
        const projectSquare = document.createElement("div");
        projectSquare.classList.add("projectButton");
        projectSquare.style.border = "3px solid black";
        projectSquare.style.borderRadius = "5%";
        projectSquare.style.backgroundColor = "var(--third-color)"
        projectSquare.innerText = `${element.name}`;
        projectSquare.style.justifyContent = "center";
        projectSquare.style.alignItems = "center";
        projectSquare.style.display = "grid";
        sideBarArea.appendChild(projectSquare);
        console.log(`step 3 --finished`); 
    });
};




/*open a form to add different projects*/


export {addProjectButton, projectsCheck, Project, projects, createSquares}; 