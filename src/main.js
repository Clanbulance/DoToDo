// this is going to be the main js module to start loading things
import {layoutConCheck, loadRegularGrid, createSideBar, createTaskPanel, loadProjectGrid} from "./layout";
import {addProjectButton, projectsCheck} from "./projects";
import "./style.css";


layoutConCheck();
projectsCheck(); 
createSideBar()
createTaskPanel();
loadRegularGrid();
addProjectButton();


// This is making the sidebar responding to projects or to tasks

const sidebar = document.querySelector(".sideBar");
sidebar.addEventListener("click", loadProjectGrid);
sidebar.addEventListener("mouseout", loadRegularGrid);










console.log("main.js is being loaded");
 