let todos = [];

window.onload = () => {
	document.querySelector("#btn-app").addEventListener("click", openCreateModal);
};

function createNewTodo() {
	const $select = document.querySelector("#tag");
	const selectValue = $select.options[$select.selectedIndex].value;
	const textAreaValue = document.querySelector("#task-name").value;

	if (checkIfEmpty(textAreaValue, selectValue) === 1) {
		showEmptyError();
		return;
	}

	const todoInfo = {
		todoName: textAreaValue,
		todoTag: selectValue,
		todoId: todos.length,
	};

	todos.push(todoInfo);

	renderNewTodo(todoInfo);
	clearInput();
	clearSelect();
	closeModal();
	addTodoListeners();
}

function renderNewTodo(todo) {
	const $appContainer = document.querySelector(".app__content");

	const $todoTemplate = `
	<div class="card" id=${todo.todoId}>
		<div class="card__wrapper">
			<p class="card__name">${todo.todoName}</p>
			<p class="card__tag">${todo.todoTag}</p>
		</div>
		<div class="card__buttons">
			<div class="card__edit" id="todo-edit">
				<img src="./assets/images/edit-button.svg" />
			</div>
			<div class="card__delete" id="todo-delete">
				<img src="./assets/images/delete-button.svg" />
			</div>
		</div>
	</div>
	`;

	$appContainer.insertAdjacentHTML("beforeend", $todoTemplate);
}

function addTodoListeners() {
	document.querySelectorAll(".card").forEach(($el) => {
		$el.querySelector("#todo-delete").addEventListener("click", deleteTodo);
	});
}

function deleteTodo(e) {
	const $todo = e.target.parentNode.parentNode.parentNode;
	const todoElementId = parseInt($todo.getAttribute("id"));

	todos = todos.filter((todo) => todo.todoId !== todoElementId);
	$todo.remove();
}
