// this is going to be the main js module to start loading things
import {layoutConCheck, loadRegularGrid, createSideBar, createTaskPanel, loadMobileGrid} from "./layout";
import {addProjectButton, projectsCheck, Project, projects, createSquares} from "./projects";
import {newProject } from "./inputs";
import {taskCheck} from "./tasks"
import "./style.css";

console.log("main.js is being loaded");
layoutConCheck() 
projectsCheck() 
taskCheck() 
createSideBar() 
createTaskPanel()
loadRegularGrid();
addProjectButton();


// This is making the sidebar responding to projects or to tasks

const sidebar = document.querySelector(".sideBar");


createSquares(projects);

const ProjectButton = document.querySelectorAll(".projectButton");

ProjectButton.forEach((elem) => elem.addEventListener("click", (e) => {
    console.log(`${e.currentTarget.classList} is clicked`);
})
); 

window.addEventListener('resize', function(){
    if(window.innerWidth < 520){
        loadMobileGrid();
        console.log("screen smoll")
    } else {
        loadRegularGrid();
    }
});
