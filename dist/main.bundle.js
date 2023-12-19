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
    // Clears the note of selected task, called when task is selected
    const clearNote = () => {
        const taskNote = document.querySelector('.note-container')
        taskNote.innerHTML = '';
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
                                                <button class="delete">X</button>
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
    
    
    return {createTask, clearTask, taskDisplay, clearNote, updateHeader, createTaskModal, clearProjectSelection}
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
    
    // const allProj = projectHandler
    let ProjectID = 0;
    const getProjectID = () => ProjectID
    const setProjectID = (newID) => ProjectID = newID

    let globalProject = ''
    const setAllProject = (allProj) => globalProject = allProj
    const getAllProject = () => globalProject

    const save = () => {
        localStorage.setItem('projectData', getAllProject().exportProject()) 
        console.log('saved to storage')
        // console.log(localStorage.getItem('projectData'))
    }
    
    const currentTask = {currentTitle:'',currentDesc:'',currentPriority:'low',currentDate:'',currentCompletion:''}

    const initialLoad = (allProj) => {
        document.addEventListener("DOMContentLoaded", () => {
            console.log("DOM fully loaded and parsed");
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTaskModal(`0`)
            projectSelectionRender(allProj.showProject()[0], 0)
            taskModalOpen(allProj.showProject()[0], `0`)

        });
    }

    // Project selection and updating the tasks visible based on the current selected project
    // Keep track of the current project with setProjectID.
    const projectSelectionOption = (allProj) => {
        const currentProject = document.querySelector('#ProjectSelection');
        // console.log(allProj.showProject())
        projectModalOpen(allProj)
        changeSelection(allProj, currentProject)

        currentProject.addEventListener("change", e =>{
            const selectedProject = allProj.showProject()[e.target.value]
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTaskModal(`${getProjectID()}`)
            projectSelectionRender(selectedProject, e.target.value)
            taskModalOpen(selectedProject, `${getProjectID()}`)
        })
    }

    const changeSelection = (allProj, currentProject) => {
        _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].clearProjectSelection()
        allProj.showProject().forEach((project, projIndex) => {
            const thisProject = document.createElement('option')
            thisProject.value = projIndex
            thisProject.textContent = project.getName()
            // console.log(thisProject)
            currentProject.append(thisProject)
            
        });
    }

    const projectSelectionRender = (selectedProject, projectID) => {
        _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].clearTask()
        setProjectID([projectID])
        _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].updateHeader(selectedProject.getName(), selectedProject.getDesc())
        selectedProject.getTasks().forEach((task, taskIndex) => {
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(task.getAll(), `${getProjectID()}p${taskIndex}`)
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
                _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].taskDisplay(taskInfo.getAll(),currentProj.getName(), taskID)
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

    const taskModalOpen = (thisProj, id) => {
        const taskModal = document.querySelector('.task-dialog');
        const createButton = document.querySelector('.task-create')
        const taskOpenButton = document.querySelector('.add-task');
        const newTaskModal = taskModalGet(thisProj, id, taskModal, createButton)
        taskOpenButton.addEventListener('click', () =>{
            taskModal.showModal();
            newTaskModal
        })
        
    }

    const projectModalOpen = (allProj) => {
        const currentProject = document.querySelector('#ProjectSelection');
        const projectModal = document.querySelector('.project-dialog');
        const createButton = document.querySelector('.project-create')
        const projectOpenButton = document.querySelector('.add-project');
        const newProjectModal = projectModalGet(allProj, currentProject, projectModal, createButton)
        projectOpenButton.addEventListener('click', () =>{
            projectModal.showModal();
            newProjectModal
            
        })
        
    }

    const taskModalGet = ((thisProj, id, taskModal, createButton) => {
        createButton.addEventListener('click', e => {
            console.log(e, createButton)
            const taskInfo = taskModalInfo()
            const newTask = (0,_Objects_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(taskInfo.Name, taskInfo.desc, new Date(taskInfo.date), taskInfo.priority, taskInfo.complete)
            thisProj.addTask(newTask)
            projectSelectionRender(thisProj, id)

            taskModal.close()
            save()     
        })
    })

    const projectModalGet = ((allProj,currentProject, projectModal, createButton) => {
        createButton.addEventListener('click', e => {
            const projectInfo = projectModalInfo()
            const newProject = (0,_Objects_projects__WEBPACK_IMPORTED_MODULE_3__["default"])(projectInfo.Name, projectInfo.desc)
            allProj.addProject(newProject)
            changeSelection(allProj, currentProject)
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
        const taskComplete = document.querySelector('#complete')
        // Name?: string, desc?: string, date?: Date, priority?: string, complete?: boolean
        // return taskName.value, taskDesc.value, taskDate.value, taskPriority.value, complete:taskComplete.checked
        return {Name:taskName.value,
            desc:taskDesc.value,
            date:taskDate.value || new Date(),
            priority:taskPriority.value, 
            // complete:taskComplete.checked
        }
    }
    const  periodicSave = window.setInterval(function(){
        save()
      }, 5000);

        
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

    const loadProject = (projectData) => {
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
        return processedProject;
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

    const addProject = (newProject) => currentProjects.push(newProject)
    
    
    const removeProject = (index) => {
        if (index < currentProjects.length) {
            currentProjects.splice(index, 1);
        }
    }

    return {showProject, addProject, removeProject, loadProject, exportProject, currentProjects}
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
        if (index < taskList.length) {
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
        taskDate = taskObj.taskDate;
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
if (storageStatus && localStorage.getItem('projectData')){
    allProj.loadProject(localStorage.getItem('projectData'))
    console.log('Storage loaded')
} else{
    console.log('No Storage Found')
}

// //save Storage
// if (storageStatus){
//     // console.log(allProj)
//     localStorage.setItem('projectData',allProj.exportProject())
//     console.log('saved to storage')
// }

storageStatus ? allProj.loadProject(localStorage.getItem('projectData')) : allProj


_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"].initialLoad(allProj)
_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"].setAllProject(allProj)
_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"].projectSelectionOption(allProj)
_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"]



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7VUN2RGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ007QUFDTztBQUNPO0FBQ2I7QUFDUztBQUN6RDtBQUNBO0FBQ0EsY0FBYywwREFBVztBQUN6QixhQUFhLDZEQUFhO0FBQzFCLGdCQUFnQixtRUFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3RUFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWM7QUFDZCxrRUFBYztBQUNkLGtFQUFjO0FBQ2Qsa0VBQWM7QUFDZDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL0RvbWhhbmRsZXIvZGlzcGxheWVyLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9Eb21oYW5kbGVyL2RvbUludGVyYWN0aW9uLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9PYmplY3RzL2xvY2FsU3RvcmFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL09iamVjdHMvcHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL09iamVjdHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL09iamVjdHMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgRG9tRGlzcGxheSA9ICgoKSA9PntcclxuICAgIFxyXG4gICAgY29uc3QgZGF5TW9udGhGb3JtYXR0ZXIgPSAoZGF5LCBtb250aCk9PiB7XHJcbiAgICAgICAgbGV0IHRoaXNEYXkgPSAnJ1xyXG4gICAgICAgIGxldCB0aGlzTW9udGggPSAnJ1xyXG4gICAgICAgIGNvbnN0IGFsbE1vbnRoID0gWydKYW4nLCdGZWInLCdNYXInLCdBcHInLCdNYXknLCdKdW4nLCdKdWwnLCdBdWcnLCdTZXAnLCdPY3QnLCdOb3YnLCdEZWMnXVxyXG4gICAgICAgIHN3aXRjaCAoZGF5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgY2FzZSAyMTpcclxuICAgICAgICAgICAgY2FzZSAzMTpcclxuICAgICAgICAgICAgICAgIHRoaXNEYXkgPSBgJHtkYXl9c3RgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBjYXNlIDIyOlxyXG4gICAgICAgICAgICAgICAgdGhpc0RheSA9IGAke2RheX1uZGBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGNhc2UgMjM6XHJcbiAgICAgICAgICAgICAgICB0aGlzRGF5ID0gYCR7ZGF5fXJkYFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzRGF5ID0gYCR7ZGF5fXRoYFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxNb250aFttb250aF0gK1wiIFwiICsgdGhpc0RheVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBDbGVhcnMgdGhlIGN1cnJlbnQgbGlzdCBvZiB0YXNrcywgdXNlZCB3aXRoIHByb2plY3Qgc2VsZWN0aW9uXHJcbiAgICBjb25zdCBjbGVhclRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0JylcclxuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyUHJvamVjdFNlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0U2VsZWN0aW9uJylcclxuICAgICAgICB0YXNrTm90ZS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIC8vIENsZWFycyB0aGUgbm90ZSBvZiBzZWxlY3RlZCB0YXNrLCBjYWxsZWQgd2hlbiB0YXNrIGlzIHNlbGVjdGVkXHJcbiAgICBjb25zdCBjbGVhck5vdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1jb250YWluZXInKVxyXG4gICAgICAgIHRhc2tOb3RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUhlYWRlciA9IChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkZXIgLnByb2plY3QtbmFtZScpXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2pEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGVyIC5wcm9qZWN0LWRlc2NyaXB0aW9uJylcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRlciAuY3VycmVudC1kYXRlJylcclxuICAgICAgICBjb25zdCB0aGlzRGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICBjdXJyZW50UHJvai50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXHJcbiAgICAgICAgY3VycmVudERhdGUudGV4dENvbnRlbnQgPSBgJHtkYXlNb250aEZvcm1hdHRlcih0aGlzRGF0ZS5nZXREYXRlKCksdGhpc0RhdGUuZ2V0TW9udGgoKSl9YCBcclxuICAgICAgICBjdXJyZW50UHJvakRlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0RGVzY3JpcHRpb25cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVUYXNrTW9kYWwgPSAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCBtb2RhbERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpYWxvZycpXHJcbiAgICAgICAgbW9kYWxEaWFsb2cuaWQgPSBgbW9kYWwtJHtpZH1gXHJcbiAgICAgICAgbW9kYWxEaWFsb2cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cImNyZWF0ZS10YXNrXCI+XHJcbiAgICAgICAgICAgICAgICA8bGVnZW5kPkNyZWF0ZSBUYXNrPC9sZWdlbmQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgMVwiIGNsYXNzPVwiY3JlYXRlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIGNsYXNzPVwiY3JlYXRlLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInRhc2tQcmlvcml0eVwiIGlkPVwiY3JlYXRlVGFza1ByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiIHNlbGVjdGVkPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRcIiA+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiA+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIGlkPVwiQ3JlYXRlRHVlRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0YXNrLWNyZWF0ZVwiPmNyZWF0ZTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9mb3JtPmBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0TW9kYWwgPSAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCBtb2RhbERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpXHJcbiAgICAgICAgbW9kYWxEaWFsb2cuaWQgPSBgbW9kYWxQcm9qZWN0LSR7aWR9YFxyXG4gICAgICAgIG1vZGFsRGlhbG9nLmlubmVySFRNTCA9IGA8Zm9ybSBhY3Rpb249XCJcImNsYXNzPSdjcmVhdGUgUHJvamVjdCc+XHJcbiAgICAgICAgPGxlZ2VuZD5DcmVhdGUgUHJvamVjdDwvbGVnZW5kPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmV3IFByb2plY3RcIiBjbGFzcz1cImNyZWF0ZS10aXRsZSBwcm9qZWN0LXRpdGxlXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IERlc2NyaXB0aW9uXCIgY2xhc3M9XCJjcmVhdGUtZGVzYyBwcm9qZWN0LXRpdGxlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3QtY3JlYXRlXCI+Y3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPmBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlcyB0aGUgcHJvamVjdCwgYmVzdCB1c2VkIHdpdGggaXRlcmF0aW5nIHRocm91Z2ggdGhlIGN1cnJlbnQgZXhpc2l0aW5nIHByb2plY3RzLlxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrLCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpXHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICAgICAgbGkuaWQgPSBpZFxyXG4gICAgICAgIGxpLmNsYXNzTmFtZSA9ICdpbmRpdmlkdWFsVGFzaydcclxuICAgICAgICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0YXNrLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBpZD1cInRhc2stJHtpZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzcz1cInRhc2stbmFtZVwiPjwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0YXNrLnRhc2tOYW1lfVwiIGNsYXNzPVwidGFzay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJkdWVEYXRlXCIgdmFsdWU9XCIke3Rhc2sudGFza0RhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwidGFza1ByaW9yaXR5XCIgaWQ9XCJ0YXNrUHJpb3JpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIiAgJHt0YXNrLnRhc2tQcmlvcml0eSA9PT0gJ2xvdycgPyAnc2VsZWN0ZWQ+bG93JyA6ICc+bG93J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRcIiAgJHt0YXNrLnRhc2tQcmlvcml0eSA9PT0gJ21lZCcgPyAnc2VsZWN0ZWQ+bWVkJyA6ICc+bWVkJ308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCIgJHt0YXNrLnRhc2tQcmlvcml0eSA9PT0gJ2hpZ2gnID8gJ3NlbGVjdGVkPmhpZ2gnIDogJz5oaWdoJ308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tcGxldGVcIiBpZD1cImNvbXBsZXRlXCIgJHt0YXNrLnRhc2tDb21wbGV0ZSA9PSB0cnVlID8gJ0NoZWNrZWQnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBgXHJcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKGxpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVOb3RlID0gKHRhc2sscHJvamVjdE5hbWUsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1jb250YWluZXInKVxyXG4gICAgICAgIHRhc2tOb3RlLmlkID0gXCJub3RlLVwiK2lkXHJcbiAgICAgICAgdGFza05vdGUuaW5uZXJIVE1MID0gYDxzZWN0aW9uIGNsYXNzPVwidGFzay1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0YXNrLW5hbWUtYmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJkdWUtZGF0ZVwiPkR1ZSA8c3Bhbj4ke3Rhc2sudGFza0RhdGUuZ2V0RGF0ZSgpfS8ke3Rhc2sudGFza0RhdGUuZ2V0TW9udGgoKSsxfS8ke3Rhc2sudGFza0RhdGUuZ2V0RnVsbFllYXIoKX08L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgPlByaW9yaXR5IDxzcGFuIGNsYXNzPVwicHJpb3JpdHlcIj4ke3Rhc2sudGFza1ByaW9yaXR5fTwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0YXNrLW5vdGVcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrRGVzY1wiPlRhc2sgRGV0YWlsczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ0YXNrRGVzY1wiIGlkPVwidGFza0Rlc2NcIiBjb2xzPVwiMzBcIiB2YWx1ZT0nJHt0YXNrLnRhc2tEZXNjfScgcm93cz1cIjEwXCIgY2xhc3M9XCJ0YXNrZGVzY3JpcHRpb25cIj4ke3Rhc2sudGFza0Rlc2N9PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPmBcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNwbGF5cyB0aGUgVGFzayBkZXRhaWxzIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzY3JlZW4sIHNob3VsZCBiZSBhY3RpdmF0ZWQgd2hlbiB0YXNrIGlzIGNsaWNrZWQgZnJvbSB0aGUgdGFzayBsaXN0XHJcbiAgICBjb25zdCB0YXNrRGlzcGxheSA9ICh0YXNrLHByb2plY3ROYW1lLCB0YXNrSUQpID0+IHtcclxuICAgICAgICBjbGVhck5vdGUoKVxyXG4gICAgICAgIGNyZWF0ZU5vdGUodGFzayxwcm9qZWN0TmFtZSwgdGFza0lEKVxyXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZS1iaWcnKVxyXG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50YXNrTmFtZVxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpXHJcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay50YXNrUHJpb3JpdHlcclxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZScpXHJcbiAgICAgICAgdGFza0R1ZURhdGUudmFsdWUgPSB0YXNrLnRhc2tEYXRlXHJcbiAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2MnKVxyXG4gICAgICAgIHRhc2tEZXNjLnZhbHVlID0gdGFzay50YXNrRGVzY1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4ge2NyZWF0ZVRhc2ssIGNsZWFyVGFzaywgdGFza0Rpc3BsYXksIGNsZWFyTm90ZSwgdXBkYXRlSGVhZGVyLCBjcmVhdGVUYXNrTW9kYWwsIGNsZWFyUHJvamVjdFNlbGVjdGlvbn1cclxufSkoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb21EaXNwbGF5IiwiaW1wb3J0IHByb2plY3RIYW5kbGVyIGZyb20gXCIuLi9PYmplY3RzL3Byb2plY3RIYW5kbGVyXCI7XHJcbmltcG9ydCBEb21EaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXllclwiO1xyXG5pbXBvcnQgY3JlYXRlVGFza3MgZnJvbSBcIi4uL09iamVjdHMvdGFza3NcIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4uL09iamVjdHMvcHJvamVjdHNcIjtcclxuXHJcbmNvbnN0IGRvbUludGVyYWN0aW9uID0gKCgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gY29uc3QgYWxsUHJvaiA9IHByb2plY3RIYW5kbGVyXHJcbiAgICBsZXQgUHJvamVjdElEID0gMDtcclxuICAgIGNvbnN0IGdldFByb2plY3RJRCA9ICgpID0+IFByb2plY3RJRFxyXG4gICAgY29uc3Qgc2V0UHJvamVjdElEID0gKG5ld0lEKSA9PiBQcm9qZWN0SUQgPSBuZXdJRFxyXG5cclxuICAgIGxldCBnbG9iYWxQcm9qZWN0ID0gJydcclxuICAgIGNvbnN0IHNldEFsbFByb2plY3QgPSAoYWxsUHJvaikgPT4gZ2xvYmFsUHJvamVjdCA9IGFsbFByb2pcclxuICAgIGNvbnN0IGdldEFsbFByb2plY3QgPSAoKSA9PiBnbG9iYWxQcm9qZWN0XHJcblxyXG4gICAgY29uc3Qgc2F2ZSA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdERhdGEnLCBnZXRBbGxQcm9qZWN0KCkuZXhwb3J0UHJvamVjdCgpKSBcclxuICAgICAgICBjb25zb2xlLmxvZygnc2F2ZWQgdG8gc3RvcmFnZScpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3REYXRhJykpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0ge2N1cnJlbnRUaXRsZTonJyxjdXJyZW50RGVzYzonJyxjdXJyZW50UHJpb3JpdHk6J2xvdycsY3VycmVudERhdGU6JycsY3VycmVudENvbXBsZXRpb246Jyd9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbExvYWQgPSAoYWxsUHJvaikgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJET00gZnVsbHkgbG9hZGVkIGFuZCBwYXJzZWRcIik7XHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuY3JlYXRlVGFza01vZGFsKGAwYClcclxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvblJlbmRlcihhbGxQcm9qLnNob3dQcm9qZWN0KClbMF0sIDApXHJcbiAgICAgICAgICAgIHRhc2tNb2RhbE9wZW4oYWxsUHJvai5zaG93UHJvamVjdCgpWzBdLCBgMGApXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2plY3Qgc2VsZWN0aW9uIGFuZCB1cGRhdGluZyB0aGUgdGFza3MgdmlzaWJsZSBiYXNlZCBvbiB0aGUgY3VycmVudCBzZWxlY3RlZCBwcm9qZWN0XHJcbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHByb2plY3Qgd2l0aCBzZXRQcm9qZWN0SUQuXHJcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uT3B0aW9uID0gKGFsbFByb2opID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0U2VsZWN0aW9uJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWxsUHJvai5zaG93UHJvamVjdCgpKVxyXG4gICAgICAgIHByb2plY3RNb2RhbE9wZW4oYWxsUHJvailcclxuICAgICAgICBjaGFuZ2VTZWxlY3Rpb24oYWxsUHJvaiwgY3VycmVudFByb2plY3QpXHJcblxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PntcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gYWxsUHJvai5zaG93UHJvamVjdCgpW2UudGFyZ2V0LnZhbHVlXVxyXG4gICAgICAgICAgICBEb21EaXNwbGF5LmNyZWF0ZVRhc2tNb2RhbChgJHtnZXRQcm9qZWN0SUQoKX1gKVxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyKHNlbGVjdGVkUHJvamVjdCwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIHRhc2tNb2RhbE9wZW4oc2VsZWN0ZWRQcm9qZWN0LCBgJHtnZXRQcm9qZWN0SUQoKX1gKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlU2VsZWN0aW9uID0gKGFsbFByb2osIGN1cnJlbnRQcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgRG9tRGlzcGxheS5jbGVhclByb2plY3RTZWxlY3Rpb24oKVxyXG4gICAgICAgIGFsbFByb2ouc2hvd1Byb2plY3QoKS5mb3JFYWNoKChwcm9qZWN0LCBwcm9qSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGhpc1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgICAgICAgICB0aGlzUHJvamVjdC52YWx1ZSA9IHByb2pJbmRleFxyXG4gICAgICAgICAgICB0aGlzUHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNQcm9qZWN0KVxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hcHBlbmQodGhpc1Byb2plY3QpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RTZWxlY3Rpb25SZW5kZXIgPSAoc2VsZWN0ZWRQcm9qZWN0LCBwcm9qZWN0SUQpID0+IHtcclxuICAgICAgICBEb21EaXNwbGF5LmNsZWFyVGFzaygpXHJcbiAgICAgICAgc2V0UHJvamVjdElEKFtwcm9qZWN0SURdKVxyXG4gICAgICAgIERvbURpc3BsYXkudXBkYXRlSGVhZGVyKHNlbGVjdGVkUHJvamVjdC5nZXROYW1lKCksIHNlbGVjdGVkUHJvamVjdC5nZXREZXNjKCkpXHJcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaywgdGFza0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuY3JlYXRlVGFzayh0YXNrLmdldEFsbCgpLCBgJHtnZXRQcm9qZWN0SUQoKX1wJHt0YXNrSW5kZXh9YClcclxuICAgICAgICAgICAgdGFza1VwZGF0ZSh0YXNrLCBgJHtnZXRQcm9qZWN0SUQoKX1wJHt0YXNrSW5kZXh9YClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRhc2tPcGVuKHNlbGVjdGVkUHJvamVjdCkgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIE9wZW5zIHRoZSB0YXNrIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBwYWdlXHJcbiAgICBjb25zdCB0YXNrT3BlbiA9IChjdXJyZW50UHJvaikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZGl2aWR1YWxUYXNrJyk7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCggKHRhc2ssIHRhc2tJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrSUQgPSB0YXNrLmlkXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbmZvID0gY3VycmVudFByb2ouZ2V0VGFza3MoKVt0YXNrSW5kZXhdXHJcbiAgICAgICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgICAgICAgICAgICAgRG9tRGlzcGxheS50YXNrRGlzcGxheSh0YXNrSW5mby5nZXRBbGwoKSxjdXJyZW50UHJvai5nZXROYW1lKCksIHRhc2tJRClcclxuICAgICAgICAgICAgICAgIG5vdGVVcGRhdGUodGFza0luZm8sIHRhc2tJRClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3RlVXBkYXRlID0gKGN1cnJlbnRUYXNrLCB0YXNrSUQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNub3RlLSR7dGFza0lEfSAjdGFza0Rlc2NgKVxyXG4gICAgICAgIHRhc2tEZXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrLmNoYW5nZURlc2MoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFza1VwZGF0ZSA9IChjdXJyZW50VGFzaywgdGFza0lEKSA9PiB7XHJcbiAgICAgICAgLy8gY2hhbmdlIGZvciBlYWNoXHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHt0YXNrSUR9IC50YXNrLXRpdGxlYClcclxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tJRH0gI3Rhc2tQcmlvcml0eWApXHJcbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHt0YXNrSUR9ICNjb21wbGV0ZWApXHJcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tJRH0gI2R1ZURhdGVgKVxyXG4gICAgICAgIC8vIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25vdGUtJHt0YXNrSUR9ICN0YXNrRGVzY2ApXHJcbiAgICAgICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiBjdXJyZW50VGFzay5jaGFuZ2VOYW1lKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICB0YXNrQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlPT4gY3VycmVudFRhc2suY2hhbmdlQ29tcGxldGlvbigpKVxyXG4gICAgICAgIHRhc2tQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gY3VycmVudFRhc2suY2hhbmdlUHJpb3JpdHkoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgIHRhc2tEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiBjdXJyZW50VGFzay5jaGFuZ2VEYXRlKGUudGFyZ2V0LnZhbHVlKSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE1PREFMUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbiAgICBjb25zdCB0YXNrTW9kYWxPcGVuID0gKHRoaXNQcm9qLCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpYWxvZycpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNyZWF0ZScpXHJcbiAgICAgICAgY29uc3QgdGFza09wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcclxuICAgICAgICBjb25zdCBuZXdUYXNrTW9kYWwgPSB0YXNrTW9kYWxHZXQodGhpc1Byb2osIGlkLCB0YXNrTW9kYWwsIGNyZWF0ZUJ1dHRvbilcclxuICAgICAgICB0YXNrT3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgICAgICB0YXNrTW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tNb2RhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsT3BlbiA9IChhbGxQcm9qKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJvamVjdFNlbGVjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRpYWxvZycpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNyZWF0ZScpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBwcm9qZWN0TW9kYWxHZXQoYWxsUHJvaiwgY3VycmVudFByb2plY3QsIHByb2plY3RNb2RhbCwgY3JlYXRlQnV0dG9uKVxyXG4gICAgICAgIHByb2plY3RPcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgIHByb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdE1vZGFsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFza01vZGFsR2V0ID0gKCh0aGlzUHJvaiwgaWQsIHRhc2tNb2RhbCwgY3JlYXRlQnV0dG9uKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUsIGNyZWF0ZUJ1dHRvbilcclxuICAgICAgICAgICAgY29uc3QgdGFza0luZm8gPSB0YXNrTW9kYWxJbmZvKClcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2tzKHRhc2tJbmZvLk5hbWUsIHRhc2tJbmZvLmRlc2MsIG5ldyBEYXRlKHRhc2tJbmZvLmRhdGUpLCB0YXNrSW5mby5wcmlvcml0eSwgdGFza0luZm8uY29tcGxldGUpXHJcbiAgICAgICAgICAgIHRoaXNQcm9qLmFkZFRhc2sobmV3VGFzaylcclxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvblJlbmRlcih0aGlzUHJvaiwgaWQpXHJcblxyXG4gICAgICAgICAgICB0YXNrTW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICBzYXZlKCkgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RNb2RhbEdldCA9ICgoYWxsUHJvaixjdXJyZW50UHJvamVjdCwgcHJvamVjdE1vZGFsLCBjcmVhdGVCdXR0b24pID0+IHtcclxuICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZm8gPSBwcm9qZWN0TW9kYWxJbmZvKClcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdEluZm8uTmFtZSwgcHJvamVjdEluZm8uZGVzYylcclxuICAgICAgICAgICAgYWxsUHJvai5hZGRQcm9qZWN0KG5ld1Byb2plY3QpXHJcbiAgICAgICAgICAgIGNoYW5nZVNlbGVjdGlvbihhbGxQcm9qLCBjdXJyZW50UHJvamVjdClcclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgc2F2ZSgpICBcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsSW5mbyA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10aXRsZS5wcm9qZWN0LXRpdGxlJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtZGVzYy5wcm9qZWN0LXRpdGxlJylcclxuICAgICAgICByZXR1cm4ge05hbWU6cHJvamVjdE5hbWUudmFsdWUsIGRlc2M6cHJvamVjdERlc2MudmFsdWV9XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXNrTW9kYWxJbmZvID0gKCkgPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRpdGxlJylcclxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtZGVzYycpXHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRhc2tQcmlvcml0eScpXHJcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ3JlYXRlRHVlRGF0ZScpXHJcbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlJylcclxuICAgICAgICAvLyBOYW1lPzogc3RyaW5nLCBkZXNjPzogc3RyaW5nLCBkYXRlPzogRGF0ZSwgcHJpb3JpdHk/OiBzdHJpbmcsIGNvbXBsZXRlPzogYm9vbGVhblxyXG4gICAgICAgIC8vIHJldHVybiB0YXNrTmFtZS52YWx1ZSwgdGFza0Rlc2MudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUsIGNvbXBsZXRlOnRhc2tDb21wbGV0ZS5jaGVja2VkXHJcbiAgICAgICAgcmV0dXJuIHtOYW1lOnRhc2tOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICBkZXNjOnRhc2tEZXNjLnZhbHVlLFxyXG4gICAgICAgICAgICBkYXRlOnRhc2tEYXRlLnZhbHVlIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHByaW9yaXR5OnRhc2tQcmlvcml0eS52YWx1ZSwgXHJcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlOnRhc2tDb21wbGV0ZS5jaGVja2VkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgIHBlcmlvZGljU2F2ZSA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgIHNhdmUoKVxyXG4gICAgICB9LCA1MDAwKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0U2VsZWN0aW9uT3B0aW9uLCBpbml0aWFsTG9hZCwgc2V0QWxsUHJvamVjdH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbUludGVyYWN0aW9uO1xyXG4iLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuICAgIGxldCBzdG9yYWdlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xyXG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxyXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxyXG4gICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxyXG4gICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXHJcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgICBzdG9yYWdlICYmXHJcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlQXZhaWxhYmxlXHJcbiAgIiwiLy8gaWYgaW4gbG9jYWwgc3RvcmFnZSBsb2FkIHRob3NlXHJcbmltcG9ydCBjcmVhdGVUYXNrcyBmcm9tIFwiLi90YXNrc1wiXHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5cclxuY29uc3QgcHJvamVjdEhhbmRsZXIgPSAocHJvamVjdD1bXSkgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IHByb2plY3Q7XHJcblxyXG4gICAgY29uc3QgbG9hZFByb2plY3QgPSAocHJvamVjdERhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gSlNPTi5wYXJzZShwcm9qZWN0RGF0YSk7XHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RIYW5kbGVyKClcclxuICAgICAgICBmb3IoY29uc3QgcHJvaiBpbiBuZXdQcm9qZWN0KXtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KClcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QuaW1wb3J0UHJvamVjdChuZXdQcm9qZWN0W3Byb2pdWzBdKVxyXG4gICAgICAgICAgICBmb3IoY29uc3QgdGFzayBpbiBuZXdQcm9qZWN0W3Byb2pdWzFdKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gY3JlYXRlVGFza3MoKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2suaW1wb3J0VGFza3MobmV3UHJvamVjdFtwcm9qXVsxXVt0YXNrXSlcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2soY3VycmVudFRhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb2Nlc3NlZFByb2plY3QuYWRkUHJvamVjdChjdXJyZW50UHJvamVjdClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFByb2plY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwb3J0UHJvamVjdCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb2xsZWN0aW9ucyA9IHt9XHJcbiAgICAgICAgY3VycmVudFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIHByb2pJbmRleCkgPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gW11cclxuICAgICAgICBwcm9qZWN0Q29sbGVjdGlvbnNbcHJvakluZGV4XSA9IFtwcm9qZWN0LmV4cG9ydFByb2plY3QoKSwgcHJvamVjdFRhc2tzXVxyXG4gICAgICAgIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpXHJcbiAgICAgICAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0Q29sbGVjdGlvbnNbcHJvakluZGV4XVsxXS5wdXNoKHRhc2suZXhwb3J0VGFzaygpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocHJvamVjdENvbGxlY3Rpb25zKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dQcm9qZWN0ID0gKCkgPT4gY3VycmVudFByb2plY3RzO1xyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4gY3VycmVudFByb2plY3RzLnB1c2gobmV3UHJvamVjdClcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgY3VycmVudFByb2plY3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtzaG93UHJvamVjdCwgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgbG9hZFByb2plY3QsIGV4cG9ydFByb2plY3QsIGN1cnJlbnRQcm9qZWN0c31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEhhbmRsZXIiLCJjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3ROYW1lPScnLCBwcm9qZWN0RGVzYz0nJykgPT4ge1xyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIGxldCBkZXNjID0gcHJvamVjdERlc2M7XHJcbiAgICBsZXQgdGFza0xpc3QgPSBbXTtcclxuICAgIGxldCB0YXNrQ291bnQgPSB0YXNrTGlzdC5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0Q291bnQgPSAoKSA9PiB0YXNrQ291bnQ7XHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICAgIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjO1xyXG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrTGlzdDtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VOYW1lID0gKG5ld05hbWUpID0+IG5hbWUgPSBuZXdOYW1lIDtcclxuICAgIGNvbnN0IGNoYW5nZURlc2MgPSAobmV3RGVzYykgPT4gZGVzYyA9IG5ld0Rlc2MgO1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2sgPSAobmV3VGFzaykgPT4ge1xyXG4gICAgICAgICsrdGFza0NvdW50IFxyXG4gICAgICAgIHRhc2tMaXN0LnB1c2gobmV3VGFzaylcclxuICAgIH07XHJcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgdGFza0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC0tdGFza0NvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltcG9ydFByb2plY3QgPSAodGFza1Byb2plY3QpID0+IHtcclxuICAgICAgICB0YXNrUHJvamVjdCA9IEpTT04ucGFyc2UodGFza1Byb2plY3QpO1xyXG4gICAgICAgIG5hbWUgPSB0YXNrUHJvamVjdC5uYW1lO1xyXG4gICAgICAgIGRlc2MgPSB0YXNrUHJvamVjdC5kZXNjO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cG9ydFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFsbCA9IHtuYW1lLGRlc2N9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFsbClcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge2dldENvdW50LGdldE5hbWUsZ2V0RGVzYyxnZXRUYXNrcyxjaGFuZ2VOYW1lLGNoYW5nZURlc2MsYWRkVGFzayxyZW1vdmVUYXNrLGltcG9ydFByb2plY3QsZXhwb3J0UHJvamVjdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3QiLCJjb25zdCBjcmVhdGVUYXNrcyA9IChOYW1lPScnLGRlc2M9JycsZGF0ZT1uZXcgRGF0ZSgpLHByaW9yaXR5PSdsb3cnLGNvbXBsZXRlPWZhbHNlKSA9PiB7XHJcbiAgICBsZXQgdGFza05hbWUgPSBOYW1lO1xyXG4gICAgbGV0IHRhc2tEZXNjID0gZGVzYztcclxuICAgIGxldCB0YXNrRGF0ZSA9IGRhdGU7XHJcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICBsZXQgdGFza0NvbXBsZXRlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHRhc2tEYXRlO1xyXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHRhc2tOYW1lO1xyXG4gICAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IHRhc2tEZXNjO1xyXG4gICAgY29uc3QgZ2V0UHJpb3IgPSAoKSA9PiB0YXNrUHJpb3JpdHk7XHJcbiAgICBjb25zdCBnZXRDb21wbGV0ZSA9ICgpID0+IHRhc2tDb21wbGV0ZTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VEYXRlID0gKG5ld0RhdGUpID0+IHRhc2tEYXRlID0gbmV3IERhdGUobmV3RGF0ZSk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcclxuICAgICAgICBpZiAocHJpb3JpdHkgPT09ICdsb3cnKXtcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5ID0gJ2xvdydcclxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnbWVkJykge1xyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkgPSAnbWVkJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eSA9ICdoaWdoJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlTmFtZSA9IChuZXdOYW1lKSA9PiB0YXNrTmFtZSA9IG5ld05hbWUgO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZURlc2MgPSAobmV3RGVzYykgPT4gdGFza0Rlc2MgPSBuZXdEZXNjIDtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDb21wbGV0aW9uID0gKCkgPT4gdGFza0NvbXBsZXRlID8gdGFza0NvbXBsZXRlID0gZmFsc2UgOiB0YXNrQ29tcGxldGUgPSB0cnVlIDtcclxuXHJcbiAgICBjb25zdCBnZXRBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHt0YXNrTmFtZTogdGFza05hbWUsIHRhc2tEZXNjOiB0YXNrRGVzYywgdGFza0RhdGU6IHRhc2tEYXRlLCB0YXNrUHJpb3JpdHk6IHRhc2tQcmlvcml0eSx0YXNrQ29tcGxldGU6IHRhc2tDb21wbGV0ZX1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1wb3J0VGFza3MgPSAodGFza09iaikgPT4ge1xyXG4gICAgICAgIHRhc2tPYmogPSBKU09OLnBhcnNlKHRhc2tPYmopO1xyXG4gICAgICAgIHRhc2tOYW1lID0gdGFza09iai50YXNrTmFtZTtcclxuICAgICAgICB0YXNrRGVzYyA9IHRhc2tPYmoudGFza0Rlc2M7XHJcbiAgICAgICAgdGFza0RhdGUgPSB0YXNrT2JqLnRhc2tEYXRlO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eSA9IHRhc2tPYmoudGFza1ByaW9yaXR5O1xyXG4gICAgICAgIHRhc2tDb21wbGV0ZSA9IHRhc2tPYmoudGFza0NvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cG9ydFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFsbCA9IHt0YXNrTmFtZSx0YXNrRGVzYyx0YXNrRGF0ZSx0YXNrUHJpb3JpdHksdGFza0NvbXBsZXRlfVxyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhbGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXREYXRlLCBnZXROYW1lLCBnZXREZXNjLCBnZXRQcmlvciwgZ2V0Q29tcGxldGUsIGNoYW5nZURhdGUsIGNoYW5nZVByaW9yaXR5LCBjaGFuZ2VOYW1lLCBjaGFuZ2VEZXNjLCBjaGFuZ2VDb21wbGV0aW9uLGltcG9ydFRhc2tzLGV4cG9ydFRhc2ssZ2V0QWxsfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tzIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlVGFza3MgZnJvbSBcIi4vT2JqZWN0cy90YXNrc1wiXHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL09iamVjdHMvcHJvamVjdHNcIjtcclxuaW1wb3J0IHByb2plY3RIYW5kbGVyIGZyb20gXCIuL09iamVjdHMvcHJvamVjdEhhbmRsZXJcIjtcclxuaW1wb3J0IHN0b3JhZ2VBdmFpbGFibGUgZnJvbSBcIi4vT2JqZWN0cy9sb2NhbFN0b3JhZ2VIYW5kbGVyXCI7XHJcbmltcG9ydCBEb21EaXNwbGF5IGZyb20gXCIuL0RvbWhhbmRsZXIvZGlzcGxheWVyXCI7XHJcbmltcG9ydCBkb21JbnRlcmFjdGlvbiBmcm9tIFwiLi9Eb21oYW5kbGVyL2RvbUludGVyYWN0aW9uXCI7XHJcblxyXG4vLyBJbml0aWFsaXNlIHRoZSBUZW1wbGF0ZSBQcm9qZWN0XHJcbmNvbnN0IHRhc2sxID0gY3JlYXRlVGFza3MoJ1Rhc2sgMScsJ1RoaXMgaXMgdGhlIEZpcnN0IFRhc2snLG5ldyBEYXRlKCksJ2xvdycpO1xyXG5jb25zdCBwcm9qID0gY3JlYXRlUHJvamVjdCgnUHJvamVjdCAxJywgJ1RoaXMgaXMgdGhlIGRlZmF1bHQgUHJvamVjdCcpO1xyXG5jb25zdCBhbGxQcm9qID0gcHJvamVjdEhhbmRsZXIoKVxyXG5wcm9qLmFkZFRhc2sodGFzazEpO1xyXG5hbGxQcm9qLmFkZFByb2plY3QocHJvaik7XHJcblxyXG4vLyBJZiBQcm9qZWN0IGV4aXN0cywgTG9hZCB0aGF0IFByb2plY3QsIGVsc2UsIHV0aWxpc2UgdGhlIHRlbXBsYXRlIHByb2plY3RcclxuY29uc3Qgc3RvcmFnZVN0YXR1cyA9IHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpO1xyXG5pZiAoc3RvcmFnZVN0YXR1cyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdERhdGEnKSl7XHJcbiAgICBhbGxQcm9qLmxvYWRQcm9qZWN0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0RGF0YScpKVxyXG4gICAgY29uc29sZS5sb2coJ1N0b3JhZ2UgbG9hZGVkJylcclxufSBlbHNle1xyXG4gICAgY29uc29sZS5sb2coJ05vIFN0b3JhZ2UgRm91bmQnKVxyXG59XHJcblxyXG4vLyAvL3NhdmUgU3RvcmFnZVxyXG4vLyBpZiAoc3RvcmFnZVN0YXR1cyl7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhhbGxQcm9qKVxyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3REYXRhJyxhbGxQcm9qLmV4cG9ydFByb2plY3QoKSlcclxuLy8gICAgIGNvbnNvbGUubG9nKCdzYXZlZCB0byBzdG9yYWdlJylcclxuLy8gfVxyXG5cclxuc3RvcmFnZVN0YXR1cyA/IGFsbFByb2oubG9hZFByb2plY3QobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3REYXRhJykpIDogYWxsUHJvalxyXG5cclxuXHJcbmRvbUludGVyYWN0aW9uLmluaXRpYWxMb2FkKGFsbFByb2opXHJcbmRvbUludGVyYWN0aW9uLnNldEFsbFByb2plY3QoYWxsUHJvailcclxuZG9tSW50ZXJhY3Rpb24ucHJvamVjdFNlbGVjdGlvbk9wdGlvbihhbGxQcm9qKVxyXG5kb21JbnRlcmFjdGlvblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==