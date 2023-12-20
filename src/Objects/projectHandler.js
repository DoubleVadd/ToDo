// if in local storage load those
import createTasks from "./tasks"
import createProject from "./projects";


const projectHandler = (project=[]) => {
    let currentProjects = project;

    const newProjectHandler = (newData) => currentProjects = newData;

    let projectCount = currentProjects.length;
    const getCount = () => projectCount;
    const setCount = (newCount) =>  projectCount = newCount

    const loadProject = (projectData) => {
        console.log('loading', projectData)
        const newProject = JSON.parse(projectData);
        const processedProject = projectHandler()
        for(const proj in newProject){
            const currentProject = createProject()
            currentProject.importProject(newProject[proj][0])
            for(const task in newProject[proj][1]){
                const currentTask = createTasks()
                currentTask.importTasks(newProject[proj][1][task])
                currentProject.addTask(currentTask);
            }
            processedProject.addProject(currentProject)
        }
        setCount(processedProject.showProject().length)
        newProjectHandler(processedProject.showProject())
    }

    const exportProject = () =>{
        const projectCollections = {}
        currentProjects.forEach((project, projIndex) =>{
        const projectTasks = []
        projectCollections[projIndex] = [project.exportProject(), projectTasks]
        const allTasks = project.getTasks()
        allTasks.forEach((task) => {
            projectCollections[projIndex][1].push(task.exportTask())
        })
        
        })
     return JSON.stringify(projectCollections)
    }

    const showProject = () => currentProjects;

    const addProject = (newProject) => {
        currentProjects.push(newProject)
        ++projectCount
    }
    
    
    const removeProject = (index) => {
        console.log(index)
        console.log( getCount())
        if (index < getCount()) {
            currentProjects.splice(index, 1);
            --projectCount
        }
    }

    return {showProject, addProject, removeProject, loadProject, exportProject, currentProjects}
}

export default projectHandler