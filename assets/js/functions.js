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
			todo.completed = true;
		}
	});

	checkTodoElement($todo);
}

function deleteTodo(e) {
	const $todo = e.target.parentNode.parentNode.parentNode;
	const todoElementId = parseInt($todo.getAttribute("id"));

	todos = todos.filter((todo) => todo.todoId !== todoElementId);
	$todo.remove();
}
