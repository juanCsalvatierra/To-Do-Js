function openCreateModal() {
	showModal();
	showCreateBtn();
	hideEditBtn();
	addCreateListener();
}

function openEditModal() {
	showModal();
	showEditBtn();
	hideCreateBtn();
}

function showModal() {
	document.querySelector("#modal-container").classList.add("active");

	addEventClose();
}

function addEventClose() {
	document.querySelector("#modal-close").addEventListener("click", closeModal);
}

function closeModal() {
	document.querySelector("#modal-container").classList.remove("active");
	clearInput();
	clearSelect();
}

function addCreateListener() {
	document
		.querySelector("#create-button")
		.addEventListener("click", createNewTodo);
}

function checkIfEmpty(textAreaValue, selectValue) {
	if (textAreaValue === "") {
		return 1;
	}
}

function showInputEmptyError() {
	console.log("ERROR: input is empty.");
}

function completeTodo(e) {
	if (e.target.classList.contains("card")) {
		e.target.classList.toggle("complete-todo");
	}
}

function clearInput() {
	document.querySelector(".create__textarea").value = "";
}

function clearSelect() {
	const $select = document.querySelector(".create__select");
	const selectDefault = $select.options[0].value;
	$select.options.selectedIndex = selectDefault;
}

function deleteTodo() {}

function showCreateBtn() {
	document.querySelector(".create__button").style.display = "block";
}

function hideCreateBtn() {
	document.querySelector(".create__button").style.display = "none";
}

function showEditBtn() {
	document.querySelector(".edit-button").style.display = "block";
}

function hideEditBtn() {
	document.querySelector(".edit-button").style.display = "none";
}
