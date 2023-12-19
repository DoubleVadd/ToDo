import projectHandler from "../Objects/projectHandler";
import DomDisplay from "./displayer";
import createTasks from "../Objects/tasks";

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
            const selectedProject = allProj.showProject()[e.target.value]
            DomDisplay.createTaskModal(`${getProjectID()}`)
            projectSelectionRender(selectedProject, e.target.value)
            modalOpen(selectedProject, `${getProjectID()}`)
        })
    }

    const projectSelectionRender = (selectedProject, projectID) => {
        DomDisplay.clearTask()
        setProjectID([projectID])
        DomDisplay.updateHeader(selectedProject.getName())
        selectedProject.getTasks().forEach((task, taskIndex) => {
            DomDisplay.createTask(task.getAll(), `${getProjectID()}p${taskIndex}`)
            taskUpdate(task, `${getProjectID()}p${taskIndex}`)
        })
        taskOpen(selectedProject)                   
        }

    // Opens the task on the right side of the page
    const taskOpen = (currentProj) => {
        const tasks = document.querySelectorAll('.individualTask');
        tasks.forEach( (task, taskIndex) => {
            const taskID = task.id
            const taskInfo = currentProj.getTasks()[taskIndex]
            task.addEventListener('click', e =>{
                DomDisplay.taskDisplay(taskInfo.getAll(),currentProj.getName(), taskID)
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
        const taskComplete = document.querySelector(`#task-${taskID} #complete`)
        const taskDate = document.querySelector(`#task-${taskID} #dueDate`)
        // const taskDesc = document.querySelector(`#note-${taskID} #taskDesc`)
        taskTitle.addEventListener('input', e => currentTask.changeName(e.target.value))
        taskComplete.addEventListener('input', e=> currentTask.changeCompletion())
        taskPriority.addEventListener('input', e => currentTask.changePriority(e.target.value))
        taskDate.addEventListener('input', e => currentTask.changeDate(e.target.value))


    }


    // MODALS -------------------------------------------------------//

    const modalOpen = (thisProj, id) => {
        const taskModal = document.querySelector('.task-dialog');
        const createButton = document.querySelector('.task-create')
        const taskOpenButton = document.querySelector('.add-task');
        const newTaskModal = taskModalGet(thisProj, id, taskModal, createButton)
        taskOpenButton.addEventListener('click', () =>{
            taskModal.showModal();
            newTaskModal
        })
        
    }

    const taskModalGet = ((thisProj, id, taskModal, createButton) => {
        console.log('b')
        createButton.addEventListener('click', e => {
            console.log(e, createButton)
            const taskInfo = taskModalInfo()
            const newTask = createTasks(taskInfo.Name, taskInfo.desc, new Date(taskInfo.date), taskInfo.priority, taskInfo.complete)
            thisProj.addTask(newTask)
            projectSelectionRender(thisProj, id)

            taskModal.close()       
        })
    })
    
    /**
     * Captures input data from create task
     * @returns 
     */
    const taskModalInfo = () =>{
        
        const taskName = document.querySelector('.create-title')
        const taskDesc = document.querySelector('.create-desc')
        const taskPriority = document.querySelector('#createTaskPriority')
        const taskDate = document.querySelector('#CreateDueDate')
        const taskComplete = document.querySelector('#complete')
        // Name?: string, desc?: string, date?: Date, priority?: string, complete?: boolean
        // return taskName.value, taskDesc.value, taskDate.value, taskPriority.value, complete:taskComplete.checked
        return {Name:taskName.value,
            desc:taskDesc.value,
            date:taskDate.value || new Date(),
            priority:taskPriority.value, 
            complete:taskComplete.checked
        }
    }


        
        return {projectSelectionOption}
})();

export default domInteraction;
