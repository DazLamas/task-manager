// scripts.js

class Task {
  constructor(id, name) {
    this.id 			= id;
    this.name 			= name;
    this.state			= 0;
    this.time 			= undefined;
    this.resolution 	= undefined;
    this.htmlElemet 	= `<li class="card">
								<h4 class="card-title">Task Name</h4>
								<ul class="d-flex flex-row invisible">
									<li class="card-extra-text mr-2">Time</li>
									<li class="card-extra-text mr-2">State</li>
								</ul>
							</li>`;
  }
}


class TasksManager {
  constructor() {
    this.queuedTasks = [];
  }

  createTask(id, name) {
    this.queuedTasks.push(new Task(id, name));
  }
  
  checkQueue() {
    return this.queuedTasks.size;
  }

}



