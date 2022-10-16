function openCreateModal() {
	showModal();
	showCreateBtn();
	hideEditBtn();

	document
		.querySelector("#btn-create")
		.addEventListener("click", createNewTodo);
}

function openEditModal() {
	showModal();
	showEditBtn();
	hideCreateBtn();
}

function showModal() {
	document.querySelector("#modal-container").classList.add("active");
	document.querySelector("#modal-close").addEventListener("click", closeModal);
}

function closeModal() {
	document.querySelector("#modal-container").classList.remove("active");
	clearInput();
	clearSelect();
}

function checkIfEmpty(textAreaValue, selectValue) {
	if (textAreaValue === "" || selectValue === "-- select --") {
		return 1;
	}
}

function showEmptyError() {
	console.log("ERROR: complete all fields");
}

function completeTodo(e) {
	if (e.target.classList.contains("card")) {
		e.target.classList.toggle("complete-todo");
	}
}

function clearInput() {
	document.querySelector(".modal__textarea").value = "";
}

function clearSelect() {
	const $select = document.querySelector(".modal__select");
	const selectDefault = $select.options[0].value;
	$select.options.selectedIndex = selectDefault;
}

function showCreateBtn() {
	document.querySelector("#btn-create").style.display = "block";
}

function hideCreateBtn() {
	document.querySelector("#btn-create").style.display = "none";
}

function showEditBtn() {
	document.querySelector("#btn-edit").style.display = "block";
}

function hideEditBtn() {
	document.querySelector("#btn-edit").style.display = "none";
}
