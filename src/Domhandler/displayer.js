const DomDisplay = () =>{
    const createTask = (task, id) => {
        const taskList = document.querySelector('.task-list')
        const li = document.createElement('li')
        li.id = id
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
    
    return {createTask}
}

export default DomDisplay