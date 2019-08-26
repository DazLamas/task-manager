/* task.js */

import { TasksManager } from './tasks-manager.js';

export class Task {
  constructor(id, name) {
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
                              Completed in <span class="display-duration-js"></span>s
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