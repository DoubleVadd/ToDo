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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ3ZEZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDTTtBQUNPO0FBQ087QUFDYjtBQUNTO0FBQ3pEO0FBQ0E7QUFDQSxjQUFjLDBEQUFXO0FBQ3pCLGFBQWEsNkRBQWE7QUFDMUIsZ0JBQWdCLG1FQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdFQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrRUFBYztBQUNkLGtFQUFjO0FBQ2Qsa0VBQWM7QUFDZCxrRUFBYztBQUNkO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvRG9taGFuZGxlci9kaXNwbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL0RvbWhhbmRsZXIvZG9tSW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL09iamVjdHMvbG9jYWxTdG9yYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvT2JqZWN0cy9wcm9qZWN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvT2JqZWN0cy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvT2JqZWN0cy90YXNrcy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBEb21EaXNwbGF5ID0gKCgpID0+e1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXlNb250aEZvcm1hdHRlciA9IChkYXksIG1vbnRoKT0+IHtcclxuICAgICAgICBsZXQgdGhpc0RheSA9ICcnXHJcbiAgICAgICAgbGV0IHRoaXNNb250aCA9ICcnXHJcbiAgICAgICAgY29uc3QgYWxsTW9udGggPSBbJ0phbicsJ0ZlYicsJ01hcicsJ0FwcicsJ01heScsJ0p1bicsJ0p1bCcsJ0F1ZycsJ1NlcCcsJ09jdCcsJ05vdicsJ0RlYyddXHJcbiAgICAgICAgc3dpdGNoIChkYXkpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjYXNlIDIxOlxyXG4gICAgICAgICAgICBjYXNlIDMxOlxyXG4gICAgICAgICAgICAgICAgdGhpc0RheSA9IGAke2RheX1zdGBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGNhc2UgMjI6XHJcbiAgICAgICAgICAgICAgICB0aGlzRGF5ID0gYCR7ZGF5fW5kYFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgY2FzZSAyMzpcclxuICAgICAgICAgICAgICAgIHRoaXNEYXkgPSBgJHtkYXl9cmRgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXNEYXkgPSBgJHtkYXl9dGhgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbE1vbnRoW21vbnRoXSArXCIgXCIgKyB0aGlzRGF5XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFycyB0aGUgY3VycmVudCBsaXN0IG9mIHRhc2tzLCB1c2VkIHdpdGggcHJvamVjdCBzZWxlY3Rpb25cclxuICAgIGNvbnN0IGNsZWFyVGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKVxyXG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJQcm9qZWN0U2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKVxyXG4gICAgICAgIHRhc2tOb3RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBEb21EaXNwbGF5LnNlbGVjdGVkUHJvamVjdE9wdGlvbihwcm9qZWN0SUQpXHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RPcHRpb24gPSAocHJvamVjdElEKSA9PiB7XHJcbiAgICAgICAgLy8gYWxlcnQocHJvamVjdElEKVxyXG4gICAgICAgIGNvbnN0IHRhc2tOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50IHByb2plY3RJbmRleCcsIHByb2plY3RJRClcclxuICAgICAgICB0YXNrTm90ZS52YWx1ZSA9IHByb2plY3RJRFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RJRClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrTm90ZSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIENsZWFycyB0aGUgbm90ZSBvZiBzZWxlY3RlZCB0YXNrLCBjYWxsZWQgd2hlbiB0YXNrIGlzIHNlbGVjdGVkXHJcbiAgICBjb25zdCBjbGVhck5vdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1jb250YWluZXInKVxyXG4gICAgICAgIHRhc2tOb3RlLmlubmVySFRNTCA9IGA8c2VjdGlvbiBjbGFzcz1cImVtcHR5LU5vdGVcIj48cD5ObyBUYXNrIFNlbGVjdGVkPC9wPjwvc2VjdGlvbj5gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlSGVhZGVyID0gKHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRlciAucHJvamVjdC1uYW1lJylcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvakRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkZXIgLnByb2plY3QtZGVzY3JpcHRpb24nKVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGVyIC5jdXJyZW50LWRhdGUnKVxyXG4gICAgICAgIGNvbnN0IHRoaXNEYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGN1cnJlbnRQcm9qLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcclxuICAgICAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGAke2RheU1vbnRoRm9ybWF0dGVyKHRoaXNEYXRlLmdldERhdGUoKSx0aGlzRGF0ZS5nZXRNb250aCgpKX1gIFxyXG4gICAgICAgIGN1cnJlbnRQcm9qRGVzYy50ZXh0Q29udGVudCA9IHByb2plY3REZXNjcmlwdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVRhc2tNb2RhbCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlhbG9nJylcclxuICAgICAgICBtb2RhbERpYWxvZy5pZCA9IGBtb2RhbC0ke2lkfWBcclxuICAgICAgICBtb2RhbERpYWxvZy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwiY3JlYXRlLXRhc2tcIj5cclxuICAgICAgICAgICAgICAgIDxsZWdlbmQ+Q3JlYXRlIFRhc2s8L2xlZ2VuZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFzayAxXCIgY2xhc3M9XCJjcmVhdGUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgY2xhc3M9XCJjcmVhdGUtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwidGFza1ByaW9yaXR5XCIgaWQ9XCJjcmVhdGVUYXNrUHJpb3JpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgc2VsZWN0ZWQ+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZFwiID5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiID5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJDcmVhdGVEdWVEYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRhc2stY3JlYXRlXCI+Y3JlYXRlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+YFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RNb2RhbCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0JylcclxuICAgICAgICBtb2RhbERpYWxvZy5pZCA9IGBtb2RhbFByb2plY3QtJHtpZH1gXHJcbiAgICAgICAgbW9kYWxEaWFsb2cuaW5uZXJIVE1MID0gYDxmb3JtIGFjdGlvbj1cIlwiY2xhc3M9J2NyZWF0ZSBQcm9qZWN0Jz5cclxuICAgICAgICA8bGVnZW5kPkNyZWF0ZSBQcm9qZWN0PC9sZWdlbmQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOZXcgUHJvamVjdFwiIGNsYXNzPVwiY3JlYXRlLXRpdGxlIHByb2plY3QtdGl0bGVcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgRGVzY3JpcHRpb25cIiBjbGFzcz1cImNyZWF0ZS1kZXNjIHByb2plY3QtdGl0bGVcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdC1jcmVhdGVcIj5jcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+YFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGVzIHRoZSBwcm9qZWN0LCBiZXN0IHVzZWQgd2l0aCBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgY3VycmVudCBleGlzaXRpbmcgcHJvamVjdHMuXHJcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKHRhc2ssIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0JylcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICBsaS5pZCA9IGlkXHJcbiAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2luZGl2aWR1YWxUYXNrJ1xyXG4gICAgICAgIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRhc2staXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGlkPVwidGFzay0ke2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzPVwidGFzay1uYW1lXCI+PC9sZWdlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3Rhc2sudGFza05hbWV9XCIgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cImR1ZURhdGVcIiB2YWx1ZT1cIiR7dGFzay50YXNrRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0YXNrUHJpb3JpdHlcIiBpZD1cInRhc2tQcmlvcml0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiICAke3Rhc2sudGFza1ByaW9yaXR5ID09PSAnbG93JyA/ICdzZWxlY3RlZD5sb3cnIDogJz5sb3cnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZFwiICAke3Rhc2sudGFza1ByaW9yaXR5ID09PSAnbWVkJyA/ICdzZWxlY3RlZD5tZWQnIDogJz5tZWQnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiAke3Rhc2sudGFza1ByaW9yaXR5ID09PSAnaGlnaCcgPyAnc2VsZWN0ZWQ+aGlnaCcgOiAnPmhpZ2gnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPVwiZGVsZXRlVGFza1wiPlg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb21wbGV0ZVwiIGlkPVwiY29tcGxldGVcIiAke3Rhc2sudGFza0NvbXBsZXRlID09IHRydWUgPyAnQ2hlY2tlZCcgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIGBcclxuICAgICAgICB0YXNrTGlzdC5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YClcclxuICAgICAgICBsaS5yZW1vdmUoKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVOb3RlID0gKHRhc2sscHJvamVjdE5hbWUsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1jb250YWluZXInKVxyXG4gICAgICAgIHRhc2tOb3RlLmlkID0gXCJub3RlLVwiK2lkXHJcbiAgICAgICAgdGFza05vdGUuaW5uZXJIVE1MID0gYDxzZWN0aW9uIGNsYXNzPVwidGFzay1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0YXNrLW5hbWUtYmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJkdWUtZGF0ZVwiPkR1ZSA8c3Bhbj4ke3Rhc2sudGFza0RhdGUuZ2V0RGF0ZSgpfS8ke3Rhc2sudGFza0RhdGUuZ2V0TW9udGgoKSsxfS8ke3Rhc2sudGFza0RhdGUuZ2V0RnVsbFllYXIoKX08L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgPlByaW9yaXR5IDxzcGFuIGNsYXNzPVwicHJpb3JpdHlcIj4ke3Rhc2sudGFza1ByaW9yaXR5fTwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0YXNrLW5vdGVcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrRGVzY1wiPlRhc2sgRGV0YWlsczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ0YXNrRGVzY1wiIGlkPVwidGFza0Rlc2NcIiBjb2xzPVwiMzBcIiB2YWx1ZT0nJHt0YXNrLnRhc2tEZXNjfScgcm93cz1cIjEwXCIgY2xhc3M9XCJ0YXNrZGVzY3JpcHRpb25cIj4ke3Rhc2sudGFza0Rlc2N9PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPmBcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNwbGF5cyB0aGUgVGFzayBkZXRhaWxzIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzY3JlZW4sIHNob3VsZCBiZSBhY3RpdmF0ZWQgd2hlbiB0YXNrIGlzIGNsaWNrZWQgZnJvbSB0aGUgdGFzayBsaXN0XHJcbiAgICBjb25zdCB0YXNrRGlzcGxheSA9ICh0YXNrLHByb2plY3ROYW1lLCB0YXNrSUQpID0+IHtcclxuICAgICAgICBjbGVhck5vdGUoKVxyXG4gICAgICAgIGlmICh0YXNrICYmIHByb2plY3ROYW1lICYmIHRhc2tJRCl7XHJcbiAgICAgICAgICAgIGNyZWF0ZU5vdGUodGFzayxwcm9qZWN0TmFtZSwgdGFza0lEKVxyXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUtYmlnJylcclxuICAgICAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tOYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpXHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sudGFza1ByaW9yaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlJylcclxuICAgICAgICAgICAgdGFza0R1ZURhdGUudmFsdWUgPSB0YXNrLnRhc2tEYXRlXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEZXNjJylcclxuICAgICAgICAgICAgdGFza0Rlc2MudmFsdWUgPSB0YXNrLnRhc2tEZXNjXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xlYXJOb3RlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiB7Y3JlYXRlVGFzayxyZW1vdmVUYXNrLCBjbGVhclRhc2ssIHRhc2tEaXNwbGF5LCBjbGVhck5vdGUsIHVwZGF0ZUhlYWRlciwgY3JlYXRlVGFza01vZGFsLCBjbGVhclByb2plY3RTZWxlY3Rpb24sIHNlbGVjdGVkUHJvamVjdE9wdGlvbn1cclxufSkoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb21EaXNwbGF5IiwiaW1wb3J0IHByb2plY3RIYW5kbGVyIGZyb20gXCIuLi9PYmplY3RzL3Byb2plY3RIYW5kbGVyXCI7XHJcbmltcG9ydCBEb21EaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXllclwiO1xyXG5pbXBvcnQgY3JlYXRlVGFza3MgZnJvbSBcIi4uL09iamVjdHMvdGFza3NcIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4uL09iamVjdHMvcHJvamVjdHNcIjtcclxuXHJcbmNvbnN0IGRvbUludGVyYWN0aW9uID0gKCgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gVGhlIEN1cnJlbnQgUHJvamVjdCBJZGVudGlmaWVyIGdpdmVuIGxpc3Qgb2YgUHJvamVjdHMsIG1hbmFnZWQgdGhyb3VnaCBpbmRleFxyXG4gICAgbGV0IFByb2plY3RJRCA9IDA7XHJcbiAgICBjb25zdCBnZXRQcm9qZWN0SUQgPSAoKSA9PiBQcm9qZWN0SURcclxuICAgIGNvbnN0IHNldFByb2plY3RJRCA9IChuZXdJRCkgPT4gUHJvamVjdElEID0gbmV3SURcclxuXHJcbiAgICAvLyBUaGUgY3VycmVudCBQcm9qZWN0IGhhbmRsZXIsIE5lZWRzIHRvIGJlIGluaXRpYWxpc2VkIHdoZW4gdGhlIGZ1bmN0aW9uIGZpcnN0IHJ1bnMgdG8gZnVuY3Rpb24gcHJvcGVybHlcclxuICAgIGxldCBnbG9iYWxQcm9qZWN0ID0gJydcclxuICAgIGNvbnN0IHNldEFsbFByb2plY3QgPSAoYWxsUHJvaikgPT4gZ2xvYmFsUHJvamVjdCA9IGFsbFByb2pcclxuICAgIGNvbnN0IGdldEFsbFByb2plY3QgPSAoKSA9PiBnbG9iYWxQcm9qZWN0XHJcblxyXG4gICAgLy8gU2F2aW5nIGZ1bmN0aW9uYWxpdHksIFJ1bnMgZXZlcnkgNSBzZWNvbmRzXHJcbiAgICBjb25zdCBzYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0RGF0YScsIGdldEFsbFByb2plY3QoKS5leHBvcnRQcm9qZWN0KCkpIFxyXG4gICAgfVxyXG4gICAgLy8gRGV0ZXJtaW5lcyB0aGUgc2F2aW5nIGR1cmF0aW9uXHJcbiAgICBjb25zdCAgcGVyaW9kaWNTYXZlID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2F2ZSgpXHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIE9uIHRoZSBpbml0aWFsIGxvYWQsIHNldCBpdCB1cCB3aXRoIHRoZSBmaXJzdCBjaG9zZW4gcHJvamVjdCwgc2hvdWxkIGJlIGNoYW5nZWQgdG8gbGFzdCBzYXZlZCBwcm9qZWN0IGRvd24gdGhlIGxpbmVcclxuICAgIGNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJET00gZnVsbHkgbG9hZGVkIGFuZCBwYXJzZWRcIik7XHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuY3JlYXRlVGFza01vZGFsKGAwYClcclxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvblJlbmRlcihnZXRBbGxQcm9qZWN0KCkuc2hvd1Byb2plY3QoKVswXSwgMClcclxuICAgICAgICAgICAgdGFza01vZGFsT3BlbihnZXRBbGxQcm9qZWN0KCkuc2hvd1Byb2plY3QoKVswXSwgYDBgKVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9qZWN0IHNlbGVjdGlvbiBhbmQgdXBkYXRpbmcgdGhlIHRhc2tzIHZpc2libGUgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgcHJvamVjdFxyXG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBwcm9qZWN0IHdpdGggc2V0UHJvamVjdElELlxyXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdGlvbk9wdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0U2VsZWN0aW9uJyk7XHJcbiAgICAgICAgcHJvamVjdE1vZGFsT3BlbigpXHJcbiAgICAgICAgcmVuZGVyUHJvamVjdE9wdGlvbnMoIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3MoIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE9uIGRyb3Bkb3duIGNoYW5nZSwgcmVSZW5kZXIgdGhlIFRhc2sgTGlzdHNcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0VGFza3MgPSAoIGN1cnJlbnRQcm9qZWN0KSA9PntcclxuICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGdldEFsbFByb2plY3QoKS5zaG93UHJvamVjdCgpW2UudGFyZ2V0LnZhbHVlXVxyXG4gICAgICAgICAgICBEb21EaXNwbGF5LmNyZWF0ZVRhc2tNb2RhbChgJHtnZXRQcm9qZWN0SUQoKX1gKVxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyKHNlbGVjdGVkUHJvamVjdCwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIHRhc2tNb2RhbE9wZW4oc2VsZWN0ZWRQcm9qZWN0LCBgJHtnZXRQcm9qZWN0SUQoKX1gKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVuZGVyIHRoZSBkcm9wZG93biBtZW51IGNvbnRhaW5pbmcgYWxsIHByb2plY3RzIHdlIGN1cnJlbnRseSBoYXZlIGFjY2VzcyB0b1xyXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdE9wdGlvbnMgPSAoIGN1cnJlbnRQcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgRG9tRGlzcGxheS5jbGVhclByb2plY3RTZWxlY3Rpb24oKVxyXG4gICAgICAgIGdldEFsbFByb2plY3QoKS5zaG93UHJvamVjdCgpLmZvckVhY2goKHByb2plY3QsIHByb2pJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0aGlzUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXNQcm9qZWN0LnZhbHVlID0gcHJvakluZGV4XHJcbiAgICAgICAgICAgIHRoaXNQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKClcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QuYXBwZW5kKHRoaXNQcm9qZWN0KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbmRlciB0aGUgUGFnZSBmb3IgdGhlIGN1cnJlbnRseSBTZWxlY3RlZCBQcm9qZWN0IGdpdmVuIHRoZSBwcm9qZWN0IE9iamVjdCBhbmQgcHJvamVjdCBJZCwgc2V0IHRoZSBHbG9iYWwgUHJvamVjdCBJRFxyXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdGlvblJlbmRlciA9IChzZWxlY3RlZFByb2plY3QsIHByb2plY3RJRCkgPT4ge1xyXG4gICAgICAgIERvbURpc3BsYXkuY2xlYXJUYXNrKClcclxuICAgICAgICBzZXRQcm9qZWN0SUQocHJvamVjdElEKVxyXG4gICAgICAgIC8vIElmIHRoZSBwcm9qZWN0IGRvZXMgbm90IGdpdmUgTnVsbFxyXG4gICAgICAgIGlmIChzZWxlY3RlZFByb2plY3Qpe1xyXG4gICAgICAgICAgICBEb21EaXNwbGF5LnNlbGVjdGVkUHJvamVjdE9wdGlvbihwcm9qZWN0SUQpXHJcbiAgICAgICAgICAgIERvbURpc3BsYXkudXBkYXRlSGVhZGVyKHNlbGVjdGVkUHJvamVjdC5nZXROYW1lKCksIHNlbGVjdGVkUHJvamVjdC5nZXREZXNjKCkpXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2ssIHRhc2tJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgRG9tRGlzcGxheS5jcmVhdGVUYXNrKHRhc2suZ2V0QWxsKCksIGAke2dldFByb2plY3RJRCgpfXAke3Rhc2tJbmRleH1gKVxyXG4gICAgICAgICAgICAgICAgdGFza1VwZGF0ZShzZWxlY3RlZFByb2plY3QsIHRhc2ssIGAke2dldFByb2plY3RJRCgpfXAke3Rhc2tJbmRleH1gLCB0YXNrSW5kZXgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRhc2tPcGVuKHNlbGVjdGVkUHJvamVjdCkgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBPcGVucyB0aGUgRXhwYW5kZWQgdmlldyBvZiB0aGUgUHJvamVjdCwgc2hvdyBsaXN0IG9mIHRhc2tzXHJcbiAgICBjb25zdCB0YXNrT3BlbiA9IChjdXJyZW50UHJvaikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZGl2aWR1YWxUYXNrJyk7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCggKHRhc2ssIHRhc2tJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrSUQgPSBgJHtnZXRQcm9qZWN0SUQoKX1wJHt0YXNrSW5kZXh9YFxyXG4gICAgICAgICAgICBjb25zdCB0YXNrSW5mbyA9IGN1cnJlbnRQcm9qLmdldFRhc2tzKClbdGFza0luZGV4XVxyXG4gICAgICAgICAgICAvLyBmb3IgZWFjaCBvZiB0aGUgdGFza3MsIGV4cGFuZCBvbiBjbGljaywgc2hvd2luZyB0aGUgdGFzayBpbmZvcm1hdGlvblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICAgICAgICAgICAgICBEb21EaXNwbGF5LnRhc2tEaXNwbGF5KHRhc2tJbmZvLmdldEFsbCgpLGN1cnJlbnRQcm9qLmdldE5hbWUoKSx0YXNrSUQpXHJcbiAgICAgICAgICAgICAgICBub3RlVXBkYXRlKHRhc2tJbmZvLCB0YXNrSUQpXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IGBkZWxldGVUYXNrYCl7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9tRGlzcGxheS5yZW1vdmVUYXNrKHRhc2tJRClcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvai5yZW1vdmVUYXNrKHRhc2tJbmRleClcclxuICAgICAgICAgICAgICAgICAgICBEb21EaXNwbGF5LnRhc2tEaXNwbGF5KClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIENyZWF0ZSBhbiBleHBhbmRlZCBub3RlIGZvciBlYWNoIHRhc2sgYW5kIHNhdmUgdGhlIGNoYW5nZWQgdmFsdWVzXHJcbiAgICBjb25zdCBub3RlVXBkYXRlID0gKGN1cnJlbnRUYXNrLCB0YXNrSUQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNub3RlLSR7dGFza0lEfSAjdGFza0Rlc2NgKVxyXG4gICAgICAgIGlmICh0YXNrRGVzYykge1xyXG4gICAgICAgICAgICB0YXNrRGVzYy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2suY2hhbmdlRGVzYyhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBEb21EaXNwbGF5LmNsZWFyTm90ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIGFueSBjaGFuZ2VzIHRvIHRoZSBpbmRpdmlkdWFsIHRhc2sgaW5wdXRzLCBhbmQgZGVsZXRlIHRhc2tzIHdpdGggYSBidXR0b24gY2xpY2tcclxuICAgIGNvbnN0IHRhc2tVcGRhdGUgPSAoc2VsZWN0ZWRQcm9qZWN0LCBjdXJyZW50VGFzaywgdGFza0lELCB0YXNrSW5kZXgpID0+IHtcclxuICAgICAgICAvLyBjaGFuZ2UgZm9yIGVhY2hcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tJRH0gLnRhc2stdGl0bGVgKVxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza0lEfSAjdGFza1ByaW9yaXR5YClcclxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tJRH0gI2NvbXBsZXRlYClcclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza0lEfSAjZHVlRGF0ZWApXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbm90ZS0ke3Rhc2tJRH0gI3Rhc2tEZXNjYClcclxuICAgICAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IGN1cnJlbnRUYXNrLmNoYW5nZU5hbWUoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgIHRhc2tDb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGU9PiBjdXJyZW50VGFzay5jaGFuZ2VDb21wbGV0aW9uKCkpXHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiBjdXJyZW50VGFzay5jaGFuZ2VQcmlvcml0eShlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgdGFza0RhdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IGN1cnJlbnRUYXNrLmNoYW5nZURhdGUoZS50YXJnZXQudmFsdWUpKVxyXG5cclxuICAgICAgICAvLyBjb25zdCBEZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tJRH0gLmRlbGV0ZVRhc2tgKVxyXG4gICAgICAgIC8vIERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0YXNrSW5kZXgpXHJcbiAgICAgICAgLy8gICAgIERvbURpc3BsYXkucmVtb3ZlVGFzayh0YXNrSUQpXHJcbiAgICAgICAgLy8gICAgIHNlbGVjdGVkUHJvamVjdC5yZW1vdmVUYXNrKHRhc2tJbmRleClcclxuICAgICAgICAvLyAgICAgRG9tRGlzcGxheS50YXNrRGlzcGxheSgpICAgIFxyXG4gICAgICAgIC8vIH0pIFxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTU9EQUxTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuICAgIC8vIEFkZCB0YXNrIE1vZGFsIHRvIGNyZWF0ZSBuZXcgdGFza3MgZm9yIHRoZSBjdXJyZW50IHByb2plY3RcclxuICAgIGNvbnN0IHRhc2tNb2RhbE9wZW4gPSAodGhpc1Byb2osIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlhbG9nJyk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY3JlYXRlJylcclxuICAgICAgICBjb25zdCB0YXNrT3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5jcmVhdGUtdGFzaycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpc1Byb2ogJiYgZ2V0QWxsUHJvamVjdCgpLmdldENvdW50KCkpe1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrTW9kYWwgPSB0YXNrTW9kYWxHZXQodGhpc1Byb2osIGlkLCB0YXNrTW9kYWwsIGNyZWF0ZUJ1dHRvbilcclxuICAgICAgICAgICAgdGFza09wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgICAgIHRhc2tGb3JtLnJlc2V0KClcclxuICAgICAgICAgICAgICAgIHRhc2tNb2RhbC5zaG93TW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIG5ld1Rhc2tNb2RhbFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgcHJvamVjdCBtb2RhbCwgY3JlYXRlIG5ldyBwcm9qZWN0LCBhbmQgc2V0IGl0IGFzIGN1cnJlbnQgcHJvamVjdCwgcmVmcmVzaCB0aGUgcGFnZVxyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kaWFsb2cnKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jcmVhdGUnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RPcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE1vZGFsID0gcHJvamVjdE1vZGFsR2V0KHByb2plY3RNb2RhbCwgY3JlYXRlQnV0dG9uKVxyXG4gICAgICAgIHByb2plY3RPcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgIHByb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdE1vZGFsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gTW9kYWwgRm9yIERlbGV0aW5nIHRoZSBjdXJyZW50IHNlbGVjdGVkIFByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3REZWxldGVNb2RhbCA9ICgoY3VycmVudFByb2plY3QsIHByb2plY3RNb2RhbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlbGV0ZScpXHJcbiAgICAgICAgY29uc3QgaWdub3JlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlnbm9yZS1kZWxldGUnKVxyXG4gICAgICAgIC8vIE9uIERlbGV0ZSwgUmVmcmVzaCB0aGUgcGFnZSBpbnRvIHRoZSBmaXJzdCBQcm9qZWN0IHRoYXQgRXhpc3RzLCBhbmQgcmVzZXQgdGhlIE5vdGVzXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGdldEFsbFByb2plY3QoKS5nZXRDb3VudCgpPjEpe1xyXG4gICAgICAgICAgICAgICAgZ2V0QWxsUHJvamVjdCgpLnJlbW92ZVByb2plY3QoZ2V0UHJvamVjdElEKCkpXHJcbiAgICAgICAgICAgICAgICBzZXRQcm9qZWN0SUQoMClcclxuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RPcHRpb25zKCBjdXJyZW50UHJvamVjdClcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3MoIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgaWYoZ2V0QWxsUHJvamVjdCgpLnNob3dQcm9qZWN0KClbMF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RTZWxlY3Rpb25SZW5kZXIoZ2V0QWxsUHJvamVjdCgpLnNob3dQcm9qZWN0KClbMF0sIDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEb21EaXNwbGF5LmNsZWFyTm90ZSgpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1RoZXJlIE11c3QgYmUgTWluaW11bSBvZiAxIFByb2plY3QnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RNb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIHNhdmUoKSAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZ25vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgLy8gT3BlbmluZyBhIGRlbGV0ZSBtb2RlbCBmb3IgdGhlIHByb2plY3Qgb24gYnV0dG9uIGNsaWNrXHJcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlTW9kYWxPcGVuID0gKCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0U2VsZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kZWxldGUtZGlhbG9nJyk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdE9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXRoaXMtcHJvamVjdCcpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RNb2RhbCA9IHByb2plY3REZWxldGVNb2RhbChjdXJyZW50UHJvamVjdCwgZGVsZXRlTW9kYWwpXHJcbiAgICAgICAgcHJvamVjdE9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgZGVsZXRlTW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RNb2RhbFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSkoKVxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgdGFzayBhbmQgYWRkIGl0IHRvIHRoZSBjdXJyZW50IHByb2plY3QsIHJlcmVuZGVyIHRoZSBwYWdlXHJcbiAgICBjb25zdCB0YXNrTW9kYWxHZXQgPSAoKHRoaXNQcm9qLCBpZCwgdGFza01vZGFsLCBjcmVhdGVCdXR0b24pID0+IHtcclxuICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFza0luZm8gPSB0YXNrTW9kYWxJbmZvKClcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2tzKHRhc2tJbmZvLk5hbWUsIHRhc2tJbmZvLmRlc2MsIG5ldyBEYXRlKHRhc2tJbmZvLmRhdGUpLCB0YXNrSW5mby5wcmlvcml0eSwgdGFza0luZm8uY29tcGxldGUpXHJcbiAgICAgICAgICAgIHRoaXNQcm9qLmFkZFRhc2sobmV3VGFzaylcclxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvblJlbmRlcih0aGlzUHJvaiwgaWQpXHJcblxyXG4gICAgICAgICAgICB0YXNrTW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICBzYXZlKCkgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIE5ldyBwcm9qZWN0IHNldCBpdFxyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsR2V0ID0gKChwcm9qZWN0TW9kYWwsIGNyZWF0ZUJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb2plY3RNb2RhbEluZm8oKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0SW5mby5OYW1lLCBwcm9qZWN0SW5mby5kZXNjKVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGdldEFsbFByb2plY3QoKS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpXHJcbiAgICAgICAgICAgIHNldFByb2plY3RJRChnZXRBbGxQcm9qZWN0KCkuZ2V0Q291bnQoKS0xKVxyXG4gICAgICAgICAgICBEb21EaXNwbGF5LmNyZWF0ZVRhc2tNb2RhbChnZXRBbGxQcm9qZWN0KCkuZ2V0Q291bnQoKS0xKVxyXG4gICAgICAgICAgICB0YXNrTW9kYWxPcGVuKG5ld1Byb2plY3QsIGdldEFsbFByb2plY3QoKS5nZXRDb3VudCgpLTEpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0U2VsZWN0aW9uJyk7XHJcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RPcHRpb25zKCBjdXJyZW50UHJvamVjdClcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcyggY3VycmVudFByb2plY3QpXHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyKG5ld1Byb2plY3QsIGdldEFsbFByb2plY3QoKS5nZXRDb3VudCgpLTEpXHJcblxyXG5cclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgc2F2ZSgpICBcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsSW5mbyA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10aXRsZS5wcm9qZWN0LXRpdGxlJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtZGVzYy5wcm9qZWN0LXRpdGxlJylcclxuICAgICAgICByZXR1cm4ge05hbWU6cHJvamVjdE5hbWUudmFsdWUsIGRlc2M6cHJvamVjdERlc2MudmFsdWV9XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXNrTW9kYWxJbmZvID0gKCkgPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRpdGxlJylcclxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtZGVzYycpXHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRhc2tQcmlvcml0eScpXHJcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ3JlYXRlRHVlRGF0ZScpXHJcbiAgICAgICAgLy8gY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlJylcclxuICAgICAgICAvLyBOYW1lPzogc3RyaW5nLCBkZXNjPzogc3RyaW5nLCBkYXRlPzogRGF0ZSwgcHJpb3JpdHk/OiBzdHJpbmcsIGNvbXBsZXRlPzogYm9vbGVhblxyXG4gICAgICAgIC8vIHJldHVybiB0YXNrTmFtZS52YWx1ZSwgdGFza0Rlc2MudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUsIGNvbXBsZXRlOnRhc2tDb21wbGV0ZS5jaGVja2VkXHJcbiAgICAgICAgcmV0dXJuIHtOYW1lOnRhc2tOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICBkZXNjOnRhc2tEZXNjLnZhbHVlLFxyXG4gICAgICAgICAgICBkYXRlOnRhc2tEYXRlLnZhbHVlIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHByaW9yaXR5OnRhc2tQcmlvcml0eS52YWx1ZSwgXHJcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlOnRhc2tDb21wbGV0ZS5jaGVja2VkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7cHJvamVjdFNlbGVjdGlvbk9wdGlvbiwgaW5pdGlhbExvYWQsIHNldEFsbFByb2plY3R9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb21JbnRlcmFjdGlvbjtcclxuIiwiZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XHJcbiAgICBsZXQgc3RvcmFnZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcclxuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcclxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcclxuICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxyXG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcclxuICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxyXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXHJcbiAgICAgICAgc3RvcmFnZSAmJlxyXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZUF2YWlsYWJsZVxyXG4gICIsIi8vIGlmIGluIGxvY2FsIHN0b3JhZ2UgbG9hZCB0aG9zZVxyXG5pbXBvcnQgY3JlYXRlVGFza3MgZnJvbSBcIi4vdGFza3NcIlxyXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuXHJcbmNvbnN0IHByb2plY3RIYW5kbGVyID0gKHByb2plY3Q9W10pID0+IHtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdHMgPSBwcm9qZWN0O1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RIYW5kbGVyID0gKG5ld0RhdGEpID0+IGN1cnJlbnRQcm9qZWN0cyA9IG5ld0RhdGE7XHJcblxyXG4gICAgbGV0IHByb2plY3RDb3VudCA9IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7XHJcbiAgICBjb25zdCBnZXRDb3VudCA9ICgpID0+IHByb2plY3RDb3VudDtcclxuICAgIGNvbnN0IHNldENvdW50ID0gKG5ld0NvdW50KSA9PiAgcHJvamVjdENvdW50ID0gbmV3Q291bnRcclxuXHJcbiAgICBjb25zdCBsb2FkUHJvamVjdCA9IChwcm9qZWN0RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nJywgcHJvamVjdERhdGEpXHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IEpTT04ucGFyc2UocHJvamVjdERhdGEpO1xyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFByb2plY3QgPSBwcm9qZWN0SGFuZGxlcigpXHJcbiAgICAgICAgZm9yKGNvbnN0IHByb2ogaW4gbmV3UHJvamVjdCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCgpXHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmltcG9ydFByb2plY3QobmV3UHJvamVjdFtwcm9qXVswXSlcclxuICAgICAgICAgICAgZm9yKGNvbnN0IHRhc2sgaW4gbmV3UHJvamVjdFtwcm9qXVsxXSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IGNyZWF0ZVRhc2tzKClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrLmltcG9ydFRhc2tzKG5ld1Byb2plY3RbcHJval1bMV1bdGFza10pXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRUYXNrKGN1cnJlbnRUYXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9jZXNzZWRQcm9qZWN0LmFkZFByb2plY3QoY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENvdW50KHByb2Nlc3NlZFByb2plY3Quc2hvd1Byb2plY3QoKS5sZW5ndGgpXHJcbiAgICAgICAgbmV3UHJvamVjdEhhbmRsZXIocHJvY2Vzc2VkUHJvamVjdC5zaG93UHJvamVjdCgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cG9ydFByb2plY3QgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q29sbGVjdGlvbnMgPSB7fVxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBwcm9qSW5kZXgpID0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IFtdXHJcbiAgICAgICAgcHJvamVjdENvbGxlY3Rpb25zW3Byb2pJbmRleF0gPSBbcHJvamVjdC5leHBvcnRQcm9qZWN0KCksIHByb2plY3RUYXNrc11cclxuICAgICAgICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKVxyXG4gICAgICAgIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdENvbGxlY3Rpb25zW3Byb2pJbmRleF1bMV0ucHVzaCh0YXNrLmV4cG9ydFRhc2soKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHByb2plY3RDb2xsZWN0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93UHJvamVjdCA9ICgpID0+IGN1cnJlbnRQcm9qZWN0cztcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcclxuICAgICAgICBjdXJyZW50UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxyXG4gICAgICAgICsrcHJvamVjdENvdW50XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBnZXRDb3VudCgpKVxyXG4gICAgICAgIGlmIChpbmRleCA8IGdldENvdW50KCkpIHtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC0tcHJvamVjdENvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7c2hvd1Byb2plY3QsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGxvYWRQcm9qZWN0LCBleHBvcnRQcm9qZWN0LCBjdXJyZW50UHJvamVjdHMsIGdldENvdW50fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0SGFuZGxlciIsImNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdE5hbWU9JycsIHByb2plY3REZXNjPScnKSA9PiB7XHJcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgbGV0IGRlc2MgPSBwcm9qZWN0RGVzYztcclxuICAgIGxldCB0YXNrTGlzdCA9IFtdO1xyXG4gICAgbGV0IHRhc2tDb3VudCA9IHRhc2tMaXN0Lmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBnZXRDb3VudCA9ICgpID0+IHRhc2tDb3VudDtcclxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xyXG4gICAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IGRlc2M7XHJcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHRhc2tMaXN0O1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZU5hbWUgPSAobmV3TmFtZSkgPT4gbmFtZSA9IG5ld05hbWUgO1xyXG4gICAgY29uc3QgY2hhbmdlRGVzYyA9IChuZXdEZXNjKSA9PiBkZXNjID0gbmV3RGVzYyA7XHJcblxyXG4gICAgY29uc3QgYWRkVGFzayA9IChuZXdUYXNrKSA9PiB7XHJcbiAgICAgICAgKyt0YXNrQ291bnQgXHJcbiAgICAgICAgdGFza0xpc3QucHVzaChuZXdUYXNrKVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPCBnZXRDb3VudCgpKSB7XHJcbiAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC0tdGFza0NvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltcG9ydFByb2plY3QgPSAodGFza1Byb2plY3QpID0+IHtcclxuICAgICAgICB0YXNrUHJvamVjdCA9IEpTT04ucGFyc2UodGFza1Byb2plY3QpO1xyXG4gICAgICAgIG5hbWUgPSB0YXNrUHJvamVjdC5uYW1lO1xyXG4gICAgICAgIGRlc2MgPSB0YXNrUHJvamVjdC5kZXNjO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cG9ydFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFsbCA9IHtuYW1lLGRlc2N9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFsbClcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge2dldENvdW50LGdldE5hbWUsZ2V0RGVzYyxnZXRUYXNrcyxjaGFuZ2VOYW1lLGNoYW5nZURlc2MsYWRkVGFzayxyZW1vdmVUYXNrLGltcG9ydFByb2plY3QsZXhwb3J0UHJvamVjdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3QiLCJjb25zdCBjcmVhdGVUYXNrcyA9IChOYW1lPScnLGRlc2M9JycsZGF0ZT1uZXcgRGF0ZSgpLHByaW9yaXR5PSdsb3cnLGNvbXBsZXRlPWZhbHNlKSA9PiB7XHJcbiAgICBsZXQgdGFza05hbWUgPSBOYW1lO1xyXG4gICAgbGV0IHRhc2tEZXNjID0gZGVzYztcclxuICAgIGxldCB0YXNrRGF0ZSA9IGRhdGU7XHJcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICBsZXQgdGFza0NvbXBsZXRlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHRhc2tEYXRlO1xyXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHRhc2tOYW1lO1xyXG4gICAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IHRhc2tEZXNjO1xyXG4gICAgY29uc3QgZ2V0UHJpb3IgPSAoKSA9PiB0YXNrUHJpb3JpdHk7XHJcbiAgICBjb25zdCBnZXRDb21wbGV0ZSA9ICgpID0+IHRhc2tDb21wbGV0ZTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VEYXRlID0gKG5ld0RhdGUpID0+IHRhc2tEYXRlID0gbmV3IERhdGUobmV3RGF0ZSk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcclxuICAgICAgICBpZiAocHJpb3JpdHkgPT09ICdsb3cnKXtcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5ID0gJ2xvdydcclxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnbWVkJykge1xyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkgPSAnbWVkJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eSA9ICdoaWdoJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlTmFtZSA9IChuZXdOYW1lKSA9PiB0YXNrTmFtZSA9IG5ld05hbWUgO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZURlc2MgPSAobmV3RGVzYykgPT4gdGFza0Rlc2MgPSBuZXdEZXNjIDtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDb21wbGV0aW9uID0gKCkgPT4gdGFza0NvbXBsZXRlID8gdGFza0NvbXBsZXRlID0gZmFsc2UgOiB0YXNrQ29tcGxldGUgPSB0cnVlIDtcclxuXHJcbiAgICBjb25zdCBnZXRBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHt0YXNrTmFtZTogdGFza05hbWUsIHRhc2tEZXNjOiB0YXNrRGVzYywgdGFza0RhdGU6IHRhc2tEYXRlLCB0YXNrUHJpb3JpdHk6IHRhc2tQcmlvcml0eSx0YXNrQ29tcGxldGU6IHRhc2tDb21wbGV0ZX1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1wb3J0VGFza3MgPSAodGFza09iaikgPT4ge1xyXG4gICAgICAgIHRhc2tPYmogPSBKU09OLnBhcnNlKHRhc2tPYmopO1xyXG4gICAgICAgIHRhc2tOYW1lID0gdGFza09iai50YXNrTmFtZTtcclxuICAgICAgICB0YXNrRGVzYyA9IHRhc2tPYmoudGFza0Rlc2M7XHJcbiAgICAgICAgdGFza0RhdGUgPW5ldyBEYXRlKHRhc2tPYmoudGFza0RhdGUpO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eSA9IHRhc2tPYmoudGFza1ByaW9yaXR5O1xyXG4gICAgICAgIHRhc2tDb21wbGV0ZSA9IHRhc2tPYmoudGFza0NvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cG9ydFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFsbCA9IHt0YXNrTmFtZSx0YXNrRGVzYyx0YXNrRGF0ZSx0YXNrUHJpb3JpdHksdGFza0NvbXBsZXRlfVxyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhbGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXREYXRlLCBnZXROYW1lLCBnZXREZXNjLCBnZXRQcmlvciwgZ2V0Q29tcGxldGUsIGNoYW5nZURhdGUsIGNoYW5nZVByaW9yaXR5LCBjaGFuZ2VOYW1lLCBjaGFuZ2VEZXNjLCBjaGFuZ2VDb21wbGV0aW9uLGltcG9ydFRhc2tzLGV4cG9ydFRhc2ssZ2V0QWxsfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tzIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlVGFza3MgZnJvbSBcIi4vT2JqZWN0cy90YXNrc1wiXHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL09iamVjdHMvcHJvamVjdHNcIjtcclxuaW1wb3J0IHByb2plY3RIYW5kbGVyIGZyb20gXCIuL09iamVjdHMvcHJvamVjdEhhbmRsZXJcIjtcclxuaW1wb3J0IHN0b3JhZ2VBdmFpbGFibGUgZnJvbSBcIi4vT2JqZWN0cy9sb2NhbFN0b3JhZ2VIYW5kbGVyXCI7XHJcbmltcG9ydCBEb21EaXNwbGF5IGZyb20gXCIuL0RvbWhhbmRsZXIvZGlzcGxheWVyXCI7XHJcbmltcG9ydCBkb21JbnRlcmFjdGlvbiBmcm9tIFwiLi9Eb21oYW5kbGVyL2RvbUludGVyYWN0aW9uXCI7XHJcblxyXG4vLyBJbml0aWFsaXNlIHRoZSBUZW1wbGF0ZSBQcm9qZWN0XHJcbmNvbnN0IHRhc2sxID0gY3JlYXRlVGFza3MoJ1Rhc2sgMScsJ1RoaXMgaXMgdGhlIEZpcnN0IFRhc2snLG5ldyBEYXRlKCksJ2xvdycpO1xyXG5jb25zdCBwcm9qID0gY3JlYXRlUHJvamVjdCgnUHJvamVjdCAxJywgJ1RoaXMgaXMgdGhlIGRlZmF1bHQgUHJvamVjdCcpO1xyXG5jb25zdCBhbGxQcm9qID0gcHJvamVjdEhhbmRsZXIoKVxyXG5wcm9qLmFkZFRhc2sodGFzazEpO1xyXG5hbGxQcm9qLmFkZFByb2plY3QocHJvaik7XHJcblxyXG4vLyBJZiBQcm9qZWN0IGV4aXN0cywgTG9hZCB0aGF0IFByb2plY3QsIGVsc2UsIHV0aWxpc2UgdGhlIHRlbXBsYXRlIHByb2plY3RcclxuY29uc3Qgc3RvcmFnZVN0YXR1cyA9IHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpO1xyXG5zdG9yYWdlU3RhdHVzICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0RGF0YScpID8gYWxsUHJvai5sb2FkUHJvamVjdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdERhdGEnKSkgOiBhbGxQcm9qXHJcblxyXG5cclxuZG9tSW50ZXJhY3Rpb24uaW5pdGlhbExvYWQoYWxsUHJvailcclxuZG9tSW50ZXJhY3Rpb24uc2V0QWxsUHJvamVjdChhbGxQcm9qKVxyXG5kb21JbnRlcmFjdGlvbi5wcm9qZWN0U2VsZWN0aW9uT3B0aW9uKGFsbFByb2opXHJcbmRvbUludGVyYWN0aW9uXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9