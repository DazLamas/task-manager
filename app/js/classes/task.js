/* task.js */
//Task Class. Most of its props and meths are explained at task-manager.js

import { TasksManager } from './tasks-manager.js';

export class Task {

  constructor(id, name) {
    this.id 			    = id;
    this.name 			  = name || "unnamed task";
    this.stage			  = 0;
    this.duration		  = undefined;
    this.resolution 	= undefined;
    // this.htmlCode 	= a; //no puede ser porque solo se ejecuta una vez
  };

  // getHtmlCode() {
  //    return htmlStrings[this.stage]; //no puede ser porque necesito pasar 
  // };

  increseStage() {
   this.stage++;
  };

  getNextStage() {
   return this.stage++
  };

  setResolution(resolution) {
   this.resolution = randomElementInArray(['success', 'failed']);
  };

  setDuration() {
    this.duration = generateRandomNumber(7, 10);
  };

  setNode(taskId) {
    this.node = document.getElementById(`task-${taskId}`);
  };

};