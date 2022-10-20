let todos = [];

window.addEventListener("load", () => {
	document.querySelector("#btn-app").addEventListener("click", showModal);
	document.querySelector("#sort-by").addEventListener("change", sortTodos);

	todos = JSON.parse(localStorage.getItem("todos")) || [];
	renderExistingTodos(todos);
});

function createNewTodo() {
	const $select = document.querySelector("#tag");
	const selectValue = $select.options[$select.selectedIndex].value;
	const textAreaValue = document.querySelector("#task-name").value;
	const todoPriorityIndex = $select.options.selectedIndex;

	if (checkIfEmpty(textAreaValue, selectValue) === 1) {
		showEmptyError();
		return;
	}

	const todoInfo = {
		todoName: textAreaValue,
		todoTag: selectValue,
		todoId: todos.length,
		todoPriority: todoPriorityIndex,
		completed: false,
	};

	todos.push(todoInfo);

	renderNewTodo(todoInfo);
	clearInput();
	clearSelect();
	closeModal();
	addTodoListeners();
	sincronizationStorage();
}

function renderNewTodo(todo) {
	const $appContainer = document.querySelector(".app__content");

	const $todoTemplate = `
	<div class="${todo.completed ? "card complete-todo" : "card"}" id=${
		todo.todoId
	}>
		<div class="card__wrapper">
			<p class="card__name">${todo.todoName}</p>
			<p class="card__tag">${todo.todoTag}</p>
		</div>
		<div class="card__buttons">
			<div class="card__complete" id="todo-complete">
				<img src="./assets/images/complete-button.svg" />
			</div>
			<div class="card__delete" id="todo-delete">
				<img src="./assets/images/delete-button.svg" />
			</div>
		</div>
	</div>
	`;

	$appContainer.insertAdjacentHTML("beforeend", $todoTemplate);
	addTodoListeners();
}
