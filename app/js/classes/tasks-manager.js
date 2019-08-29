/* task-manager.js */

import { Task } from './task.js';

export class TasksManager {

  constructor() {
    this.tasks     = new Map([]);
    this.queueNode = document.getElementById(`stage-col-1-js`);
  };

  /* 
   * Intance Task class ( with id and name) add it to Task Manager queue, the  
   * prop of TaskManage Class and at DOM.
   *
   * @params name · string · Value from input#task-input-js (index.html)
   * @Needs task.js | utilities.js
   * @Used  main.js | index.html
   */
  createTask(name) {
	
  	const task = new Task(generateUniqueId(), name);
    
    this.tasks.set(task.id, task);//Add tasks to Tasks Manager prop
    
    this.moveToNextStage(task); //Add task to queue column
  };
  
  /* 
   * Common meth to move task between colums-stages. Its base on each
   * task stage value, which begins on 1.
   * The posible values are: 1 for queue, 2 for in progress and 3 for finished.
   * Each time a task is moved, it stage increases 1 unit automatically (Task.setStage fn)
   * and the DOM node is removed from its current parent and injected and the next column
   * with appendChild() fn.
   *
   * @params task · obj · task to move
   * @Needs  task.js | utilities.js
   */
  moveToNextStage(task, taskManager = this) {

  	task.setStage(task.stage);//Increase stage
    
    if(task.stage !== 1){taskManager.removeTask(task.id);} //Avoid removing node when task is being creating.
    
    addStringAsDomElement(document.getElementById(`stage-col-${task.stage}-js`), getHtmlCode(task.stage, task));
    
    task.setNode(task.id);
  };

  /* 
   * Remove task from DOM and TaskManager Obj using its ID number, which was 
   * generating at TaskManager.createTask method. This value is also the
   * key for each task at TaskManager.queue prop-map. The only place where all
   * tasks are stored. Tasks are easily manipulable having this value.
   *
   * @params taskId · number · task id, key at TaskManager.tasks map
   *
   * @Needs task.js
   */
  removeTask(taskId, task) {

      task = task || this.tasks.get(taskId);

      task.node.remove(); //From DOM

      if(task.stage === 4){this.tasks.delete(task.id)}; //From Object only when remove-btn is pressed
  };

  /* 
   * This method will move current task to in progress stage with 
   * common meth moveToNextStage, then it simulates its progress
   * generating a random resolution (success or failed) and a the 
   * supposed seconds spent during the task progress. 
   * 
   *
   * @params taskId · number · task id, key at TaskManager.tasks map
   *
   * @Needs task.js
   */
  taskInProgress(taskId){

  	const task = this.tasks.get(taskId);  //Get task obj from array

    //Generate task props duration and final resolution
    task.setDuration();
    task.setResolution();

    //Move in-progress stage
  	this.moveToNextStage(task);
    
    // Simulate task progress... Passing finishTask as callback and this 
    // in order to invoke its meth thenfore (this is "window" at setTimeout callback).
    setTimeout(this.moveToNextStage, task.duration, task, this);

  };

};







