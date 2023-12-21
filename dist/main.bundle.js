/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Domhandler/displayer.js":
/*!*************************************!*\
  !*** ./src/Domhandler/displayer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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
    
    // DomDisplay.selectedProjectOption(projectID)
    const selectedProjectOption = (projectID) => {
        // alert(projectID)
        const taskNote = document.querySelector('#ProjectSelection')
        // console.log('current projectIndex', projectID)
        taskNote.value = projectID
        // console.log(projectID)
        // console.log(taskNote)

    }


    // Clears the note of selected task, called when task is selected
    const clearNote = () => {
        const taskNote = document.querySelector('.note-container')
        const activeTask = document.querySelector('.activeTask')
        console.log(activeTask)
        if(activeTask){
            activeTask.classList.remove('activeTask')
        }
        

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
                                                <input type="checkbox" name="complete" id="complete" ${task.taskComplete == true ? 'Checked' : ''}>
                                            </div>

                                        </div>
                                        <div class="task-right">
                                            
                                            <button type='button' class="deleteTask">Delete</button>
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
        const taskActive = document.querySelector(`#task-${id} .task-left`)
        taskActive.classList.toggle('activeTask')
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
        if (task && projectName && taskID){
            createNote(task,projectName, taskID)
            const taskName = document.querySelector('.task-name-big')
            taskName.textContent = task.taskName
            const taskPriority = document.querySelector('.priority')
            taskPriority.textContent = task.taskPriority
            const taskDueDate = document.querySelector('.due-date')
            taskDueDate.value = task.taskDate
            const taskDesc = document.querySelector('#taskDesc')
            taskDesc.value = task.taskDesc
        } else {
            clearNote()
        }

    }
    
    
    return {createTask,removeTask, clearTask, taskDisplay, clearNote, updateHeader, createTaskModal, clearProjectSelection, selectedProjectOption}
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomDisplay);

/***/ }),

/***/ "./src/Domhandler/domInteraction.js":
/*!******************************************!*\
  !*** ./src/Domhandler/domInteraction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Objects_projectHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objects/projectHandler */ "./src/Objects/projectHandler.js");
/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayer */ "./src/Domhandler/displayer.js");
/* harmony import */ var _Objects_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Objects/tasks */ "./src/Objects/tasks.js");
/* harmony import */ var _Objects_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Objects/projects */ "./src/Objects/projects.js");





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
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTaskModal(`0`)
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
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTaskModal(`${getProjectID()}`)
            projectSelectionRender(selectedProject, e.target.value)
            taskModalOpen(selectedProject, `${getProjectID()}`)
        })
    }

    // Render the dropdown menu containing all projects we currently have access to
    const renderProjectOptions = ( currentProject) => {
        _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].clearProjectSelection()
        getAllProject().showProject().forEach((project, projIndex) => {
            const thisProject = document.createElement('option')
            thisProject.value = projIndex
            thisProject.textContent = project.getName()
            currentProject.append(thisProject)
        });
    }

    // Render the Page for the currently Selected Project given the project Object and project Id, set the Global Project ID
    const projectSelectionRender = (selectedProject, projectID) => {
        _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].clearTask()
        setProjectID(projectID)
        // If the project does not give Null
        if (selectedProject){
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].selectedProjectOption(projectID)
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].updateHeader(selectedProject.getName(), selectedProject.getDesc())
            selectedProject.getTasks().forEach((task, taskIndex) => {
                _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(task.getAll(), `${getProjectID()}p${taskIndex}`)
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
                _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].taskDisplay(taskInfo.getAll(),currentProj.getName(),taskID)
                noteUpdate(taskInfo, taskID)
                if (e.target.className == `deleteTask`){
                    _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].removeTask(taskID)
                    currentProj.removeTask(taskIndex)
                    _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].taskDisplay()
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
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].clearNote()
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
                _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].clearNote()
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
            const newTask = (0,_Objects_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(taskInfo.Name, taskInfo.desc, new Date(taskInfo.date), taskInfo.priority, taskInfo.complete)
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
            const newProject = (0,_Objects_projects__WEBPACK_IMPORTED_MODULE_3__["default"])(projectInfo.Name, projectInfo.desc)
            

            getAllProject().addProject(newProject)
            setProjectID(getAllProject().getCount()-1)
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTaskModal(getAllProject().getCount()-1)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domInteraction);


/***/ }),

/***/ "./src/Objects/localStorageHandler.js":
/*!********************************************!*\
  !*** ./src/Objects/localStorageHandler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageAvailable);
  

/***/ }),

/***/ "./src/Objects/projectHandler.js":
/*!***************************************!*\
  !*** ./src/Objects/projectHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/Objects/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/Objects/projects.js");
// if in local storage load those




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
            const currentProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__["default"])()
            currentProject.importProject(newProject[proj][0])
            for(const task in newProject[proj][1]){
                const currentTask = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])()
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
        // console.log(index)
        // console.log( getCount())
        if (index < getCount()) {
            currentProjects.splice(index, 1);
            --projectCount
        }
    }

    return {showProject, addProject, removeProject, loadProject, exportProject, currentProjects, getCount}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectHandler);

/***/ }),

/***/ "./src/Objects/projects.js":
/*!*********************************!*\
  !*** ./src/Objects/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createProject = (projectName='', projectDesc='') => {
    let name = projectName;
    let desc = projectDesc;
    let taskList = [];
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
        if (index < getCount()) {
            taskList.splice(index, 1);
            --taskCount
        }
    }

    const importProject = (taskProject) => {
        taskProject = JSON.parse(taskProject);
        name = taskProject.name;
        desc = taskProject.desc;
    }

    const exportProject = () => {
        let all = {name,desc}
        return JSON.stringify(all)
    }




    return {getCount,getName,getDesc,getTasks,changeName,changeDesc,addTask,removeTask,importProject,exportProject}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

/***/ }),

/***/ "./src/Objects/tasks.js":
/*!******************************!*\
  !*** ./src/Objects/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTasks = (Name='',desc='',date=new Date(),priority='low',complete=false) => {
    let taskName = Name;
    let taskDesc = desc;
    let taskDate = date;
    let taskPriority = priority;
    let taskComplete = false;

    const getDate = () => taskDate;
    const getName = () => taskName;
    const getDesc = () => taskDesc;
    const getPrior = () => taskPriority;
    const getComplete = () => taskComplete;

    const changeDate = (newDate) => taskDate = new Date(newDate);

    const changePriority = (priority) => {
        if (priority === 'low'){
            taskPriority = 'low'
        } else if (priority === 'med') {
            taskPriority = 'med'
        } else {
            taskPriority = 'high'
        }
        return;
    }

    const changeName = (newName) => taskName = newName ;

    const changeDesc = (newDesc) => taskDesc = newDesc ;

    const changeCompletion = () => taskComplete ? taskComplete = false : taskComplete = true ;

    const getAll = () => {
        return {taskName: taskName, taskDesc: taskDesc, taskDate: taskDate, taskPriority: taskPriority,taskComplete: taskComplete}
    };

    const importTasks = (taskObj) => {
        taskObj = JSON.parse(taskObj);
        taskName = taskObj.taskName;
        taskDesc = taskObj.taskDesc;
        taskDate =new Date(taskObj.taskDate);
        taskPriority = taskObj.taskPriority;
        taskComplete = taskObj.taskComplete;
    }

    const exportTask = () => {
        let all = {taskName,taskDesc,taskDate,taskPriority,taskComplete}
        return JSON.stringify(all)
    }

    return {getDate, getName, getDesc, getPrior, getComplete, changeDate, changePriority, changeName, changeDesc, changeCompletion,importTasks,exportTask,getAll}
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTasks);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Objects_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Objects/tasks */ "./src/Objects/tasks.js");
/* harmony import */ var _Objects_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objects/projects */ "./src/Objects/projects.js");
/* harmony import */ var _Objects_projectHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Objects/projectHandler */ "./src/Objects/projectHandler.js");
/* harmony import */ var _Objects_localStorageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Objects/localStorageHandler */ "./src/Objects/localStorageHandler.js");
/* harmony import */ var _Domhandler_displayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Domhandler/displayer */ "./src/Domhandler/displayer.js");
/* harmony import */ var _Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Domhandler/domInteraction */ "./src/Domhandler/domInteraction.js");







// Initialise the Template Project
const task1 = (0,_Objects_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])('Task 1','This is the First Task',new Date(),'low');
const proj = (0,_Objects_projects__WEBPACK_IMPORTED_MODULE_1__["default"])('Project 1', 'This is the default Project');
const allProj = (0,_Objects_projectHandler__WEBPACK_IMPORTED_MODULE_2__["default"])()
proj.addTask(task1);
allProj.addProject(proj);

// If Project exists, Load that Project, else, utilise the template project
const storageStatus = (0,_Objects_localStorageHandler__WEBPACK_IMPORTED_MODULE_3__["default"])('localStorage');
storageStatus && localStorage.getItem('projectData') ? allProj.loadProject(localStorage.getItem('projectData')) : allProj


_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"].initialLoad(allProj)
_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"].setAllProject(allProj)
_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"].projectSelectionOption(allProj)
_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"]



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ3ZEZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDTTtBQUNPO0FBQ087QUFDYjtBQUNTO0FBQ3pEO0FBQ0E7QUFDQSxjQUFjLDBEQUFXO0FBQ3pCLGFBQWEsNkRBQWE7QUFDMUIsZ0JBQWdCLG1FQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdFQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrRUFBYztBQUNkLGtFQUFjO0FBQ2Qsa0VBQWM7QUFDZCxrRUFBYztBQUNkO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvRG9taGFuZGxlci9kaXNwbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL0RvbWhhbmRsZXIvZG9tSW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL09iamVjdHMvbG9jYWxTdG9yYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvT2JqZWN0cy9wcm9qZWN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvT2JqZWN0cy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvT2JqZWN0cy90YXNrcy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBEb21EaXNwbGF5ID0gKCgpID0+e1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXlNb250aEZvcm1hdHRlciA9IChkYXksIG1vbnRoKT0+IHtcclxuICAgICAgICBsZXQgdGhpc0RheSA9ICcnXHJcbiAgICAgICAgbGV0IHRoaXNNb250aCA9ICcnXHJcbiAgICAgICAgY29uc3QgYWxsTW9udGggPSBbJ0phbicsJ0ZlYicsJ01hcicsJ0FwcicsJ01heScsJ0p1bicsJ0p1bCcsJ0F1ZycsJ1NlcCcsJ09jdCcsJ05vdicsJ0RlYyddXHJcbiAgICAgICAgc3dpdGNoIChkYXkpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjYXNlIDIxOlxyXG4gICAgICAgICAgICBjYXNlIDMxOlxyXG4gICAgICAgICAgICAgICAgdGhpc0RheSA9IGAke2RheX1zdGBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGNhc2UgMjI6XHJcbiAgICAgICAgICAgICAgICB0aGlzRGF5ID0gYCR7ZGF5fW5kYFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgY2FzZSAyMzpcclxuICAgICAgICAgICAgICAgIHRoaXNEYXkgPSBgJHtkYXl9cmRgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXNEYXkgPSBgJHtkYXl9dGhgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbE1vbnRoW21vbnRoXSArXCIgXCIgKyB0aGlzRGF5XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFycyB0aGUgY3VycmVudCBsaXN0IG9mIHRhc2tzLCB1c2VkIHdpdGggcHJvamVjdCBzZWxlY3Rpb25cclxuICAgIGNvbnN0IGNsZWFyVGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKVxyXG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJQcm9qZWN0U2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKVxyXG4gICAgICAgIHRhc2tOb3RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBEb21EaXNwbGF5LnNlbGVjdGVkUHJvamVjdE9wdGlvbihwcm9qZWN0SUQpXHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RPcHRpb24gPSAocHJvamVjdElEKSA9PiB7XHJcbiAgICAgICAgLy8gYWxlcnQocHJvamVjdElEKVxyXG4gICAgICAgIGNvbnN0IHRhc2tOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50IHByb2plY3RJbmRleCcsIHByb2plY3RJRClcclxuICAgICAgICB0YXNrTm90ZS52YWx1ZSA9IHByb2plY3RJRFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RJRClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrTm90ZSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIENsZWFycyB0aGUgbm90ZSBvZiBzZWxlY3RlZCB0YXNrLCBjYWxsZWQgd2hlbiB0YXNrIGlzIHNlbGVjdGVkXHJcbiAgICBjb25zdCBjbGVhck5vdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1jb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlVGFzaycpXHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFzaylcclxuICAgICAgICBpZihhY3RpdmVUYXNrKXtcclxuICAgICAgICAgICAgYWN0aXZlVGFzay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVUYXNrJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRhc2tOb3RlLmlubmVySFRNTCA9IGA8c2VjdGlvbiBjbGFzcz1cImVtcHR5LU5vdGVcIj48cD5ObyBUYXNrIFNlbGVjdGVkPC9wPjwvc2VjdGlvbj5gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlSGVhZGVyID0gKHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRlciAucHJvamVjdC1uYW1lJylcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvakRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkZXIgLnByb2plY3QtZGVzY3JpcHRpb24nKVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGVyIC5jdXJyZW50LWRhdGUnKVxyXG4gICAgICAgIGNvbnN0IHRoaXNEYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGN1cnJlbnRQcm9qLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcclxuICAgICAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGAke2RheU1vbnRoRm9ybWF0dGVyKHRoaXNEYXRlLmdldERhdGUoKSx0aGlzRGF0ZS5nZXRNb250aCgpKX1gIFxyXG4gICAgICAgIGN1cnJlbnRQcm9qRGVzYy50ZXh0Q29udGVudCA9IHByb2plY3REZXNjcmlwdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVRhc2tNb2RhbCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlhbG9nJylcclxuICAgICAgICBtb2RhbERpYWxvZy5pZCA9IGBtb2RhbC0ke2lkfWBcclxuICAgICAgICBtb2RhbERpYWxvZy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwiY3JlYXRlLXRhc2tcIj5cclxuICAgICAgICAgICAgICAgIDxsZWdlbmQ+Q3JlYXRlIFRhc2s8L2xlZ2VuZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFzayAxXCIgY2xhc3M9XCJjcmVhdGUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgY2xhc3M9XCJjcmVhdGUtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwidGFza1ByaW9yaXR5XCIgaWQ9XCJjcmVhdGVUYXNrUHJpb3JpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgc2VsZWN0ZWQ+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZFwiID5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiID5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJDcmVhdGVEdWVEYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRhc2stY3JlYXRlXCI+Y3JlYXRlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+YFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RNb2RhbCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0JylcclxuICAgICAgICBtb2RhbERpYWxvZy5pZCA9IGBtb2RhbFByb2plY3QtJHtpZH1gXHJcbiAgICAgICAgbW9kYWxEaWFsb2cuaW5uZXJIVE1MID0gYDxmb3JtIGFjdGlvbj1cIlwiY2xhc3M9J2NyZWF0ZSBQcm9qZWN0Jz5cclxuICAgICAgICA8bGVnZW5kPkNyZWF0ZSBQcm9qZWN0PC9sZWdlbmQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOZXcgUHJvamVjdFwiIGNsYXNzPVwiY3JlYXRlLXRpdGxlIHByb2plY3QtdGl0bGVcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgRGVzY3JpcHRpb25cIiBjbGFzcz1cImNyZWF0ZS1kZXNjIHByb2plY3QtdGl0bGVcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdC1jcmVhdGVcIj5jcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+YFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGVzIHRoZSBwcm9qZWN0LCBiZXN0IHVzZWQgd2l0aCBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgY3VycmVudCBleGlzaXRpbmcgcHJvamVjdHMuXHJcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKHRhc2ssIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0JylcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICBsaS5pZCA9IGlkXHJcbiAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2luZGl2aWR1YWxUYXNrJ1xyXG4gICAgICAgIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRhc2staXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGlkPVwidGFzay0ke2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzPVwidGFzay1uYW1lXCI+PC9sZWdlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3Rhc2sudGFza05hbWV9XCIgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cImR1ZURhdGVcIiB2YWx1ZT1cIiR7dGFzay50YXNrRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0YXNrUHJpb3JpdHlcIiBpZD1cInRhc2tQcmlvcml0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiICAke3Rhc2sudGFza1ByaW9yaXR5ID09PSAnbG93JyA/ICdzZWxlY3RlZD5sb3cnIDogJz5sb3cnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZFwiICAke3Rhc2sudGFza1ByaW9yaXR5ID09PSAnbWVkJyA/ICdzZWxlY3RlZD5tZWQnIDogJz5tZWQnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiAke3Rhc2sudGFza1ByaW9yaXR5ID09PSAnaGlnaCcgPyAnc2VsZWN0ZWQ+aGlnaCcgOiAnPmhpZ2gnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb21wbGV0ZVwiIGlkPVwiY29tcGxldGVcIiAke3Rhc2sudGFza0NvbXBsZXRlID09IHRydWUgPyAnQ2hlY2tlZCcgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz1cImRlbGV0ZVRhc2tcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgYFxyXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZChsaSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKVxyXG4gICAgICAgIGxpLnJlbW92ZSgpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU5vdGUgPSAodGFzayxwcm9qZWN0TmFtZSwgaWQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLWNvbnRhaW5lcicpXHJcbiAgICAgICAgdGFza05vdGUuaWQgPSBcIm5vdGUtXCIraWRcclxuICAgICAgICBjb25zdCB0YXNrQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpZH0gLnRhc2stbGVmdGApXHJcbiAgICAgICAgdGFza0FjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmVUYXNrJylcclxuICAgICAgICB0YXNrTm90ZS5pbm5lckhUTUwgPSBgPHNlY3Rpb24gY2xhc3M9XCJ0YXNrLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRhc2stbmFtZS1iaWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImR1ZS1kYXRlXCI+RHVlIDxzcGFuPiR7dGFzay50YXNrRGF0ZS5nZXREYXRlKCl9LyR7dGFzay50YXNrRGF0ZS5nZXRNb250aCgpKzF9LyR7dGFzay50YXNrRGF0ZS5nZXRGdWxsWWVhcigpfTwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiA+UHJpb3JpdHkgPHNwYW4gY2xhc3M9XCJwcmlvcml0eVwiPiR7dGFzay50YXNrUHJpb3JpdHl9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRhc2stbm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tEZXNjXCI+VGFzayBEZXRhaWxzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInRhc2tEZXNjXCIgaWQ9XCJ0YXNrRGVzY1wiIGNvbHM9XCIzMFwiIHZhbHVlPScke3Rhc2sudGFza0Rlc2N9JyByb3dzPVwiMTBcIiBjbGFzcz1cInRhc2tkZXNjcmlwdGlvblwiPiR7dGFzay50YXNrRGVzY308L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+YFxyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc3BsYXlzIHRoZSBUYXNrIGRldGFpbHMgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNjcmVlbiwgc2hvdWxkIGJlIGFjdGl2YXRlZCB3aGVuIHRhc2sgaXMgY2xpY2tlZCBmcm9tIHRoZSB0YXNrIGxpc3RcclxuICAgIGNvbnN0IHRhc2tEaXNwbGF5ID0gKHRhc2sscHJvamVjdE5hbWUsIHRhc2tJRCkgPT4ge1xyXG4gICAgICAgIGNsZWFyTm90ZSgpXHJcbiAgICAgICAgaWYgKHRhc2sgJiYgcHJvamVjdE5hbWUgJiYgdGFza0lEKXtcclxuICAgICAgICAgICAgY3JlYXRlTm90ZSh0YXNrLHByb2plY3ROYW1lLCB0YXNrSUQpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZS1iaWcnKVxyXG4gICAgICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2sudGFza05hbWVcclxuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JylcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay50YXNrUHJpb3JpdHlcclxuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKVxyXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHRhc2sudGFza0RhdGVcclxuICAgICAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2MnKVxyXG4gICAgICAgICAgICB0YXNrRGVzYy52YWx1ZSA9IHRhc2sudGFza0Rlc2NcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhck5vdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIHtjcmVhdGVUYXNrLHJlbW92ZVRhc2ssIGNsZWFyVGFzaywgdGFza0Rpc3BsYXksIGNsZWFyTm90ZSwgdXBkYXRlSGVhZGVyLCBjcmVhdGVUYXNrTW9kYWwsIGNsZWFyUHJvamVjdFNlbGVjdGlvbiwgc2VsZWN0ZWRQcm9qZWN0T3B0aW9ufVxyXG59KSgpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbURpc3BsYXkiLCJpbXBvcnQgcHJvamVjdEhhbmRsZXIgZnJvbSBcIi4uL09iamVjdHMvcHJvamVjdEhhbmRsZXJcIjtcclxuaW1wb3J0IERvbURpc3BsYXkgZnJvbSBcIi4vZGlzcGxheWVyXCI7XHJcbmltcG9ydCBjcmVhdGVUYXNrcyBmcm9tIFwiLi4vT2JqZWN0cy90YXNrc1wiO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi4vT2JqZWN0cy9wcm9qZWN0c1wiO1xyXG5cclxuY29uc3QgZG9tSW50ZXJhY3Rpb24gPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICAvLyBUaGUgQ3VycmVudCBQcm9qZWN0IElkZW50aWZpZXIgZ2l2ZW4gbGlzdCBvZiBQcm9qZWN0cywgbWFuYWdlZCB0aHJvdWdoIGluZGV4XHJcbiAgICBsZXQgUHJvamVjdElEID0gMDtcclxuICAgIGNvbnN0IGdldFByb2plY3RJRCA9ICgpID0+IFByb2plY3RJRFxyXG4gICAgY29uc3Qgc2V0UHJvamVjdElEID0gKG5ld0lEKSA9PiBQcm9qZWN0SUQgPSBuZXdJRFxyXG5cclxuICAgIC8vIFRoZSBjdXJyZW50IFByb2plY3QgaGFuZGxlciwgTmVlZHMgdG8gYmUgaW5pdGlhbGlzZWQgd2hlbiB0aGUgZnVuY3Rpb24gZmlyc3QgcnVucyB0byBmdW5jdGlvbiBwcm9wZXJseVxyXG4gICAgbGV0IGdsb2JhbFByb2plY3QgPSAnJ1xyXG4gICAgY29uc3Qgc2V0QWxsUHJvamVjdCA9IChhbGxQcm9qKSA9PiBnbG9iYWxQcm9qZWN0ID0gYWxsUHJvalxyXG4gICAgY29uc3QgZ2V0QWxsUHJvamVjdCA9ICgpID0+IGdsb2JhbFByb2plY3RcclxuXHJcbiAgICAvLyBTYXZpbmcgZnVuY3Rpb25hbGl0eSwgUnVucyBldmVyeSA1IHNlY29uZHNcclxuICAgIGNvbnN0IHNhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3REYXRhJywgZ2V0QWxsUHJvamVjdCgpLmV4cG9ydFByb2plY3QoKSkgXHJcbiAgICB9XHJcbiAgICAvLyBEZXRlcm1pbmVzIHRoZSBzYXZpbmcgZHVyYXRpb25cclxuICAgIGNvbnN0ICBwZXJpb2RpY1NhdmUgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICBzYXZlKClcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gT24gdGhlIGluaXRpYWwgbG9hZCwgc2V0IGl0IHVwIHdpdGggdGhlIGZpcnN0IGNob3NlbiBwcm9qZWN0LCBzaG91bGQgYmUgY2hhbmdlZCB0byBsYXN0IHNhdmVkIHByb2plY3QgZG93biB0aGUgbGluZVxyXG4gICAgY29uc3QgaW5pdGlhbExvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRPTSBmdWxseSBsb2FkZWQgYW5kIHBhcnNlZFwiKTtcclxuICAgICAgICAgICAgRG9tRGlzcGxheS5jcmVhdGVUYXNrTW9kYWwoYDBgKVxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyKGdldEFsbFByb2plY3QoKS5zaG93UHJvamVjdCgpWzBdLCAwKVxyXG4gICAgICAgICAgICB0YXNrTW9kYWxPcGVuKGdldEFsbFByb2plY3QoKS5zaG93UHJvamVjdCgpWzBdLCBgMGApXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2plY3Qgc2VsZWN0aW9uIGFuZCB1cGRhdGluZyB0aGUgdGFza3MgdmlzaWJsZSBiYXNlZCBvbiB0aGUgY3VycmVudCBzZWxlY3RlZCBwcm9qZWN0XHJcbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHByb2plY3Qgd2l0aCBzZXRQcm9qZWN0SUQuXHJcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uT3B0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKTtcclxuICAgICAgICBwcm9qZWN0TW9kYWxPcGVuKClcclxuICAgICAgICByZW5kZXJQcm9qZWN0T3B0aW9ucyggY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcyggY3VycmVudFByb2plY3QpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gT24gZHJvcGRvd24gY2hhbmdlLCByZVJlbmRlciB0aGUgVGFzayBMaXN0c1xyXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RUYXNrcyA9ICggY3VycmVudFByb2plY3QpID0+e1xyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PntcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZ2V0QWxsUHJvamVjdCgpLnNob3dQcm9qZWN0KClbZS50YXJnZXQudmFsdWVdXHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuY3JlYXRlVGFza01vZGFsKGAke2dldFByb2plY3RJRCgpfWApXHJcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Rpb25SZW5kZXIoc2VsZWN0ZWRQcm9qZWN0LCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgdGFza01vZGFsT3BlbihzZWxlY3RlZFByb2plY3QsIGAke2dldFByb2plY3RJRCgpfWApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW5kZXIgdGhlIGRyb3Bkb3duIG1lbnUgY29udGFpbmluZyBhbGwgcHJvamVjdHMgd2UgY3VycmVudGx5IGhhdmUgYWNjZXNzIHRvXHJcbiAgICBjb25zdCByZW5kZXJQcm9qZWN0T3B0aW9ucyA9ICggY3VycmVudFByb2plY3QpID0+IHtcclxuICAgICAgICBEb21EaXNwbGF5LmNsZWFyUHJvamVjdFNlbGVjdGlvbigpXHJcbiAgICAgICAgZ2V0QWxsUHJvamVjdCgpLnNob3dQcm9qZWN0KCkuZm9yRWFjaCgocHJvamVjdCwgcHJvakluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXNQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgICAgICAgICAgdGhpc1Byb2plY3QudmFsdWUgPSBwcm9qSW5kZXhcclxuICAgICAgICAgICAgdGhpc1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKVxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hcHBlbmQodGhpc1Byb2plY3QpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVuZGVyIHRoZSBQYWdlIGZvciB0aGUgY3VycmVudGx5IFNlbGVjdGVkIFByb2plY3QgZ2l2ZW4gdGhlIHByb2plY3QgT2JqZWN0IGFuZCBwcm9qZWN0IElkLCBzZXQgdGhlIEdsb2JhbCBQcm9qZWN0IElEXHJcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyID0gKHNlbGVjdGVkUHJvamVjdCwgcHJvamVjdElEKSA9PiB7XHJcbiAgICAgICAgRG9tRGlzcGxheS5jbGVhclRhc2soKVxyXG4gICAgICAgIHNldFByb2plY3RJRChwcm9qZWN0SUQpXHJcbiAgICAgICAgLy8gSWYgdGhlIHByb2plY3QgZG9lcyBub3QgZ2l2ZSBOdWxsXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkUHJvamVjdCl7XHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuc2VsZWN0ZWRQcm9qZWN0T3B0aW9uKHByb2plY3RJRClcclxuICAgICAgICAgICAgRG9tRGlzcGxheS51cGRhdGVIZWFkZXIoc2VsZWN0ZWRQcm9qZWN0LmdldE5hbWUoKSwgc2VsZWN0ZWRQcm9qZWN0LmdldERlc2MoKSlcclxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaywgdGFza0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBEb21EaXNwbGF5LmNyZWF0ZVRhc2sodGFzay5nZXRBbGwoKSwgYCR7Z2V0UHJvamVjdElEKCl9cCR7dGFza0luZGV4fWApXHJcbiAgICAgICAgICAgICAgICB0YXNrVXBkYXRlKHNlbGVjdGVkUHJvamVjdCwgdGFzaywgYCR7Z2V0UHJvamVjdElEKCl9cCR7dGFza0luZGV4fWAsIHRhc2tJbmRleClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGFza09wZW4oc2VsZWN0ZWRQcm9qZWN0KSAgICBcclxuICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIE9wZW5zIHRoZSBFeHBhbmRlZCB2aWV3IG9mIHRoZSBQcm9qZWN0LCBzaG93IGxpc3Qgb2YgdGFza3NcclxuICAgIGNvbnN0IHRhc2tPcGVuID0gKGN1cnJlbnRQcm9qKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5kaXZpZHVhbFRhc2snKTtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKCAodGFzaywgdGFza0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJRCA9IGAke2dldFByb2plY3RJRCgpfXAke3Rhc2tJbmRleH1gXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbmZvID0gY3VycmVudFByb2ouZ2V0VGFza3MoKVt0YXNrSW5kZXhdXHJcbiAgICAgICAgICAgIC8vIGZvciBlYWNoIG9mIHRoZSB0YXNrcywgZXhwYW5kIG9uIGNsaWNrLCBzaG93aW5nIHRoZSB0YXNrIGluZm9ybWF0aW9uXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgICAgIERvbURpc3BsYXkudGFza0Rpc3BsYXkodGFza0luZm8uZ2V0QWxsKCksY3VycmVudFByb2ouZ2V0TmFtZSgpLHRhc2tJRClcclxuICAgICAgICAgICAgICAgIG5vdGVVcGRhdGUodGFza0luZm8sIHRhc2tJRClcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gYGRlbGV0ZVRhc2tgKXtcclxuICAgICAgICAgICAgICAgICAgICBEb21EaXNwbGF5LnJlbW92ZVRhc2sodGFza0lEKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qLnJlbW92ZVRhc2sodGFza0luZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIERvbURpc3BsYXkudGFza0Rpc3BsYXkoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gQ3JlYXRlIGFuIGV4cGFuZGVkIG5vdGUgZm9yIGVhY2ggdGFzayBhbmQgc2F2ZSB0aGUgY2hhbmdlZCB2YWx1ZXNcclxuICAgIGNvbnN0IG5vdGVVcGRhdGUgPSAoY3VycmVudFRhc2ssIHRhc2tJRCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25vdGUtJHt0YXNrSUR9ICN0YXNrRGVzY2ApXHJcbiAgICAgICAgaWYgKHRhc2tEZXNjKSB7XHJcbiAgICAgICAgICAgIHRhc2tEZXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFzay5jaGFuZ2VEZXNjKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuY2xlYXJOb3RlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmUgYW55IGNoYW5nZXMgdG8gdGhlIGluZGl2aWR1YWwgdGFzayBpbnB1dHMsIGFuZCBkZWxldGUgdGFza3Mgd2l0aCBhIGJ1dHRvbiBjbGlja1xyXG4gICAgY29uc3QgdGFza1VwZGF0ZSA9IChzZWxlY3RlZFByb2plY3QsIGN1cnJlbnRUYXNrLCB0YXNrSUQsIHRhc2tJbmRleCkgPT4ge1xyXG4gICAgICAgIC8vIGNoYW5nZSBmb3IgZWFjaFxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza0lEfSAudGFzay10aXRsZWApXHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHt0YXNrSUR9ICN0YXNrUHJpb3JpdHlgKVxyXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza0lEfSAjY29tcGxldGVgKVxyXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHt0YXNrSUR9ICNkdWVEYXRlYClcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNub3RlLSR7dGFza0lEfSAjdGFza0Rlc2NgKVxyXG4gICAgICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gY3VycmVudFRhc2suY2hhbmdlTmFtZShlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgdGFza0NvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZT0+IGN1cnJlbnRUYXNrLmNoYW5nZUNvbXBsZXRpb24oKSlcclxuICAgICAgICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IGN1cnJlbnRUYXNrLmNoYW5nZVByaW9yaXR5KGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICB0YXNrRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gY3VycmVudFRhc2suY2hhbmdlRGF0ZShlLnRhcmdldC52YWx1ZSkpXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IERlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza0lEfSAuZGVsZXRlVGFza2ApXHJcbiAgICAgICAgLy8gRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRhc2tJbmRleClcclxuICAgICAgICAvLyAgICAgRG9tRGlzcGxheS5yZW1vdmVUYXNrKHRhc2tJRClcclxuICAgICAgICAvLyAgICAgc2VsZWN0ZWRQcm9qZWN0LnJlbW92ZVRhc2sodGFza0luZGV4KVxyXG4gICAgICAgIC8vICAgICBEb21EaXNwbGF5LnRhc2tEaXNwbGF5KCkgICAgXHJcbiAgICAgICAgLy8gfSkgXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBNT0RBTFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gICAgLy8gQWRkIHRhc2sgTW9kYWwgdG8gY3JlYXRlIG5ldyB0YXNrcyBmb3IgdGhlIGN1cnJlbnQgcHJvamVjdFxyXG4gICAgY29uc3QgdGFza01vZGFsT3BlbiA9ICh0aGlzUHJvaiwgaWQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaWFsb2cnKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jcmVhdGUnKVxyXG4gICAgICAgIGNvbnN0IHRhc2tPcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XHJcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLmNyZWF0ZS10YXNrJylcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzUHJvaiAmJiBnZXRBbGxQcm9qZWN0KCkuZ2V0Q291bnQoKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tNb2RhbCA9IHRhc2tNb2RhbEdldCh0aGlzUHJvaiwgaWQsIHRhc2tNb2RhbCwgY3JlYXRlQnV0dG9uKVxyXG4gICAgICAgICAgICB0YXNrT3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgdGFza0Zvcm0ucmVzZXQoKVxyXG4gICAgICAgICAgICAgICAgdGFza01vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3VGFza01vZGFsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBwcm9qZWN0IG1vZGFsLCBjcmVhdGUgbmV3IHByb2plY3QsIGFuZCBzZXQgaXQgYXMgY3VycmVudCBwcm9qZWN0LCByZWZyZXNoIHRoZSBwYWdlXHJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWxPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRpYWxvZycpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNyZWF0ZScpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBwcm9qZWN0TW9kYWxHZXQocHJvamVjdE1vZGFsLCBjcmVhdGVCdXR0b24pXHJcbiAgICAgICAgcHJvamVjdE9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0TW9kYWxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBNb2RhbCBGb3IgRGVsZXRpbmcgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgUHJvamVjdFxyXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZU1vZGFsID0gKChjdXJyZW50UHJvamVjdCwgcHJvamVjdE1vZGFsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVsZXRlJylcclxuICAgICAgICBjb25zdCBpZ25vcmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWdub3JlLWRlbGV0ZScpXHJcbiAgICAgICAgLy8gT24gRGVsZXRlLCBSZWZyZXNoIHRoZSBwYWdlIGludG8gdGhlIGZpcnN0IFByb2plY3QgdGhhdCBFeGlzdHMsIGFuZCByZXNldCB0aGUgTm90ZXNcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgaWYoZ2V0QWxsUHJvamVjdCgpLmdldENvdW50KCk+MSl7XHJcbiAgICAgICAgICAgICAgICBnZXRBbGxQcm9qZWN0KCkucmVtb3ZlUHJvamVjdChnZXRQcm9qZWN0SUQoKSlcclxuICAgICAgICAgICAgICAgIHNldFByb2plY3RJRCgwKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdE9wdGlvbnMoIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcyggY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgICAgICAgICBpZihnZXRBbGxQcm9qZWN0KCkuc2hvd1Byb2plY3QoKVswXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvblJlbmRlcihnZXRBbGxQcm9qZWN0KCkuc2hvd1Byb2plY3QoKVswXSwgMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIERvbURpc3BsYXkuY2xlYXJOb3RlKClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnVGhlcmUgTXVzdCBiZSBNaW5pbXVtIG9mIDEgUHJvamVjdCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgc2F2ZSgpICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlnbm9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBPcGVuaW5nIGEgZGVsZXRlIG1vZGVsIGZvciB0aGUgcHJvamVjdCBvbiBidXR0b24gY2xpY2tcclxuICAgIGNvbnN0IHByb2plY3REZWxldGVNb2RhbE9wZW4gPSAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBkZWxldGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlbGV0ZS1kaWFsb2cnKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0T3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtdGhpcy1wcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdE1vZGFsID0gcHJvamVjdERlbGV0ZU1vZGFsKGN1cnJlbnRQcm9qZWN0LCBkZWxldGVNb2RhbClcclxuICAgICAgICBwcm9qZWN0T3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgICAgICBkZWxldGVNb2RhbC5zaG93TW9kYWwoKTtcclxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdE1vZGFsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KSgpXHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSB0YXNrIGFuZCBhZGQgaXQgdG8gdGhlIGN1cnJlbnQgcHJvamVjdCwgcmVyZW5kZXIgdGhlIHBhZ2VcclxuICAgIGNvbnN0IHRhc2tNb2RhbEdldCA9ICgodGhpc1Byb2osIGlkLCB0YXNrTW9kYWwsIGNyZWF0ZUJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrSW5mbyA9IHRhc2tNb2RhbEluZm8oKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFza3ModGFza0luZm8uTmFtZSwgdGFza0luZm8uZGVzYywgbmV3IERhdGUodGFza0luZm8uZGF0ZSksIHRhc2tJbmZvLnByaW9yaXR5LCB0YXNrSW5mby5jb21wbGV0ZSlcclxuICAgICAgICAgICAgdGhpc1Byb2ouYWRkVGFzayhuZXdUYXNrKVxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyKHRoaXNQcm9qLCBpZClcclxuXHJcbiAgICAgICAgICAgIHRhc2tNb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIHNhdmUoKSAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgTmV3IHByb2plY3Qgc2V0IGl0XHJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWxHZXQgPSAoKHByb2plY3RNb2RhbCwgY3JlYXRlQnV0dG9uKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gcHJvamVjdE1vZGFsSW5mbygpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RJbmZvLk5hbWUsIHByb2plY3RJbmZvLmRlc2MpXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgZ2V0QWxsUHJvamVjdCgpLmFkZFByb2plY3QobmV3UHJvamVjdClcclxuICAgICAgICAgICAgc2V0UHJvamVjdElEKGdldEFsbFByb2plY3QoKS5nZXRDb3VudCgpLTEpXHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuY3JlYXRlVGFza01vZGFsKGdldEFsbFByb2plY3QoKS5nZXRDb3VudCgpLTEpXHJcbiAgICAgICAgICAgIHRhc2tNb2RhbE9wZW4obmV3UHJvamVjdCwgZ2V0QWxsUHJvamVjdCgpLmdldENvdW50KCktMSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKTtcclxuICAgICAgICAgICAgcmVuZGVyUHJvamVjdE9wdGlvbnMoIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdFRhc2tzKCBjdXJyZW50UHJvamVjdClcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Rpb25SZW5kZXIobmV3UHJvamVjdCwgZ2V0QWxsUHJvamVjdCgpLmdldENvdW50KCktMSlcclxuXHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICBzYXZlKCkgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWxJbmZvID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRpdGxlLnByb2plY3QtdGl0bGUnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1kZXNjLnByb2plY3QtdGl0bGUnKVxyXG4gICAgICAgIHJldHVybiB7TmFtZTpwcm9qZWN0TmFtZS52YWx1ZSwgZGVzYzpwcm9qZWN0RGVzYy52YWx1ZX1cclxuICAgIH1cclxuICAgIGNvbnN0IHRhc2tNb2RhbEluZm8gPSAoKSA9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdGl0bGUnKVxyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1kZXNjJylcclxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlVGFza1ByaW9yaXR5JylcclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDcmVhdGVEdWVEYXRlJylcclxuICAgICAgICAvLyBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGUnKVxyXG4gICAgICAgIC8vIE5hbWU/OiBzdHJpbmcsIGRlc2M/OiBzdHJpbmcsIGRhdGU/OiBEYXRlLCBwcmlvcml0eT86IHN0cmluZywgY29tcGxldGU/OiBib29sZWFuXHJcbiAgICAgICAgLy8gcmV0dXJuIHRhc2tOYW1lLnZhbHVlLCB0YXNrRGVzYy52YWx1ZSwgdGFza0RhdGUudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgY29tcGxldGU6dGFza0NvbXBsZXRlLmNoZWNrZWRcclxuICAgICAgICByZXR1cm4ge05hbWU6dGFza05hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIGRlc2M6dGFza0Rlc2MudmFsdWUsXHJcbiAgICAgICAgICAgIGRhdGU6dGFza0RhdGUudmFsdWUgfHwgbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgcHJpb3JpdHk6dGFza1ByaW9yaXR5LnZhbHVlLCBcclxuICAgICAgICAgICAgLy8gY29tcGxldGU6dGFza0NvbXBsZXRlLmNoZWNrZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0U2VsZWN0aW9uT3B0aW9uLCBpbml0aWFsTG9hZCwgc2V0QWxsUHJvamVjdH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbUludGVyYWN0aW9uO1xyXG4iLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuICAgIGxldCBzdG9yYWdlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xyXG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxyXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxyXG4gICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxyXG4gICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXHJcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgICBzdG9yYWdlICYmXHJcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlQXZhaWxhYmxlXHJcbiAgIiwiLy8gaWYgaW4gbG9jYWwgc3RvcmFnZSBsb2FkIHRob3NlXHJcbmltcG9ydCBjcmVhdGVUYXNrcyBmcm9tIFwiLi90YXNrc1wiXHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5cclxuY29uc3QgcHJvamVjdEhhbmRsZXIgPSAocHJvamVjdD1bXSkgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IHByb2plY3Q7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdEhhbmRsZXIgPSAobmV3RGF0YSkgPT4gY3VycmVudFByb2plY3RzID0gbmV3RGF0YTtcclxuXHJcbiAgICBsZXQgcHJvamVjdENvdW50ID0gY3VycmVudFByb2plY3RzLmxlbmd0aDtcclxuICAgIGNvbnN0IGdldENvdW50ID0gKCkgPT4gcHJvamVjdENvdW50O1xyXG4gICAgY29uc3Qgc2V0Q291bnQgPSAobmV3Q291bnQpID0+ICBwcm9qZWN0Q291bnQgPSBuZXdDb3VudFxyXG5cclxuICAgIGNvbnN0IGxvYWRQcm9qZWN0ID0gKHByb2plY3REYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcnLCBwcm9qZWN0RGF0YSlcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gSlNPTi5wYXJzZShwcm9qZWN0RGF0YSk7XHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RIYW5kbGVyKClcclxuICAgICAgICBmb3IoY29uc3QgcHJvaiBpbiBuZXdQcm9qZWN0KXtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KClcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QuaW1wb3J0UHJvamVjdChuZXdQcm9qZWN0W3Byb2pdWzBdKVxyXG4gICAgICAgICAgICBmb3IoY29uc3QgdGFzayBpbiBuZXdQcm9qZWN0W3Byb2pdWzFdKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gY3JlYXRlVGFza3MoKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2suaW1wb3J0VGFza3MobmV3UHJvamVjdFtwcm9qXVsxXVt0YXNrXSlcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2soY3VycmVudFRhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb2Nlc3NlZFByb2plY3QuYWRkUHJvamVjdChjdXJyZW50UHJvamVjdClcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q291bnQocHJvY2Vzc2VkUHJvamVjdC5zaG93UHJvamVjdCgpLmxlbmd0aClcclxuICAgICAgICBuZXdQcm9qZWN0SGFuZGxlcihwcm9jZXNzZWRQcm9qZWN0LnNob3dQcm9qZWN0KCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwb3J0UHJvamVjdCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb2xsZWN0aW9ucyA9IHt9XHJcbiAgICAgICAgY3VycmVudFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIHByb2pJbmRleCkgPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gW11cclxuICAgICAgICBwcm9qZWN0Q29sbGVjdGlvbnNbcHJvakluZGV4XSA9IFtwcm9qZWN0LmV4cG9ydFByb2plY3QoKSwgcHJvamVjdFRhc2tzXVxyXG4gICAgICAgIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpXHJcbiAgICAgICAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0Q29sbGVjdGlvbnNbcHJvakluZGV4XVsxXS5wdXNoKHRhc2suZXhwb3J0VGFzaygpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocHJvamVjdENvbGxlY3Rpb25zKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dQcm9qZWN0ID0gKCkgPT4gY3VycmVudFByb2plY3RzO1xyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXHJcbiAgICAgICAgKytwcm9qZWN0Q291bnRcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIGdldENvdW50KCkpXHJcbiAgICAgICAgaWYgKGluZGV4IDwgZ2V0Q291bnQoKSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS1wcm9qZWN0Q291bnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtzaG93UHJvamVjdCwgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgbG9hZFByb2plY3QsIGV4cG9ydFByb2plY3QsIGN1cnJlbnRQcm9qZWN0cywgZ2V0Q291bnR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RIYW5kbGVyIiwiY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZT0nJywgcHJvamVjdERlc2M9JycpID0+IHtcclxuICAgIGxldCBuYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICBsZXQgZGVzYyA9IHByb2plY3REZXNjO1xyXG4gICAgbGV0IHRhc2tMaXN0ID0gW107XHJcbiAgICBsZXQgdGFza0NvdW50ID0gdGFza0xpc3QubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGdldENvdW50ID0gKCkgPT4gdGFza0NvdW50O1xyXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcbiAgICBjb25zdCBnZXREZXNjID0gKCkgPT4gZGVzYztcclxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza0xpc3Q7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlTmFtZSA9IChuZXdOYW1lKSA9PiBuYW1lID0gbmV3TmFtZSA7XHJcbiAgICBjb25zdCBjaGFuZ2VEZXNjID0gKG5ld0Rlc2MpID0+IGRlc2MgPSBuZXdEZXNjIDtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKG5ld1Rhc2spID0+IHtcclxuICAgICAgICArK3Rhc2tDb3VudCBcclxuICAgICAgICB0YXNrTGlzdC5wdXNoKG5ld1Rhc2spXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA8IGdldENvdW50KCkpIHtcclxuICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS10YXNrQ291bnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1wb3J0UHJvamVjdCA9ICh0YXNrUHJvamVjdCkgPT4ge1xyXG4gICAgICAgIHRhc2tQcm9qZWN0ID0gSlNPTi5wYXJzZSh0YXNrUHJvamVjdCk7XHJcbiAgICAgICAgbmFtZSA9IHRhc2tQcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgZGVzYyA9IHRhc2tQcm9qZWN0LmRlc2M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwb3J0UHJvamVjdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYWxsID0ge25hbWUsZGVzY31cclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYWxsKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7Z2V0Q291bnQsZ2V0TmFtZSxnZXREZXNjLGdldFRhc2tzLGNoYW5nZU5hbWUsY2hhbmdlRGVzYyxhZGRUYXNrLHJlbW92ZVRhc2ssaW1wb3J0UHJvamVjdCxleHBvcnRQcm9qZWN0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdCIsImNvbnN0IGNyZWF0ZVRhc2tzID0gKE5hbWU9JycsZGVzYz0nJyxkYXRlPW5ldyBEYXRlKCkscHJpb3JpdHk9J2xvdycsY29tcGxldGU9ZmFsc2UpID0+IHtcclxuICAgIGxldCB0YXNrTmFtZSA9IE5hbWU7XHJcbiAgICBsZXQgdGFza0Rlc2MgPSBkZXNjO1xyXG4gICAgbGV0IHRhc2tEYXRlID0gZGF0ZTtcclxuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIGxldCB0YXNrQ29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4gdGFza0RhdGU7XHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gdGFza05hbWU7XHJcbiAgICBjb25zdCBnZXREZXNjID0gKCkgPT4gdGFza0Rlc2M7XHJcbiAgICBjb25zdCBnZXRQcmlvciA9ICgpID0+IHRhc2tQcmlvcml0eTtcclxuICAgIGNvbnN0IGdldENvbXBsZXRlID0gKCkgPT4gdGFza0NvbXBsZXRlO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZURhdGUgPSAobmV3RGF0ZSkgPT4gdGFza0RhdGUgPSBuZXcgRGF0ZShuZXdEYXRlKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IChwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gJ2xvdycpe1xyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkgPSAnbG93J1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICdtZWQnKSB7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eSA9ICdtZWQnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5ID0gJ2hpZ2gnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VOYW1lID0gKG5ld05hbWUpID0+IHRhc2tOYW1lID0gbmV3TmFtZSA7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGVzYyA9IChuZXdEZXNjKSA9PiB0YXNrRGVzYyA9IG5ld0Rlc2MgO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNvbXBsZXRpb24gPSAoKSA9PiB0YXNrQ29tcGxldGUgPyB0YXNrQ29tcGxldGUgPSBmYWxzZSA6IHRhc2tDb21wbGV0ZSA9IHRydWUgO1xyXG5cclxuICAgIGNvbnN0IGdldEFsbCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4ge3Rhc2tOYW1lOiB0YXNrTmFtZSwgdGFza0Rlc2M6IHRhc2tEZXNjLCB0YXNrRGF0ZTogdGFza0RhdGUsIHRhc2tQcmlvcml0eTogdGFza1ByaW9yaXR5LHRhc2tDb21wbGV0ZTogdGFza0NvbXBsZXRlfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbXBvcnRUYXNrcyA9ICh0YXNrT2JqKSA9PiB7XHJcbiAgICAgICAgdGFza09iaiA9IEpTT04ucGFyc2UodGFza09iaik7XHJcbiAgICAgICAgdGFza05hbWUgPSB0YXNrT2JqLnRhc2tOYW1lO1xyXG4gICAgICAgIHRhc2tEZXNjID0gdGFza09iai50YXNrRGVzYztcclxuICAgICAgICB0YXNrRGF0ZSA9bmV3IERhdGUodGFza09iai50YXNrRGF0ZSk7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5ID0gdGFza09iai50YXNrUHJpb3JpdHk7XHJcbiAgICAgICAgdGFza0NvbXBsZXRlID0gdGFza09iai50YXNrQ29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwb3J0VGFzayA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYWxsID0ge3Rhc2tOYW1lLHRhc2tEZXNjLHRhc2tEYXRlLHRhc2tQcmlvcml0eSx0YXNrQ29tcGxldGV9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFsbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldERhdGUsIGdldE5hbWUsIGdldERlc2MsIGdldFByaW9yLCBnZXRDb21wbGV0ZSwgY2hhbmdlRGF0ZSwgY2hhbmdlUHJpb3JpdHksIGNoYW5nZU5hbWUsIGNoYW5nZURlc2MsIGNoYW5nZUNvbXBsZXRpb24saW1wb3J0VGFza3MsZXhwb3J0VGFzayxnZXRBbGx9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFza3MiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVUYXNrcyBmcm9tIFwiLi9PYmplY3RzL3Rhc2tzXCJcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vT2JqZWN0cy9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgcHJvamVjdEhhbmRsZXIgZnJvbSBcIi4vT2JqZWN0cy9wcm9qZWN0SGFuZGxlclwiO1xyXG5pbXBvcnQgc3RvcmFnZUF2YWlsYWJsZSBmcm9tIFwiLi9PYmplY3RzL2xvY2FsU3RvcmFnZUhhbmRsZXJcIjtcclxuaW1wb3J0IERvbURpc3BsYXkgZnJvbSBcIi4vRG9taGFuZGxlci9kaXNwbGF5ZXJcIjtcclxuaW1wb3J0IGRvbUludGVyYWN0aW9uIGZyb20gXCIuL0RvbWhhbmRsZXIvZG9tSW50ZXJhY3Rpb25cIjtcclxuXHJcbi8vIEluaXRpYWxpc2UgdGhlIFRlbXBsYXRlIFByb2plY3RcclxuY29uc3QgdGFzazEgPSBjcmVhdGVUYXNrcygnVGFzayAxJywnVGhpcyBpcyB0aGUgRmlyc3QgVGFzaycsbmV3IERhdGUoKSwnbG93Jyk7XHJcbmNvbnN0IHByb2ogPSBjcmVhdGVQcm9qZWN0KCdQcm9qZWN0IDEnLCAnVGhpcyBpcyB0aGUgZGVmYXVsdCBQcm9qZWN0Jyk7XHJcbmNvbnN0IGFsbFByb2ogPSBwcm9qZWN0SGFuZGxlcigpXHJcbnByb2ouYWRkVGFzayh0YXNrMSk7XHJcbmFsbFByb2ouYWRkUHJvamVjdChwcm9qKTtcclxuXHJcbi8vIElmIFByb2plY3QgZXhpc3RzLCBMb2FkIHRoYXQgUHJvamVjdCwgZWxzZSwgdXRpbGlzZSB0aGUgdGVtcGxhdGUgcHJvamVjdFxyXG5jb25zdCBzdG9yYWdlU3RhdHVzID0gc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJyk7XHJcbnN0b3JhZ2VTdGF0dXMgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3REYXRhJykgPyBhbGxQcm9qLmxvYWRQcm9qZWN0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0RGF0YScpKSA6IGFsbFByb2pcclxuXHJcblxyXG5kb21JbnRlcmFjdGlvbi5pbml0aWFsTG9hZChhbGxQcm9qKVxyXG5kb21JbnRlcmFjdGlvbi5zZXRBbGxQcm9qZWN0KGFsbFByb2opXHJcbmRvbUludGVyYWN0aW9uLnByb2plY3RTZWxlY3Rpb25PcHRpb24oYWxsUHJvailcclxuZG9tSW50ZXJhY3Rpb25cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=