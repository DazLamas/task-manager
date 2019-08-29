const getHtmlCode = function(stage, task) {

	const htmlStrings = {
		"1": `<li id="task-${task.id}" class="card">
						<h4 class="card-title capitalize">${task.name}</h4>
		                <span class="card-extra-text">Ready to start!</span>
		                <button class="card-btn button btn-primary" data-js="start-progress" data-js-id="${task.id}">Start!</button>
					</li>`,
		"2": `<li id="task-${task.id}" class="card">
					<h4 class="card-title capitalize">${task.name}</h4>
	                <span class="card-extra-text">Working on it...</span>
	                <div class="loading"><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div></div>
				</li>`,
		"3": `<li id="task-${task.id}" class="card">
  					<h4 class="card-title capitalize">${task.name}</h4>
                    <span class="card-extra-text">
                      Completed in:  <span>${task.duration}</span>s
                    </span>
                    <ul class="card-footer">
                      <li>
                      	<span class="card-text-box ${task.resolution}">${task.resolution}</span>
                      </li>
                      <li>
                      	<i data-js="remove-task" class="fas color-light fa-trash pointer" data-js-id="${task.id}"></i>
                      </li>
                    </ul>
							        
				</li>`
	}

	return htmlStrings[stage];
	
};