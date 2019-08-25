// scripts.js

class Task {
  constructor(id, name) {//TODO:Add ID
    this.id 			= id;
    this.name 			= name;
    this.stage			= 0;
    this.time 			= undefined;
    this.resolution 	= undefined;
    this.htmlCode 		= `<li id="task-${this.id}" class="card">
								<h4 class="card-title">${this.name}</h4>
								<button class="button specific-text-box queue" data-js="start-progress" data-js-id="${this.id}">Start!</button>
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
    this.tasks = new Map([]);
  };


  createTask(name) {
	//Create  	
  	const newTask = new Task(generateUniqueId(), name);
  	//Add to Queue
    this.tasks.set(newTask.id, newTask);
    //Move DOM Element to Queue Column
    this.moveToNextStage(newTask); //make queueEl a prop of obj
  };

  updateStage(task) {
	task.stage = task.stage + 1;//Review sintax and change for setter
  }
  
  moveToNextStage(task) {

  	this.removeTaskFromCurrentStage(task);
  	this.updateStage(task);
  	//Append to next stage column
  	document.getElementById(`stage-col-${task.stage}-js`)
  		.insertAdjacentHTML('beforeend', task.htmlCode);

  };


  removeTaskFromCurrentStage(task) {
  	
  	const itemToRemove = document.getElementById(`task-${task.id}`);
  	
  	if(itemToRemove) {//False means task isn't at Queue yet (Stage 0 so)
  		itemToRemove.remove(); 
  	}

  };


  startTask(taskId){
  	this.moveToNextStage(this.tasks.get(taskId));
  };

};







