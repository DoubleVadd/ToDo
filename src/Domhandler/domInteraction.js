const domInteraction = (() => {
    const taskModal =() =>{
        // <input type="text" placeholder="Task 1" class="create-title">
        //         <input type="textarea" placeholder="Description" class="create-desc">
        //         <select name="taskPriority" id="taskPriority">
        //             <option value="low" selected>Low</option>
        //             <option value="med" >Medium</option>
        //             <option value="high" >High</option>
        //         </select>
        //         <input type="date" name="dueDate" id="CreateDueDate">
        //         <button type="button" class="task-create">create</button>
        const createButton = document.querySelector('.task-create')
        const taskName = document.querySelector('.create-title')
        const taskDesc = document.querySelector('.create-desc')
        const taskDate = document.querySelector('#createTaskPriority')
        const taskPriority = document.querySelector('#CreateDueDate')

        createButton.addEventListener('click', e => {
            return {taskName,taskDesc,taskDate,taskPriority}
        })


        return
    }
    return {taskModal}
})();

export default domInteraction;
