/* Program to allow user to create and edit a To-Do list */

/* define initial To-Do task list */
let tasks = [
	"finish my code",
	"plan a holiday",
	"be nice to the kids",
	"buy flowers for the Weekend",
];

function addTask(taskToDo) {
	/* function to add a new task to the task list */
	if (taskToDo != "") {
		tasks.push(taskToDo);
	}

	refreshTasks();
}

function deleteTask(taskId) {
	tasks.splice(taskId, 1);
	refreshTasks();
}

function moveTaskUp(taskId) {
	let savedTask = tasks[taskId];
	tasks.splice(taskId, 1);
	tasks.splice(taskId - 1, 0, savedTask);
	refreshTasks();
}

function moveTaskDown(taskId) {
	let savedTask = tasks[taskId];
	tasks.splice(taskId, 1);
	tasks.splice(taskId + 1, 0, savedTask);
	refreshTasks();
}

function printTaskList() {
	window.print();
}

function refreshTasks() {
	/* function to redisplay tasks in the array as an HTML table  */

	/* set up HTML Table tags */
	let openTable =
		"<table><thead><tr><th>#</th><th >Task</th><th colspan=3>Actions</th></tr></thead>";

	let task = 0;

	/* define HTML button tags using Font Awesome icons */
	let noAction =
		"<td><button class='disabled'><i class='fa fa-ban'></i></button></td>";

	/* start building up the HTML code for <table */
	myList = openTable;

	for (task in tasks) {
		/* define other button tags, done here so that the current 'task' is inserted into the string literal */

		let del = `<button onclick='deleteTask(${task})'><i class='fa fa-trash'></i></button>`;
		let movUp = `<button onclick='moveTaskUp(${task})'><i class='fa fa-arrow-up'></i></button>`;
		let movDn = `<button onclick='moveTaskDown(${task})'><i class='fa fa-arrow-down'></i></button>`;

		/* each row is one task, plus buttons for delete, move-up and move-down */
		myList +=
			"<tr id='" +
			task +
			"'>" +
			"<td>" +
			(Number(task) + 1) +
			"</td><td style='width:80%'>" +
			tasks[task] +
			"</td><td>" +
			del +
			"</td>";

		/* if it's the first task in the list don't include move-up button */
		if (task > 0) {
			myList += "<td>" + movUp + "</td>";
		} else {
			myList += noAction;
		}

		/* if it's the final task in the list don't include move-down button */
		if (task < tasks.length - 1) {
			myList += "<td>" + movDn + "</td>";
		} else {
			myList += noAction;
		}

		/* close the row */
		myList += "</tr>";
	}

	/* close HTML table tag */
	myList += "</table>";

	/* Display the table of tasks */
	document.getElementById("outputArea").innerHTML = myList;
}

/* -- Start of Processing ---------------------- */
refreshTasks();
