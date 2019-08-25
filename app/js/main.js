const tm = new TasksManager();

//Main:

//Create Task
const newTaskBtn = document.getElementById('new-task-btn-js');

newTaskBtn.addEventListener('click', function() {//TODO:Convert into arrow fn
	tm.createTask(document.getElementById('task-input-js').value);
	// console.log(tm);
});