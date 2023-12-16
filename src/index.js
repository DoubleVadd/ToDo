import createTasks from "./Objects/tasks"
import createProject from "./Objects/projects";

const task1 = createTasks();
const proj = createProject();
proj.addTask(task1)
