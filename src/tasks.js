import {addProjectButton, projectsCheck, Project, projects, createSquares} from "./projects";



function taskCheck(){
    console.log("task.js is being loaded")
}
// class for tasks
class Task {
    constructor(name,start,tasknumber){
        this.name = name;
        this.start = Date.now();
        
    }
    get age(){
        return this.calcAge()
    }
    calcAge(){
        return (Date.now() - this.start)/1000;
    };
}




export {taskCheck}