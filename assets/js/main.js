const todos = [];

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
			<div class="card__edit">
				<img src="./assets/images/edit-button.svg" />
			</div>
			<div class="card__delete">
				<img src="./assets/images/delete-button.svg" />
			</div>
		</div>
	</div>
	`;

	$appContainer.insertAdjacentHTML("beforeend", $todoTemplate);
	clearInput();
	clearSelect();
	closeModal();
}
