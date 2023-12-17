import createTasks from "./Objects/tasks"
import createProject from "./Objects/projects";
import projectHandler from "./Objects/projectHandler";
import storageAvailable from "./Objects/localStorageHandler";

const task1 = createTasks('cool');
const task2 = createTasks('superb');
const task3 = createTasks('tragic');
const task5 = createTasks('eternal')
const task4 = createTasks('doom')
const proj = createProject('coolest');
const proj2 = createProject('uncooler')
const allProj = projectHandler()
const storageStatus = storageAvailable('localStorage');

proj.addTask(task1);
proj.addTask(task2);
proj.addTask(task3);
proj2.addTask(task4);
proj2.addTask(task5);
// window.proj = proj;
allProj.addProject(proj);
allProj.addProject(proj2)


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

console.log(allProj)


