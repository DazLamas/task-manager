/* task-manager.js */

import { Task } from './task.js';

export class TasksManager {

  constructor() {
    this.tasks     = new Map([]);
    this.queueNode = document.getElementById(`stage-col-1-js`);
  };


  createTask(name) {
	
  	const newTask = new Task(generateUniqueId(), name);
  	
    //Add tasks to Tasks Manager array
    this.tasks.set(newTask.id, newTask);
    //Add task to queue column
    addStringAsDomElement(this.queueNode, newTask.htmlCode);
    //Save DOM Element node at Task Class in order to move it throw each column
    newTask.setNode(newTask.id);
  };
  
  moveToNextStage(task) {

  	task.setStage(task.stage);
  	appendChild(document.getElementById(`stage-col-${task.stage}-js`), task.node);
    
  };

  removeTask(taskId) {

      const task = this.tasks.get(taskId);    

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







