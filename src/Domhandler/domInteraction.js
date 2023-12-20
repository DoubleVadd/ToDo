import projectHandler from "../Objects/projectHandler";
import DomDisplay from "./displayer";
import createTasks from "../Objects/tasks";
import createProject from "../Objects/projects";

const domInteraction = (() => {
    
    // The Current Project Identifier given list of Projects, managed through index
    let ProjectID = 0;
    const getProjectID = () => ProjectID
    const setProjectID = (newID) => ProjectID = newID

    // The current Project handler, Needs to be initialised when the function first runs to function properly
    let globalProject = ''
    const setAllProject = (allProj) => globalProject = allProj
    const getAllProject = () => globalProject

    // Saving functionality, Runs every 5 seconds
    const save = () => {
        localStorage.setItem('projectData', getAllProject().exportProject()) 
    }
    // Determines the saving duration
    const  periodicSave = window.setInterval(function(){
        save()
      }, 5000);
    
    
    // On the initial load, set it up with the first chosen project, should be changed to last saved project down the line
    const initialLoad = () => {
        document.addEventListener("DOMContentLoaded", () => {
            console.log("DOM fully loaded and parsed");
            DomDisplay.createTaskModal(`0`)
            projectSelectionRender(getAllProject().showProject()[0], 0)
            taskModalOpen(getAllProject().showProject()[0], `0`)

        });
    }

    // Project selection and updating the tasks visible based on the current selected project
    // Keep track of the current project with setProjectID.
    const projectSelectionOption = () => {
        const currentProject = document.querySelector('#ProjectSelection');
        projectModalOpen()
        renderProjectOptions( currentProject)
        displayProjectTasks( currentProject)
    }

    // On dropdown change, reRender the Task Lists
    const displayProjectTasks = ( currentProject) =>{
        currentProject.addEventListener("change", e =>{
            const selectedProject = getAllProject().showProject()[e.target.value]
            DomDisplay.createTaskModal(`${getProjectID()}`)
            projectSelectionRender(selectedProject, e.target.value)
            taskModalOpen(selectedProject, `${getProjectID()}`)
        })
    }

    // Render the dropdown menu containing all projects we currently have access to
    const renderProjectOptions = ( currentProject) => {
        DomDisplay.clearProjectSelection()
        getAllProject().showProject().forEach((project, projIndex) => {
            const thisProject = document.createElement('option')
            thisProject.value = projIndex
            thisProject.textContent = project.getName()
            currentProject.append(thisProject)
        });
    }

    // Render the Page for the currently Selected Project given the project Object and project Id, set the Global Project ID
    const projectSelectionRender = (selectedProject, projectID) => {
        DomDisplay.clearTask()
        setProjectID(projectID)
        // If the project does not give Null
        if (selectedProject){
            DomDisplay.selectedProjectOption(projectID)
            DomDisplay.updateHeader(selectedProject.getName(), selectedProject.getDesc())
            selectedProject.getTasks().forEach((task, taskIndex) => {
                DomDisplay.createTask(task.getAll(), `${getProjectID()}p${taskIndex}`)
                taskUpdate(selectedProject, task, `${getProjectID()}p${taskIndex}`, taskIndex)
            })
            taskOpen(selectedProject)    
        }               
        }

    // Opens the Expanded view of the Project, show list of tasks
    const taskOpen = (currentProj) => {
        const tasks = document.querySelectorAll('.individualTask');
        tasks.forEach( (task, taskIndex) => {
            const taskID = `${getProjectID()}p${taskIndex}`
            const taskInfo = currentProj.getTasks()[taskIndex]
            // for each of the tasks, expand on click, showing the task information




            task.addEventListener('click', e =>{
                DomDisplay.taskDisplay(taskInfo.getAll(),currentProj.getName(),taskID)
                noteUpdate(taskInfo, taskID)
                if (e.target.className == `deleteTask`){
                    DomDisplay.removeTask(taskID)
                    currentProj.removeTask(taskIndex)
                    DomDisplay.taskDisplay()
                }

            })

            

        })
    }
    // Create an expanded note for each task and save the changed values
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

    // Save any changes to the individual task inputs, and delete tasks with a button click
    const taskUpdate = (selectedProject, currentTask, taskID, taskIndex) => {
        // change for each
        const taskTitle = document.querySelector(`#task-${taskID} .task-title`)
        const taskPriority = document.querySelector(`#task-${taskID} #taskPriority`)
        const taskComplete = document.querySelector(`#task-${taskID} #complete`)
        const taskDate = document.querySelector(`#task-${taskID} #dueDate`)
        
        // const taskDesc = document.querySelector(`#note-${taskID} #taskDesc`)
        taskTitle.addEventListener('input', e => currentTask.changeName(e.target.value))
        taskComplete.addEventListener('input', e=> currentTask.changeCompletion())
        taskPriority.addEventListener('input', e => currentTask.changePriority(e.target.value))
        taskDate.addEventListener('input', e => currentTask.changeDate(e.target.value))

        // const DeleteBtn = document.querySelector(`#task-${taskID} .deleteTask`)
        // DeleteBtn.addEventListener('click', e => {
        //     // console.log(taskIndex)
        //     DomDisplay.removeTask(taskID)
        //     selectedProject.removeTask(taskIndex)
        //     DomDisplay.taskDisplay()    
        // }) 

    }


    // MODALS -------------------------------------------------------//

    // Add task Modal to create new tasks for the current project
    const taskModalOpen = (thisProj, id) => {
        const taskModal = document.querySelector('.task-dialog');
        const createButton = document.querySelector('.task-create')
        const taskOpenButton = document.querySelector('.add-task');
        const taskForm = document.querySelector('form.create-task')
        
        if(thisProj && getAllProject().getCount()){
            const newTaskModal = taskModalGet(thisProj, id, taskModal, createButton)
            taskOpenButton.addEventListener('click', () =>{
                taskForm.reset()
                taskModal.showModal();
                newTaskModal
            })
        }
        
        
    }

    // Add project modal, create new project, and set it as current project, refresh the page
    const projectModalOpen = () => {
        const projectModal = document.querySelector('.project-dialog');
        const createButton = document.querySelector('.project-create')
        const projectOpenButton = document.querySelector('.add-project');
        const newProjectModal = projectModalGet(projectModal, createButton)
        projectOpenButton.addEventListener('click', () =>{
            projectModal.showModal();
            newProjectModal
            
        })
        
    }

    

    // Modal For Deleting the current selected Project
    const projectDeleteModal = ((currentProject, projectModal) => {
        const deleteButton = document.querySelector('.project-delete')
        const ignoreButton = document.querySelector('.ignore-delete')
        // On Delete, Refresh the page into the first Project that Exists, and reset the Notes
        deleteButton.addEventListener('click', e => {
            if(getAllProject().getCount()>1){
                getAllProject().removeProject(getProjectID())
                setProjectID(0)
                renderProjectOptions( currentProject)
                displayProjectTasks( currentProject)
                if(getAllProject().showProject()[0]){
                    projectSelectionRender(getAllProject().showProject()[0], 0)
                }
                DomDisplay.clearNote()
            }else{
                alert('There Must be Minimum of 1 Project')
            }
            

            
            projectModal.close()
            save()  
        })
        ignoreButton.addEventListener('click', e => {
            projectModal.close()
        })

    })

    // Opening a delete model for the project on button click
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

    // Create the task and add it to the current project, rerender the page
    const taskModalGet = ((thisProj, id, taskModal, createButton) => {
        createButton.addEventListener('click', e => {
            const taskInfo = taskModalInfo()
            const newTask = createTasks(taskInfo.Name, taskInfo.desc, new Date(taskInfo.date), taskInfo.priority, taskInfo.complete)
            thisProj.addTask(newTask)
            projectSelectionRender(thisProj, id)

            taskModal.close()
            save()     
        })
    })

    // Create a New project set it
    const projectModalGet = ((projectModal, createButton) => {
        createButton.addEventListener('click', e => {
            const projectInfo = projectModalInfo()
            const newProject = createProject(projectInfo.Name, projectInfo.desc)
            

            getAllProject().addProject(newProject)
            setProjectID(getAllProject().getCount()-1)
            DomDisplay.createTaskModal(getAllProject().getCount()-1)
            taskModalOpen(newProject, getAllProject().getCount()-1)

            const currentProject = document.querySelector('#ProjectSelection');
            renderProjectOptions( currentProject)
            displayProjectTasks( currentProject)

            projectSelectionRender(newProject, getAllProject().getCount()-1)


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
        
        return {projectSelectionOption, initialLoad, setAllProject}
})();

export default domInteraction;
