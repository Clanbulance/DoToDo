// this is going to be the main js module to start loading things
import {layoutConCheck, loadRegularGrid, createSideBar, createTaskPanel, loadProjectGrid} from "./layout";
import {addProjectButton, projectsCheck, Project, projects, createSquares} from "./projects";
import "./style.css";

console.log("main.js is being loaded");
layoutConCheck();
projectsCheck(); 
createSideBar()
createTaskPanel();
loadRegularGrid();
addProjectButton();


// This is making the sidebar responding to projects or to tasks

const sidebar = document.querySelector(".sideBar");
const ProjectButton = document.querySelector(".projectButton");
sidebar.addEventListener("click", loadProjectGrid, true);
sidebar.addEventListener("mouseleave",loadRegularGrid);
ProjectButton.addEventListener("click", (e) => {
    console.log(`${e.currentTarget.classList} is clicked`);
}); 


let test = "banana"
const checksome = new Project("Network");
projects.push(checksome);

checksome.task.push({id: "task1", descritption: "do this"},{id: "task2", descritption: "do that"});

createSquares(projects);






 