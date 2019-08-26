// scripts.js

class Task {
  constructor(id, name) {//TODO:Add ID
    this.id 			    = id;
    this.name 			  = name || "unnamed task";
    this.stage			  = 1;
    this.duration		  = undefined;
    this.resolution 	= undefined;
    this.node         = undefined;
    this.htmlCode 		= `<li id="task-${this.id}" class="card">
  								          <h4 class="card-title capitalize">${this.name}</h4>
                            <span class="card-extra-text stage-text-box queue">Ready to start!</span>
                            <span class="card-extra-text stage-text-box progress">Working on it...</span>
                            
                            <div class="loading stage-text-box progress"><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div></div>

                            <span class="card-extra-text stage-text-box finished">
                              Duration: <span class="display-duration-js"></span>s
                            </span>
  

  								          <span class="card-text-box stage-text-box finished display-resolution-js"></span>
                            <button class="card-btn button btn-primary stage-text-box queue" data-js="start-progress" data-js-id="${this.id}">Start!</button>
							           </li>`;
  };

  setStage(value) {
   this.stage++;
  };

  setResolution(resolution) {
   this.resolution = resolution;
  };

  setDuration() {
    this.duration = generateRandomNumber(7000, 10000);
  };

  setNode(taskId) {
    this.node = document.getElementById(`task-${taskId}`);
  };

};

class TasksManager {

  constructor() {
    this.tasks = new Map([]);
  };


  createTask(name) {
	
  	const newTask = new Task(generateUniqueId(), name);
  	//Add tasks to Tasks Manager array
    this.tasks.set(newTask.id, newTask);
    //Add task to queue column
    document.getElementById(`stage-col-1-js`) // Puede que esto sea mejor sacarlo a una fn "utils"
      .insertAdjacentHTML('beforeend', newTask.htmlCode); //Esto se puede sacar a una condición y realizar solo si es 0; luego se asigna id una vez incrustado y después en el else se trabaja ya con el DOMElemnt....igual así se puede actualizar el elemento html
    //Save DOM Element node at Task Class in order to move it throw each column
    newTask.setNode(newTask.id);
  };
  
  moveToNextStage(task) {

  	task.setStage(task.stage); //* también se podría hacer el update de X por separado e intentar arreglar ahí...
  	document.getElementById(`stage-col-${task.stage}-js`).appendChild(task.node);//Utils

  };

  removeTask(task) {
      task.node.remove(); //From DOM
      this.tasks.delete(task.id); //From Object
  };


  taskInProgress(taskId){

  	const task 	               = this.tasks.get(taskId);  	
    const resolutionDisplay    = task.node.querySelector(".display-resolution-js");

    //To in progress stage
  	this.moveToNextStage(task);
    //Update task props
    task.setDuration();
    task.setResolution(randomElementInArray(['success', 'failed']));
    //Simulate task progress and resolution
    setTimeout(this.finishTask, task.duration, task, this); //this is "window" at setTimeOut fn

  };

  finishTask(task, taskManagerObj) {

    const resolutionDisplay = task.node.querySelector(".display-resolution-js");

    //Display props at DOM
    task.node.querySelector(".display-duration-js").innerText = Math.round(task.duration/1000);
    resolutionDisplay.innerText = task.resolution;
    resolutionDisplay.classList.add(task.resolution);
    
    //To finished stage column
    taskManagerObj.moveToNextStage(task);
  }

};







