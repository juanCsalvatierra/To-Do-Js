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
