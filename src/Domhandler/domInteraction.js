import projectHandler from "../Objects/projectHandler";
import DomDisplay from "./displayer";
import createTasks from "../Objects/tasks";
import createProject from "../Objects/projects";

const domInteraction = (() => {
    
    // const allProj = projectHandler
    let ProjectID = 0;
    const getProjectID = () => ProjectID
    const setProjectID = (newID) => ProjectID = newID

    let globalProject = ''
    const setAllProject = (allProj) => globalProject = allProj
    const getAllProject = () => globalProject

    
    const save = () => {
        localStorage.setItem('projectData', getAllProject().exportProject()) 
        // console.log('saved to storage')
        // console.log(localStorage.getItem('projectData'))
    }
    
    const currentTask = {currentTitle:'',currentDesc:'',currentPriority:'low',currentDate:'',currentCompletion:''}

    const initialLoad = (allProj) => {
        document.addEventListener("DOMContentLoaded", () => {
            console.log("DOM fully loaded and parsed");
            DomDisplay.createTaskModal(`0`)
            projectSelectionRender(allProj.showProject()[0], 0)
            taskModalOpen(allProj.showProject()[0], `0`)

        });
    }

    // Project selection and updating the tasks visible based on the current selected project
    // Keep track of the current project with setProjectID.
    const projectSelectionOption = (allProj) => {
        const currentProject = document.querySelector('#ProjectSelection');
        // console.log(allProj.showProject())
        projectModalOpen(allProj)
        changeSelection(allProj, currentProject)

        currentProject.addEventListener("change", e =>{
            const selectedProject = allProj.showProject()[e.target.value]
            DomDisplay.createTaskModal(`${getProjectID()}`)
            projectSelectionRender(selectedProject, e.target.value)
            taskModalOpen(selectedProject, `${getProjectID()}`)
        })
    }

    const changeSelection = (allProj, currentProject) => {
        DomDisplay.clearProjectSelection()
        allProj.showProject().forEach((project, projIndex) => {
            const thisProject = document.createElement('option')
            thisProject.value = projIndex
            thisProject.textContent = project.getName()
            // console.log(thisProject)
            currentProject.append(thisProject)
            
        });
    }

    const projectSelectionRender = (selectedProject, projectID) => {
        DomDisplay.clearTask()
        setProjectID([projectID])
        // projectDeleteModalOpen()
        DomDisplay.updateHeader(selectedProject.getName(), selectedProject.getDesc())
        selectedProject.getTasks().forEach((task, taskIndex) => {
            DomDisplay.createTask(task.getAll(), `${getProjectID()}p${taskIndex}`)
            taskUpdate(selectedProject, task, `${getProjectID()}p${taskIndex}`, taskIndex)
        })
        taskOpen(selectedProject)                   
        }

    // Opens the task on the right side of the page
    const taskOpen = (currentProj) => {
        const tasks = document.querySelectorAll('.individualTask');
        tasks.forEach( (task, taskIndex) => {
            const taskID = `${getProjectID()}p${taskIndex}`
            const taskInfo = currentProj.getTasks()[taskIndex]
            const DeleteBtn = document.querySelector(`#task-${taskID} .deleteTask`)

            
            task.addEventListener('click', e =>{
                DomDisplay.taskDisplay(taskInfo.getAll(),currentProj.getName(),taskID)
                noteUpdate(taskInfo, taskID)
                
            })

        })
    }

    const noteUpdate = (currentTask, taskID) => {
        const taskDesc = document.querySelector(`#note-${taskID} #taskDesc`)
        if (taskDesc) {
            taskDesc.addEventListener('input', e => {
                currentTask.changeDesc(e.target.value)
            })
        } else {
            DomDisplay.clearNote()
        }

    }

    const taskUpdate = (selectedProject, currentTask, taskID, taskIndex) => {
        // change for each
        const taskTitle = document.querySelector(`#task-${taskID} .task-title`)
        const taskPriority = document.querySelector(`#task-${taskID} #taskPriority`)
        const taskComplete = document.querySelector(`#task-${taskID} #complete`)
        const taskDate = document.querySelector(`#task-${taskID} #dueDate`)
        const DeleteBtn = document.querySelector(`#task-${taskID} .deleteTask`)
        // const taskDesc = document.querySelector(`#note-${taskID} #taskDesc`)
        taskTitle.addEventListener('input', e => currentTask.changeName(e.target.value))
        taskComplete.addEventListener('input', e=> currentTask.changeCompletion())
        taskPriority.addEventListener('input', e => currentTask.changePriority(e.target.value))
        taskDate.addEventListener('input', e => currentTask.changeDate(e.target.value))
        DeleteBtn.addEventListener('click', e => {
            // console.log(taskIndex)
            DomDisplay.removeTask(taskID)
            selectedProject.removeTask(taskIndex)
            
        }) 

    }


    // MODALS -------------------------------------------------------//

    const taskModalOpen = (thisProj, id) => {
        const taskModal = document.querySelector('.task-dialog');
        const createButton = document.querySelector('.task-create')
        const taskOpenButton = document.querySelector('.add-task');
        const taskForm = document.querySelector('form.create-task')
        const newTaskModal = taskModalGet(thisProj, id, taskModal, createButton)
        taskOpenButton.addEventListener('click', () =>{
            taskForm.reset()
            taskModal.showModal();
            newTaskModal
        })
        
    }

    const projectModalOpen = (allProj) => {
        const currentProject = document.querySelector('#ProjectSelection');
        const projectModal = document.querySelector('.project-dialog');
        const createButton = document.querySelector('.project-create')
        const projectOpenButton = document.querySelector('.add-project');
        const newProjectModal = projectModalGet(allProj, currentProject, projectModal, createButton)
        projectOpenButton.addEventListener('click', () =>{
            projectModal.showModal();
            newProjectModal
            
        })
        
    }

    

    const projectDeleteModal = ((currentProject, projectModal) => {
        const deleteButton = document.querySelector('.project-delete')
        const ignoreButton = document.querySelector('.ignore-delete')
        deleteButton.addEventListener('click', e => {
            getAllProject().removeProject(getProjectID())
            changeSelection(getAllProject(), currentProject)
            projectModal.close()
            save()  
        })
        ignoreButton.addEventListener('click', e => {
            projectModal.close()
        })

    })

    const projectDeleteModalOpen = (() => {
        const currentProject = document.querySelector('#ProjectSelection');
        const deleteModal = document.querySelector('.project-delete-dialog');
        const projectOpenButton = document.querySelector('.delete-this-project');
        const deleteProjectModal = projectDeleteModal(currentProject, deleteModal)
        projectOpenButton.addEventListener('click', () =>{
            deleteModal.showModal();
            deleteProjectModal
            
        })

    })()

    const taskModalGet = ((thisProj, id, taskModal, createButton) => {
        createButton.addEventListener('click', e => {
            // console.log(e, createButton)
            const taskInfo = taskModalInfo()
            const newTask = createTasks(taskInfo.Name, taskInfo.desc, new Date(taskInfo.date), taskInfo.priority, taskInfo.complete)
            thisProj.addTask(newTask)
            projectSelectionRender(thisProj, id)

            taskModal.close()
            save()     
        })
    })

    const projectModalGet = ((allProj,currentProject, projectModal, createButton) => {
        createButton.addEventListener('click', e => {
            const projectInfo = projectModalInfo()
            const newProject = createProject(projectInfo.Name, projectInfo.desc)
            allProj.addProject(newProject)
            changeSelection(allProj, currentProject)
            projectModal.close()
            save()  
        })
    })
    
    const projectModalInfo = () =>{
        const projectName = document.querySelector('.create-title.project-title')
        const projectDesc = document.querySelector('.create-desc.project-title')
        return {Name:projectName.value, desc:projectDesc.value}
    }
    const taskModalInfo = () =>{
        
        const taskName = document.querySelector('.create-title')
        const taskDesc = document.querySelector('.create-desc')
        const taskPriority = document.querySelector('#createTaskPriority')
        const taskDate = document.querySelector('#CreateDueDate')
        // const taskComplete = document.querySelector('#complete')
        // Name?: string, desc?: string, date?: Date, priority?: string, complete?: boolean
        // return taskName.value, taskDesc.value, taskDate.value, taskPriority.value, complete:taskComplete.checked
        return {Name:taskName.value,
            desc:taskDesc.value,
            date:taskDate.value || new Date(),
            priority:taskPriority.value, 
            // complete:taskComplete.checked
        }
    }
    const  periodicSave = window.setInterval(function(){
        save()
      }, 5000);

        
        return {projectSelectionOption, initialLoad, setAllProject}
})();

export default domInteraction;
