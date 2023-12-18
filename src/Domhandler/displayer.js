

const DomDisplay = (() =>{
    

    // Clears the current list of tasks, used with project selection
    const clearTask = () => {
        const taskList = document.querySelector('.task-list')
        taskList.innerHTML = '';
    }
    // Clears the note of selected task, called when task is selected
    const clearNote = () => {
        const taskNote = document.querySelector('.note-container')
        taskNote.innerHTML = '';
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
                                        <input type="date" name="dueDate" id="dueDate" value="${task.taskDate}">
                                        <select name="taskPriority" id="taskPriority">
                                                    <option value="low"  ${task.taskPriority === 'low' ? 'selected>low' : '>low'}</option>
                                                    <option value="med"  ${task.taskPriority === 'med' ? 'selected>med' : '>med'}</option>
                                                    <option value="high" ${task.taskPriority === 'high' ? 'selected>high' : '>high'}</option>
                                                </select>
                                                <button class="delete">X</button>
                                            </div>

                                        </div>
                                        <div class="task-right">
                                            <input type="checkbox" name="complete" id="complete ${task.taskComplete = true ? 'selected = true' : 'selected=false'}">
                                        </div>
                                    </fieldset>
                                </form>
                                </section>

                            </div>
        
        `
        taskList.append(li);
    }

    const createNote = (task, id) => {
        const taskNote = document.querySelector('.note-container')
        taskNote.id = "note-"+id
        taskNote.innerHTML = `<section class="task-header">
                <div>
                    <h3 class="project-name">
                        project-name
                    </h3>
                    <h1 class="task-name-big">
                        ${task.taskName}
                    </h1>
                </div>
                <div>
                    <h2 class="due-date">Due <span>${task.taskDate}</span></h2>
                    <h2 >Priority <span class="priority">${task.taskPriority}</span></h2>
                </div>
            </section>
            <section class="task-note">
                <label for="taskDesc">Task Details:</label>
                <textarea name="taskDesc" id="taskDesc" cols="30" value='${task.taskDesc}' rows="10" class="taskdescription">${task.taskDesc}</textarea>
            </section>`
    }

    // Displays the Task details on the right side of the screen, should be activated when task is clicked from the task list
    const taskDisplay = (task, taskID) => {
        clearNote()
        createNote(task, taskID)
        const taskName = document.querySelector('.task-name-big')
        taskName.textContent = task.taskName
        const taskPriority = document.querySelector('.priority')
        taskPriority.textContent = task.taskPriority
        const taskDueDate = document.querySelector('.due-date')
        taskDueDate.textContent = task.taskDate
        const taskDesc = document.querySelector('#taskDesc')
        taskDesc.value = task.taskDesc
        

    }
    
    
    return {createTask, clearTask, taskDisplay, clearNote}
})();


export default DomDisplay