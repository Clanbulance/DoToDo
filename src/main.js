// this is going to be the main js module to start loading things
import {layoutConCheck, loadRegularGrid, createSideBar, createTaskPanel, loadProjectGrid} from "./layout";
import "./style.css";


layoutConCheck();
createSideBar()
createTaskPanel();
loadRegularGrid();


const sidebar = document.querySelector(".sideBar");
sidebar.addEventListener("click", loadProjectGrid);
sidebar.addEventListener("mouseout", loadRegularGrid);








console.log("main.js is being loaded");
 