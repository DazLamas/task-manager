import { TasksManager } from './classes/tasks-manager.js';

(function(document, window, TasksManager, undefined){	

	const tm 			= new TasksManager();
	const newTaskBtn 	= document.getElementById('new-task-btn-js');
	const startProgress = document.getElementsByClassName('start-progress-js');

	document.addEventListener('click', (e) => {//Triggers are not create when event is delegated onload
	 
	   switch (e.target.dataset.js) {//Desired target has dataset.jsId identifier
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
	 tm.createTask(document.getElementById(e.target.dataset.anchor).value);//Trigger keeps its input id at dataset.anchor atributte
	});	

	tm.createTask('Clear cache');//Simulate task, only for demo!

})(document, window, TasksManager);


