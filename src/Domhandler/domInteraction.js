import projectHandler from "../Objects/projectHandler";
import DomDisplay from "./displayer";

const domInteraction = (() => {
    
    // const allProj = projectHandler
    let ProjectID = 0;
    const getProjectID = () => ProjectID
    const setProjectID = (newID) => ProjectID = newID
    const currentTask = {currentTitle:'',currentDesc:'',currentPriority:'low',currentDate:'',currentCompletion:''}



    // Project selection and updating the tasks visible based on the current selected project
    // Keep track of the current project with setProjectID.
    const projectSelectionOption = (allProj) => {
        const currentProject = document.querySelector('#ProjectSelection');
        // console.log(allProj.showProject())
        allProj.showProject().forEach((project, projIndex) => {
            const thisProject = document.createElement('option')
            thisProject.value = projIndex
            thisProject.textContent = project.getName()
            // console.log(thisProject)
            currentProject.append(thisProject)
            
        });

        currentProject.addEventListener("change", e =>{
            DomDisplay.clearTask()
            setProjectID([e.target.value])
            const selectedProject = allProj.showProject()[e.target.value]
            selectedProject.getTasks().forEach((task, taskIndex) => {
                DomDisplay.createTask(task.getAll(), `${getProjectID()}p${taskIndex}`)
                taskUpdate(task, `${getProjectID()}p${taskIndex}`)
            })            
            taskOpen(allProj.showProject()[e.target.value])
        })
    }

    // Opens the task on the right side of the page
    const taskOpen = (currentProj) => {
        console.log('working')
        const tasks = document.querySelectorAll('.individualTask');
        tasks.forEach( (task, taskIndex) => {
            const taskID = task.id
            const taskInfo = currentProj.getTasks()[taskIndex]
            task.addEventListener('click', e =>{
                console.log(taskID)
                DomDisplay.taskDisplay(taskInfo.getAll(), taskID)
                noteUpdate(taskInfo, taskID)
            })

        })
    }

    const noteUpdate = (currentTask, taskID) => {
        const taskDesc = document.querySelector(`#note-${taskID} #taskDesc`)
        taskDesc.addEventListener('input', e => {
            currentTask.changeDesc(e.target.value)
        })

    }

    const taskUpdate = (currentTask, taskID) => {
        // change for each
        const taskTitle = document.querySelector(`#task-${taskID} .task-title`)
        const taskPriority = document.querySelector(`#task-${taskID} #taskPriority`)
        // const taskDesc = document.querySelector(`#note-${taskID} #taskDesc`)
        taskTitle.addEventListener('input', e => currentTask.changeName(e.target.value))
        
        taskPriority.addEventListener('input', e => currentTask.changePriority(e.target.value))


    }


    // MODALS -------------------------------------------------------//

    const modalOpen = (() => {
        const taskModal = document.querySelector('.task-dialog');
        const taskOpenButton = document.querySelector('.add-task');
        taskOpenButton.addEventListener('click', () =>{
            taskModal.showModal();
            taskModalGet()
        })
    })()
    
    /**
     * Captures input data from create task
     * @returns 
     */
    const taskModalInfo = () =>{
        
        const taskName = document.querySelector('.create-title')
        const taskDesc = document.querySelector('.create-desc')
        const taskPriority = document.querySelector('#createTaskPriority')
        const taskDate = document.querySelector('#CreateDueDate')
        return {taskName:taskName.value,taskDesc:taskDesc.value,taskDate:taskDate.value,taskPriority:taskPriority.value}
    }

    const taskModalGet = (() => {
        const taskModal = document.querySelector('.task-dialog')
        const createButton = document.querySelector('.task-create')
        createButton.addEventListener('click', e => {
            taskModal.close()

            return taskModalInfo()
        }
        )
        }
        )
        
        return {projectSelectionOption}
})();

export default domInteraction;