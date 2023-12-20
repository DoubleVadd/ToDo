

const DomDisplay = (() =>{
    
    const dayMonthFormatter = (day, month)=> {
        let thisDay = ''
        let thisMonth = ''
        const allMonth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        switch (day) {
            case 1:
            case 21:
            case 31:
                thisDay = `${day}st`
                break;
            case 2:
            case 22:
                thisDay = `${day}nd`
                break;
            case 3:
            case 23:
                thisDay = `${day}rd`
                break;
            default:
                thisDay = `${day}th`
                break;
        }
        return allMonth[month] +" " + thisDay

    }

    // Clears the current list of tasks, used with project selection
    const clearTask = () => {
        const taskList = document.querySelector('.task-list')
        taskList.innerHTML = '';
    }
    const clearProjectSelection = () => {
        const taskNote = document.querySelector('#ProjectSelection')
        taskNote.innerHTML = '';
    }
    // Clears the note of selected task, called when task is selected
    const clearNote = () => {
        const taskNote = document.querySelector('.note-container')
        taskNote.innerHTML = `<section class="empty-Note"><p>No Task Selected</p></section>`
    }

    const updateHeader = (projectName, projectDescription) => {
        const currentProj = document.querySelector('.project-header .project-name')
        const currentProjDesc = document.querySelector('.project-header .project-description')
        const currentDate = document.querySelector('.project-header .current-date')
        const thisDate = new Date()
        currentProj.textContent = projectName
        currentDate.textContent = `${dayMonthFormatter(thisDate.getDate(),thisDate.getMonth())}` 
        currentProjDesc.textContent = projectDescription
    }

    const createTaskModal = (id) => {
        const modalDialog = document.querySelector('.task-dialog')
        modalDialog.id = `modal-${id}`
        modalDialog.innerHTML = `
            <form action="" class="create-task">
                <legend>Create Task</legend>
                <input type="text" placeholder="Task 1" class="create-title">
                <input type="textarea" placeholder="Description" class="create-desc">
                <select name="taskPriority" id="createTaskPriority">
                    <option value="low" selected>Low</option>
                    <option value="med" >Medium</option>
                    <option value="high" >High</option>
                </select>
                <input type="date" name="dueDate" id="CreateDueDate">
                <button type="button" class="task-create">create</button>

            </form>`
    }

    const createProjectModal = (id) => {
        const modalDialog = document.querySelector('.add-project')
        modalDialog.id = `modalProject-${id}`
        modalDialog.innerHTML = `<form action=""class='create Project'>
        <legend>Create Project</legend>
        <input type="text" placeholder="New Project" class="create-title project-title">
        <input type="text" placeholder="Project Description" class="create-desc project-title">
        <button class="project-create">create</button>
        </form>`

    }

    // Creates the project, best used with iterating through the current exisiting projects.
    const createTask = (task, id) => {
        const taskList = document.querySelector('.task-list')
        const li = document.createElement('li')
        li.id = id
        li.className = 'individualTask'
        li.innerHTML = `
            <div class="task-container">
                <section class="task-item">
                    <form action="" id="task-${id}">
                        <fieldset>
                            <legend class="task-name"></legend>
                                
                                <div class="task-left">
                                    <div>
                                        <input type="text" value="${task.taskName}" class="task-title">
                                    </div>
                                            
                                    <div>
                                        <input type="date" name="dueDate" id="dueDate" value="${task.taskDate.toISOString().split('T')[0]}">
                                        <select name="taskPriority" id="taskPriority">
                                                    <option value="low"  ${task.taskPriority === 'low' ? 'selected>low' : '>low'}</option>
                                                    <option value="med"  ${task.taskPriority === 'med' ? 'selected>med' : '>med'}</option>
                                                    <option value="high" ${task.taskPriority === 'high' ? 'selected>high' : '>high'}</option>
                                                </select>
                                                <button type='button' class="deleteTask">X</button>
                                            </div>

                                        </div>
                                        <div class="task-right">
                                            <input type="checkbox" name="complete" id="complete" ${task.taskComplete == true ? 'Checked' : ''}>
                                        </div>
                                    </fieldset>
                                </form>
                                </section>

                            </div>
        
        `
        taskList.append(li);
    }
    const removeTask = (id) => {
        const li = document.getElementById(`${id}`)
        li.remove()

    }

    const createNote = (task,projectName, id) => {
        const taskNote = document.querySelector('.note-container')
        taskNote.id = "note-"+id
        taskNote.innerHTML = `<section class="task-header">
                <div>
                    <h3 class="project-name">
                        ${projectName}
                    </h3>
                    <h1 class="task-name-big">
                    </h1>
                </div>
                <div>
                    <h2 class="due-date">Due <span>${task.taskDate.getDate()}/${task.taskDate.getMonth()+1}/${task.taskDate.getFullYear()}</span></h2>
                    <h2 >Priority <span class="priority">${task.taskPriority}</span></h2>
                </div>
            </section>
            <section class="task-note">
                <label for="taskDesc">Task Details:</label>
                <textarea name="taskDesc" id="taskDesc" cols="30" value='${task.taskDesc}' rows="10" class="taskdescription">${task.taskDesc}</textarea>
            </section>`
    }

    // Displays the Task details on the right side of the screen, should be activated when task is clicked from the task list
    const taskDisplay = (task,projectName, taskID) => {
        clearNote()
        createNote(task,projectName, taskID)
        const taskName = document.querySelector('.task-name-big')
        taskName.textContent = task.taskName
        const taskPriority = document.querySelector('.priority')
        taskPriority.textContent = task.taskPriority
        const taskDueDate = document.querySelector('.due-date')
        taskDueDate.value = task.taskDate
        const taskDesc = document.querySelector('#taskDesc')
        taskDesc.value = task.taskDesc
        

    }
    
    
    return {createTask,removeTask, clearTask, taskDisplay, clearNote, updateHeader, createTaskModal, clearProjectSelection}
})();


export default DomDisplay