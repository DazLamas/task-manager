import { TasksManager } from './classes/tasks-manager.js';
import { Task } 		from './classes/task.js';

const tm = new TasksManager();

const newTaskBtn 	= document.getElementById('new-task-btn-js');
const startProgress = document.getElementsByClassName('start-progress-js');

newTaskBtn.addEventListener('click', function(e) {//arrow
	tm.createTask(document.getElementById('task-input-js').value);
});

document.addEventListener('click',function(e){
    if(e.target.dataset.js == "start-progress"){
          tm.taskInProgress(Number(e.target.dataset.jsId));
     };
 });