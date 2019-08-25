// scripts.js

class Task {
  constructor(name) {//TODO:Add ID
    this.name 			= name;
    this.state			= 0;
    this.time 			= undefined;
    this.resolution 	= undefined;
    this.htmlElemet 	= `<li class="card">
								<h4 class="card-title">${this.name}</h4>
								<ul class="d-flex flex-row invisible">
									<li class="card-extra-text mr-2">Time:</li>
									<li class="card-extra-text mr-2">State</li>
								</ul>
							</li>`;
  }
}


class TasksManager {
  constructor() {
    this.queuedTasks = [];
  }

  createTask(name) {
  	const newTask = new Task(name);

    this.queuedTasks.push(newTask);
    this.addTask("queue-tasks-cont-js", newTask);
  }
  
  addTask(where, task) {
   
   const parent = document.getElementById(where);
   const string = task.htmlElemet;

   parent.insertAdjacentHTML('beforeend', string);

  }

  checkQueue() {
    return this.queuedTasks.size;
  }

}



