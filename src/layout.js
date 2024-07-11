
function layoutConCheck(){
    console.log("layoutcheck is connected");
};



const content = document.querySelector(".content");
/*
our static page content space already has a 4x4 grid assigned to it.
in this layout module we're going to create 3 functions
loadRegularGrid -- this would be the regular one
loadProjectGrid -- this would be when we want to create or watch a new project/book
loadMobileGrid  -- this would be for mobile version. let's skip this for the begining 
*/


function createSideBar(){
    const sideBar = document.createElement("div");
    sideBar.classList.add("sideBar");
    console.log("sideBar created")
    content.appendChild(sideBar);
    sideBar.style.gridArea = "sb"
    sideBar.style.backgroundColor = "var(--fourth-color)"
};  

function createTaskPanel(){
    const taskPanel = document.createElement("div");
    taskPanel.classList.add("taskPanel");
    content.appendChild(taskPanel);
    taskPanel.style.gridArea = "tp";
}

function loadRegularGrid(){
    content.style.gridTemplateAreas = `
    "sb tp tp tp"
    "sb tp tp tp"
    "sb tp tp tp"
    "sb tp tp tp"
    `;
    console.log("Loaded regular grid");
}

function loadProjectGrid(){
    content.style.gridTemplateAreas = `
    "sb sb sb tp"
    "sb sb sb tp"
    "sb sb sb tp"
    "sb sb sb tp"
    `;
    console.log("Loaded Project grid");
}

/*
function loadMobileGrid(){
    content.style.gridTemplateAreas = `
    "sb tp tp tp"
    "sb tp tp tp"
    "sb tp tp tp"
    "sb tp tp tp"
    `
}
    */

export { layoutConCheck, loadRegularGrid, createSideBar, createTaskPanel, loadProjectGrid}