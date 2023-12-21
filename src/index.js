import createTasks from "./Objects/tasks"
import createProject from "./Objects/projects";
import projectHandler from "./Objects/projectHandler";
import storageAvailable from "./Objects/localStorageHandler";
import DomDisplay from "./Domhandler/displayer";
import domInteraction from "./Domhandler/domInteraction";
import './style.css'

// Initialise the Template Project
const task1 = createTasks('Task 1','This is the First Task',new Date(),'low');
const proj = createProject('Project 1', 'This is the default Project');
const allProj = projectHandler()
proj.addTask(task1);
allProj.addProject(proj);

// If Project exists, Load that Project, else, utilise the template project
const storageStatus = storageAvailable('localStorage');
storageStatus && localStorage.getItem('projectData') ? allProj.loadProject(localStorage.getItem('projectData')) : allProj


domInteraction.initialLoad(allProj)
domInteraction.setAllProject(allProj)
domInteraction.projectSelectionOption(allProj)
domInteraction


