import { projects, Project, createSquares, addProjectButton} from "./projects";

function newProject(){
console.log("let's run this shit")
    let area = document.querySelector(".content");
    let topArea = document.querySelector("body");
    area.style.opacity = "30%";
    const inputBox = document.createElement("div");
    inputBox.style.opacity = "100%";
    inputBox.classList.add("inputBox")
    inputBox.style.border = "3px solid black";
    inputBox.style.borderRadius = "5%";
    inputBox.style.backgroundColor = "var(--third-color)"
    inputBox.style.position = "absolute";
    inputBox.style.left = "50%";
    inputBox.style.top = "50%";
    inputBox.style.transform = "translate(-50%,-50%)"
    
    // Create the Form element
    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.classList.add('ProjectInput');
  

    // Create the label element
    const label = document.createElement('label');
    label.setAttribute('for', 'projectName');
    label.textContent = 'Project:';

    // Create the input element
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'projectName');
    input.setAttribute('id', 'projectNameInput');

    // Create the button element
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'submit-project');
    button.textContent = 'Create Project!';
    button.onclick = function() {
        makeProject();
        console.log("muchachos")
    }

    // Append the label, input, and button to the form
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

    inputBox.appendChild(form);

    topArea.appendChild(inputBox);
}


const makeProject = function(event){
        console.log("btn clicked")
        let projectTitle = document.getElementById("projectNameInput").value;
        let newProject = new Project(projectTitle);
        projects.push(newProject);
        document.querySelector(".sideBar").innerHTML = "";
        addProjectButton;
        createSquares(projects);
}

export {newProject, makeProject}