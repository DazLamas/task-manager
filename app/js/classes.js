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

  updateStage(stage) {
   this.stage = stage + 1;//Review sintax and change for setter
  };

  updateResolution(resolution) {//Setter
   this.resolution = resolution;
  };

  setDuration() {
    this.duration = generateRandomNumber(7000, 10000);
  };

  setNode(taskId) {
    this.node = document.getElementById(`task-${taskId}`);//Setter!!!!
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
    //Save DOM Element node at Task Object in order to move it throw each column
    newTask.setNode(newTask.id);
  };
  
  moveToNextStage(task) {

  	task.updateStage(task.stage); //* también se podría hacer el update de X por separado e intentar arreglar ahí...
  	document.getElementById(`stage-col-${task.stage}-js`).appendChild(task.node);//Utils

  };

  removeTask(task) {
      task.node.remove(); //From DOM
      this.tasks.delete(task.id); //From Object
  };


  taskInProgress(taskId){

  	let task 	  = this.tasks.get(taskId);  	

    //To in progress stage
  	this.moveToNextStage(task);

    task.setDuration();
    task.updateResolution(randomElementInArray(['success', 'failed']));

  	setTimeout(() => {
		  task.node.querySelector(".display-duration-js").innerText 	= Math.round(task.duration/1000);
		  task.node.querySelector(".display-resolution-js").innerText = task.resolution;////prop of task
      task.node.querySelector(".display-resolution-js").classList.add(task.resolution);//prop of task
	  	//To finished stage
      this.moveToNextStage(task);
	}, task.duration);

  };

};







