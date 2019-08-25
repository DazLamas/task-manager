// scripts.js

class Task {
  constructor(name) {//TODO:Add ID
    this.name 			= name;
    this.stage			= 0;
    this.time 			= undefined;
    this.resolution 	= undefined;
    this.htmlElemet 	= `<li class="card">
								<h4 class="card-title">${this.name}</h4>
								<button id="start-progress-js" class="button specific-text-box queue">Start!</button>
								<span class="specific-text-box progress">Time spend:</span>
								<ul class="d-flex flex-row specific-text-box finished">
									<li id="display-time-js" class="card-extra-text mr-2">Time:</li>
									<li id="display-resolution-js" class="card-extra-text mr-2">Stage:</li>
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
    this.moveToNextStage(newTask); //make queueEl a prop of obj
  };
  
  moveToNextStage(task) {
  	//Update task stage
  	task.stage = task.stage + 1;
  	//Append to next stage column
  	document.getElementById(`stage-col-${task.stage}-js`).insertAdjacentHTML('beforeend', task.htmlElemet);
  };

  checkQueue() {
    return this.queuedTasks.size;
  };

  startTasks(){
  	//check queue
  	//Get all task an move it 
  }

};







