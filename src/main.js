// this is going to be the main js module to start loading things
import {layoutConCheck, loadRegularGrid, createSideBar, createTaskPanel} from "./layout";

import "./style.css";

layoutConCheck();
createSideBar()
createTaskPanel();
loadRegularGrid();




console.log("main.js is being loaded");
 