const createProject = (projectName='', projectDesc='') => {
    const name = projectName;
    const desc = projectDesc;
    const taskList = [];
    let taskCount = taskList.length;

    const getCount = () => taskCount;
    const getName = () => name;
    const getDesc = () => desc;
    const getTasks = () => taskList;

    const changeName = (newName) => name = newName ;
    const changeDesc = (newDesc) => desc = newDesc ;

    const addTask = (newTask) => {
        ++taskCount 
        taskList.push(newTask)
    };
    const removeTask = (index) => {
        if (index < taskList.length) {
            taskList.splice(index, 1);
            --taskCount
        }
    }

    return {getCount,getName,getDesc,getTasks,changeName,changeDesc,addTask,removeTask}

}

export default createProject