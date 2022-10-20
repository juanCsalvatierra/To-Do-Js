function showModal() {
	document.querySelector("#modal-container").classList.add("active");
	document.querySelector("#modal-close").addEventListener("click", closeModal);
	document
		.querySelector("#btn-create")
		.addEventListener("click", createNewTodo);
}

function closeModal() {
	document.querySelector("#modal-container").classList.remove("active");
	clearInput();
	clearSelect();
}

function checkIfEmpty(textAreaValue, selectValue) {
	if (textAreaValue === "" || selectValue === "-- select tag --") {
		return 1;
	}
}

function showEmptyError() {
	console.log("ERROR: complete all fields");
}

function checkTodoElement($todo) {
	$todo.classList.toggle("complete-todo");
}

function clearInput() {
	document.querySelector(".modal__textarea").value = "";
}

function clearSelect() {
	const $select = document.querySelector(".modal__select");
	const selectDefault = $select.options[0].value;
	$select.options.selectedIndex = selectDefault;
}

function addTodoListeners() {
	document.querySelectorAll(".card").forEach(($el) => {
		$el.querySelector("#todo-complete").addEventListener("click", completeTodo);
		$el.querySelector("#todo-delete").addEventListener("click", deleteTodo);
	});
}

function clearHtml() {
	const $appContainer = document.querySelector(".app__content");
	$appContainer.innerHTML = "";
}

function completeTodo(e) {
	const $todo = e.target.parentNode.parentNode.parentNode;
	const todoElementId = parseInt($todo.getAttribute("id"));

	todos.forEach((todo) => {
		if (todo.todoId === todoElementId) {
			if (todo.completed) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
			console.log(todo);
		}
	});

	checkTodoElement($todo);
	sincronizationStorage();
}

function deleteTodo(e) {
	const $todo = e.target.parentNode.parentNode.parentNode;
	const todoElementId = parseInt($todo.getAttribute("id"));

	todos = todos.filter((todo) => todo.todoId !== todoElementId);
	$todo.remove();
	sincronizationStorage();
}

function sincronizationStorage() {
	localStorage.setItem("todos", JSON.stringify(todos));
}

function renderExistingTodos(todosArg) {
	todosArg.forEach((todo) => {
		renderNewTodo(todo);
	});
}

function sortTodos(e) {
	value = e.target.value;

	if (value === "high-to-low") {
		sortHighToLow();
		return;
	}

	if (value === "low-to-high") {
		sortLowToHigh();
		return;
	}

	if (value === "not-completed") {
		sortNotComplete();
		return;
	}
}

function sortHighToLow() {
	const highToLow = todos.sort((a, b) => {
		if (a.todoPriority === b.todoPriority) {
			return 0;
		}
		if (a.todoPriority > b.todoPriority) {
			return -1;
		}
		return 1;
	});

	clearHtml();
	renderExistingTodos(highToLow);
}

function sortLowToHigh() {
	const lowToHigh = todos.sort((a, b) => {
		if (a.todoPriority === b.todoPriority) {
			return 0;
		}
		if (a.todoPriority < b.todoPriority) {
			return -1;
		}
		return 1;
	});

	clearHtml();
	renderExistingTodos(lowToHigh);
}

function sortNotComplete() {
	const done = [];
	const notDone = [];
	let sortTodo = [];

	todos.forEach((todo) => {
		if (todo.completed) {
			done.push(todo);
		} else {
			notDone.push(todo);
		}
	});

	sortTodo = [...notDone, ...done];

	clearHtml();
	renderExistingTodos(sortTodo);
}
