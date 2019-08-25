const tm = new TasksManager();

const newTaskBtn 	= document.getElementById('new-task-btn-js');
const startProgress = document.getElementsByClassName('start-progress-js');

newTaskBtn.addEventListener('click', function() {//TODO:Convert into arrow fn
	tm.createTask(document.getElementById('task-input-js').value);
});

document.addEventListener('click',function(e){//TODO:Mejorar...
    if(e.target.dataset.js == "start-progress"){
          tm.startTask(Number(e.target.dataset.jsId));
     };
 });