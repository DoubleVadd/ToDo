/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    let taskComplete = complete;

    const getDate = () => taskDate;
    const getName = () => taskName;
    const getDesc = () => taskDesc;
    const getPrior = () => taskPriority;
    const getComplete = () => taskComplete;

    const changeDate = (newDate) => {
        if (newDate instanceof Date){
            taskDate = newDate;
        }
        return;
    }

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

    return {getDate, getName, getDesc, getPrior, getComplete, changeDate, changePriority, changeName, changeDesc, changeCompletion,importTasks,exportTask}
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





const task1 = (0,_Objects_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])('cool');
const task2 = (0,_Objects_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])('superb');
const task3 = (0,_Objects_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])('tragic');
const task5 = (0,_Objects_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])('eternal')
const task4 = (0,_Objects_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])('doom')
const proj = (0,_Objects_projects__WEBPACK_IMPORTED_MODULE_1__["default"])('coolest');
const proj2 = (0,_Objects_projects__WEBPACK_IMPORTED_MODULE_1__["default"])('uncooler')
const allProj = (0,_Objects_projectHandler__WEBPACK_IMPORTED_MODULE_2__["default"])()
const storageStatus = (0,_Objects_localStorageHandler__WEBPACK_IMPORTED_MODULE_3__["default"])('localStorage');

proj.addTask(task1);
proj.addTask(task2);
proj.addTask(task3);
proj2.addTask(task4);
proj2.addTask(task5);
// window.proj = proj;
allProj.addProject(proj);
allProj.addProject(proj2)


if (storageStatus && localStorage.getItem('projectData')){
    allProj.loadProject(localStorage.getItem('projectData'))
    console.log('loaded')
} else{
    console.log('No Storage Found')
}


if (storageStatus){
    // console.log(allProj)
    localStorage.setItem('projectData',allProj.exportProject())
    console.log('saved to storage')
}

storageStatus ? allProj.loadProject(localStorage.getItem('projectData')) : allProj

console.log(allProj)



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2xvY2FsU3RvcmFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL09iamVjdHMvcHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL09iamVjdHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL09iamVjdHMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xyXG4gICAgbGV0IHN0b3JhZ2U7XHJcbiAgICB0cnkge1xyXG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xyXG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XHJcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXHJcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XHJcbiAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcclxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxyXG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XHJcbiAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcclxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxyXG4gICAgICAgIHN0b3JhZ2UgJiZcclxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VBdmFpbGFibGVcclxuICAiLCIvLyBpZiBpbiBsb2NhbCBzdG9yYWdlIGxvYWQgdGhvc2VcclxuaW1wb3J0IGNyZWF0ZVRhc2tzIGZyb20gXCIuL3Rhc2tzXCJcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0SGFuZGxlciA9IChwcm9qZWN0PVtdKSA9PiB7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3RzID0gcHJvamVjdDtcclxuXHJcbiAgICBjb25zdCBsb2FkUHJvamVjdCA9IChwcm9qZWN0RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBKU09OLnBhcnNlKHByb2plY3REYXRhKTtcclxuICAgICAgICBjb25zdCBwcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdEhhbmRsZXIoKVxyXG4gICAgICAgIGZvcihjb25zdCBwcm9qIGluIG5ld1Byb2plY3Qpe1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoKVxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5pbXBvcnRQcm9qZWN0KG5ld1Byb2plY3RbcHJval1bMF0pXHJcbiAgICAgICAgICAgIGZvcihjb25zdCB0YXNrIGluIG5ld1Byb2plY3RbcHJval1bMV0pe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRhc2sgPSBjcmVhdGVUYXNrcygpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFzay5pbXBvcnRUYXNrcyhuZXdQcm9qZWN0W3Byb2pdWzFdW3Rhc2tdKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QuYWRkVGFzayhjdXJyZW50VGFzayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvY2Vzc2VkUHJvamVjdC5hZGRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUHJvamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBleHBvcnRQcm9qZWN0ID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdENvbGxlY3Rpb25zID0ge31cclxuICAgICAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgcHJvakluZGV4KSA9PntcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBbXVxyXG4gICAgICAgIHByb2plY3RDb2xsZWN0aW9uc1twcm9qSW5kZXhdID0gW3Byb2plY3QuZXhwb3J0UHJvamVjdCgpLCBwcm9qZWN0VGFza3NdXHJcbiAgICAgICAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKClcclxuICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3RDb2xsZWN0aW9uc1twcm9qSW5kZXhdWzFdLnB1c2godGFzay5leHBvcnRUYXNrKCkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShwcm9qZWN0Q29sbGVjdGlvbnMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1Byb2plY3QgPSAoKSA9PiBjdXJyZW50UHJvamVjdHM7XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiBjdXJyZW50UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3Nob3dQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBsb2FkUHJvamVjdCwgZXhwb3J0UHJvamVjdCwgY3VycmVudFByb2plY3RzfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0SGFuZGxlciIsImNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdE5hbWU9JycsIHByb2plY3REZXNjPScnKSA9PiB7XHJcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgbGV0IGRlc2MgPSBwcm9qZWN0RGVzYztcclxuICAgIGxldCB0YXNrTGlzdCA9IFtdO1xyXG4gICAgbGV0IHRhc2tDb3VudCA9IHRhc2tMaXN0Lmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBnZXRDb3VudCA9ICgpID0+IHRhc2tDb3VudDtcclxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xyXG4gICAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IGRlc2M7XHJcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHRhc2tMaXN0O1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZU5hbWUgPSAobmV3TmFtZSkgPT4gbmFtZSA9IG5ld05hbWUgO1xyXG4gICAgY29uc3QgY2hhbmdlRGVzYyA9IChuZXdEZXNjKSA9PiBkZXNjID0gbmV3RGVzYyA7XHJcblxyXG4gICAgY29uc3QgYWRkVGFzayA9IChuZXdUYXNrKSA9PiB7XHJcbiAgICAgICAgKyt0YXNrQ291bnQgXHJcbiAgICAgICAgdGFza0xpc3QucHVzaChuZXdUYXNrKVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPCB0YXNrTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS10YXNrQ291bnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1wb3J0UHJvamVjdCA9ICh0YXNrUHJvamVjdCkgPT4ge1xyXG4gICAgICAgIHRhc2tQcm9qZWN0ID0gSlNPTi5wYXJzZSh0YXNrUHJvamVjdCk7XHJcbiAgICAgICAgbmFtZSA9IHRhc2tQcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgZGVzYyA9IHRhc2tQcm9qZWN0LmRlc2M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwb3J0UHJvamVjdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYWxsID0ge25hbWUsZGVzY31cclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYWxsKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7Z2V0Q291bnQsZ2V0TmFtZSxnZXREZXNjLGdldFRhc2tzLGNoYW5nZU5hbWUsY2hhbmdlRGVzYyxhZGRUYXNrLHJlbW92ZVRhc2ssaW1wb3J0UHJvamVjdCxleHBvcnRQcm9qZWN0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdCIsImNvbnN0IGNyZWF0ZVRhc2tzID0gKE5hbWU9JycsZGVzYz0nJyxkYXRlPW5ldyBEYXRlKCkscHJpb3JpdHk9J2xvdycsY29tcGxldGU9ZmFsc2UpID0+IHtcclxuICAgIGxldCB0YXNrTmFtZSA9IE5hbWU7XHJcbiAgICBsZXQgdGFza0Rlc2MgPSBkZXNjO1xyXG4gICAgbGV0IHRhc2tEYXRlID0gZGF0ZTtcclxuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIGxldCB0YXNrQ29tcGxldGUgPSBjb21wbGV0ZTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4gdGFza0RhdGU7XHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gdGFza05hbWU7XHJcbiAgICBjb25zdCBnZXREZXNjID0gKCkgPT4gdGFza0Rlc2M7XHJcbiAgICBjb25zdCBnZXRQcmlvciA9ICgpID0+IHRhc2tQcmlvcml0eTtcclxuICAgIGNvbnN0IGdldENvbXBsZXRlID0gKCkgPT4gdGFza0NvbXBsZXRlO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZURhdGUgPSAobmV3RGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChuZXdEYXRlIGluc3RhbmNlb2YgRGF0ZSl7XHJcbiAgICAgICAgICAgIHRhc2tEYXRlID0gbmV3RGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gKHByaW9yaXR5KSA9PiB7XHJcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSAnbG93Jyl7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eSA9ICdsb3cnXHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ21lZCcpIHtcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5ID0gJ21lZCdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkgPSAnaGlnaCdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZU5hbWUgPSAobmV3TmFtZSkgPT4gdGFza05hbWUgPSBuZXdOYW1lIDtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VEZXNjID0gKG5ld0Rlc2MpID0+IHRhc2tEZXNjID0gbmV3RGVzYyA7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlQ29tcGxldGlvbiA9ICgpID0+IHRhc2tDb21wbGV0ZSA/IHRhc2tDb21wbGV0ZSA9IGZhbHNlIDogdGFza0NvbXBsZXRlID0gdHJ1ZSA7XHJcblxyXG4gICAgY29uc3QgaW1wb3J0VGFza3MgPSAodGFza09iaikgPT4ge1xyXG4gICAgICAgIHRhc2tPYmogPSBKU09OLnBhcnNlKHRhc2tPYmopO1xyXG4gICAgICAgIHRhc2tOYW1lID0gdGFza09iai50YXNrTmFtZTtcclxuICAgICAgICB0YXNrRGVzYyA9IHRhc2tPYmoudGFza0Rlc2M7XHJcbiAgICAgICAgdGFza0RhdGUgPSB0YXNrT2JqLnRhc2tEYXRlO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eSA9IHRhc2tPYmoudGFza1ByaW9yaXR5O1xyXG4gICAgICAgIHRhc2tDb21wbGV0ZSA9IHRhc2tPYmoudGFza0NvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cG9ydFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFsbCA9IHt0YXNrTmFtZSx0YXNrRGVzYyx0YXNrRGF0ZSx0YXNrUHJpb3JpdHksdGFza0NvbXBsZXRlfVxyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhbGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXREYXRlLCBnZXROYW1lLCBnZXREZXNjLCBnZXRQcmlvciwgZ2V0Q29tcGxldGUsIGNoYW5nZURhdGUsIGNoYW5nZVByaW9yaXR5LCBjaGFuZ2VOYW1lLCBjaGFuZ2VEZXNjLCBjaGFuZ2VDb21wbGV0aW9uLGltcG9ydFRhc2tzLGV4cG9ydFRhc2t9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFza3MiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVUYXNrcyBmcm9tIFwiLi9PYmplY3RzL3Rhc2tzXCJcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vT2JqZWN0cy9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgcHJvamVjdEhhbmRsZXIgZnJvbSBcIi4vT2JqZWN0cy9wcm9qZWN0SGFuZGxlclwiO1xyXG5pbXBvcnQgc3RvcmFnZUF2YWlsYWJsZSBmcm9tIFwiLi9PYmplY3RzL2xvY2FsU3RvcmFnZUhhbmRsZXJcIjtcclxuXHJcbmNvbnN0IHRhc2sxID0gY3JlYXRlVGFza3MoJ2Nvb2wnKTtcclxuY29uc3QgdGFzazIgPSBjcmVhdGVUYXNrcygnc3VwZXJiJyk7XHJcbmNvbnN0IHRhc2szID0gY3JlYXRlVGFza3MoJ3RyYWdpYycpO1xyXG5jb25zdCB0YXNrNSA9IGNyZWF0ZVRhc2tzKCdldGVybmFsJylcclxuY29uc3QgdGFzazQgPSBjcmVhdGVUYXNrcygnZG9vbScpXHJcbmNvbnN0IHByb2ogPSBjcmVhdGVQcm9qZWN0KCdjb29sZXN0Jyk7XHJcbmNvbnN0IHByb2oyID0gY3JlYXRlUHJvamVjdCgndW5jb29sZXInKVxyXG5jb25zdCBhbGxQcm9qID0gcHJvamVjdEhhbmRsZXIoKVxyXG5jb25zdCBzdG9yYWdlU3RhdHVzID0gc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJyk7XHJcblxyXG5wcm9qLmFkZFRhc2sodGFzazEpO1xyXG5wcm9qLmFkZFRhc2sodGFzazIpO1xyXG5wcm9qLmFkZFRhc2sodGFzazMpO1xyXG5wcm9qMi5hZGRUYXNrKHRhc2s0KTtcclxucHJvajIuYWRkVGFzayh0YXNrNSk7XHJcbi8vIHdpbmRvdy5wcm9qID0gcHJvajtcclxuYWxsUHJvai5hZGRQcm9qZWN0KHByb2opO1xyXG5hbGxQcm9qLmFkZFByb2plY3QocHJvajIpXHJcblxyXG5cclxuaWYgKHN0b3JhZ2VTdGF0dXMgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3REYXRhJykpe1xyXG4gICAgYWxsUHJvai5sb2FkUHJvamVjdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdERhdGEnKSlcclxuICAgIGNvbnNvbGUubG9nKCdsb2FkZWQnKVxyXG59IGVsc2V7XHJcbiAgICBjb25zb2xlLmxvZygnTm8gU3RvcmFnZSBGb3VuZCcpXHJcbn1cclxuXHJcblxyXG5pZiAoc3RvcmFnZVN0YXR1cyl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxQcm9qKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3REYXRhJyxhbGxQcm9qLmV4cG9ydFByb2plY3QoKSlcclxuICAgIGNvbnNvbGUubG9nKCdzYXZlZCB0byBzdG9yYWdlJylcclxufVxyXG5cclxuc3RvcmFnZVN0YXR1cyA/IGFsbFByb2oubG9hZFByb2plY3QobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3REYXRhJykpIDogYWxsUHJvalxyXG5cclxuY29uc29sZS5sb2coYWxsUHJvailcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=