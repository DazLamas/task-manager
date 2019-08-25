// scripts.js

class Task {
  constructor(name) {//TODO:Add ID
    this.name 			= name;
    this.stage			= 0;
    this.time 			= undefined;
    this.resolution 	= undefined;
    this.htmlElemet 	= `<li class="card">
								<h4 class="card-title">${this.name}</h4>
								<ul class="d-flex flex-row invisible">
									<li class="card-extra-text mr-2">Time:</li>
									<li class="card-extra-text mr-2">Stage</li>
								</ul>
							</li>`;
  }
}

class TasksManager {
  constructor() {
    this.queuedTasks = [];
  };

  createTask(name) {
	//Create  	
  	const newTask = new Task(name);
  	//Add to Queue
    this.queuedTasks.push(newTask);
    //Move DOM Element to Queue Column
    this.moveToNextStage(newTask.stage, newTask.htmlElemet); //make queueEl a prop of obj
  };
  
  moveToNextStage(taskCurrentStage, taskHtmlNode) {
  	// 
  	const nextStage  = taskCurrentStage + 1;
  	const parentNode = `stage-col-${nextStage}-js`;

  	document.getElementById(parentNode).insertAdjacentHTML('beforeend', taskHtmlNode);
  };

  checkQueue() {
    return this.queuedTasks.size;
  };

  getNextStage(task) {
  	return task.stage + 1;
  }

  startTasks(){
  	//check queue
  	//Get all task an move it 
  }

};







