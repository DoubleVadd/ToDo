import createTasks from "./Objects/tasks"
import createProject from "./Objects/projects";
import projectHandler from "./Objects/projectHandler";
import storageAvailable from "./Objects/localStorageHandler";
import DomDisplay from "./Domhandler/displayer";
import domInteraction from "./Domhandler/domInteraction";

const task1 = createTasks('cool','Coolest everest man',new Date(),'med',true);
const task2 = createTasks('Cool2', 'cool wamen')
const task3 = createTasks('sad')
const proj2 = createProject('saddest')
const proj = createProject('coolest');
const allProj = projectHandler()
const storageStatus = storageAvailable('localStorage');

proj.addTask(task1);
proj.addTask(task2);
proj2.addTask(task3)
allProj.addProject(proj);
allProj.addProject(proj2);


if (storageStatus && localStorage.getItem('projectData')){
    allProj.loadProject(localStorage.getItem('projectData'))
    console.log('loaded')
} else{
    console.log('No Storage Found')
}

if (storageStatus){
    // console.log(allProj)
    localStorage.setItem('projectData',allProj.exportProject())
    console.log('saved to storage')
}

storageStatus ? allProj.loadProject(localStorage.getItem('projectData')) : allProj


domInteraction.initialLoad(allProj)
domInteraction.projectSelectionOption(allProj)
domInteraction



