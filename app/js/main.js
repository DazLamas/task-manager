import { TasksManager } from './classes/tasks-manager.js';

(function(document, window, TasksManager, undefined){	

	const tm 			= new TasksManager();
	const newTaskBtn 	= document.getElementById('new-task-btn-js');
	const startProgress = document.getElementsByClassName('start-progress-js');

	document.addEventListener('click', (e) => {
	 
	   switch (e.target.dataset.js) {
	    case "start-progress":
	       tm.taskInProgress(Number(e.target.dataset.jsId));
	      break;
		case "remove-task":
			tm.removeTask(Number(e.target.dataset.jsId));
		break;
	    default:
	      return false
	  };

	});

	newTaskBtn.addEventListener('click', (e) => {
	 tm.createTask(document.getElementById('task-input-js').value);
	});	

	tm.createTask('Clear cache');//Simulate task, only for demo!

})(document, window, TasksManager);


