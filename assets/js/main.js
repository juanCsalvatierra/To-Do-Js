let todos = [];

window.addEventListener("load", () => {
	document.querySelector("#btn-app").addEventListener("click", showModal);
	document.querySelector("#sort-by").addEventListener("change", sortTodos);
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
}

function renderNewTodo(todo) {
	const $appContainer = document.querySelector(".app__content");

	const $todoTemplate = `
	<div class="card ${todo.completed ? "complete-todo" : null}" id=${todo.todoId}>
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
	highToLow.forEach((todo) => renderNewTodo(todo));
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
	lowToHigh.forEach((todo) => renderNewTodo(todo));
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

	sortTodo.forEach((todo) => {
		renderNewTodo(todo);
	});
}
