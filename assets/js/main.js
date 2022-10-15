window.onload = () => {
	document
		.querySelector("#app-button")
		.addEventListener("click", openCreateModal);
};

function createNewTodo() {
	const textAreaValue = document.querySelector(".create__textarea").value;
	const $select = document.querySelector(".create__select");
	const selectValue = $select.options[$select.selectedIndex].value;

	const checkResult = checkIfEmpty(textAreaValue, selectValue);

	if (checkResult === 1) {
		showInputEmptyError();
		return;
	}

	const $appContainer = document.querySelector(".app__content");
	const $card = document.createElement("div");
	$card.classList.add("card");
	const todoTemplate = `
		<div class="card__wrapper">
			<p class="card__name">${textAreaValue}</p>
			<p class="card__tag">${selectValue}</p>
		</div>
		<div class="card__buttons">
			<div class="card__edit">
				<img src="./assets/images/edit-button.svg" />
			</div>
			<div class="card__delete">
				<img src="./assets/images/delete-button.svg" />
			</div>
		</div>`;

	$card.innerHTML = todoTemplate;
	$appContainer.append($card);
	clearInput();
	clearSelect();
	closeModal();
	addListenersTodo($card);
}

function addListenersTodo($card) {
	$card.addEventListener("click", completeTodo);
	$card
		.querySelector(".card__edit")
		.addEventListener("click", () => editTodo($card));
	$card.querySelector(".card__delete").addEventListener("click", deleteTodo);

	// document.querySelectorAll(".card").forEach(($e) => {
	// 	$e.addEventListener("click", completeTodo);
	// 	$e.querySelector(".card__edit").addEventListener("click", editTodo);
	// 	$e.querySelector(".card__delete").addEventListener("click", deleteTodo);
	// });
}

function editTodo($card) {
	openEditModal();

	// const $card = event.target.parentNode.parentNode.parentNode;
	const nameContent = $card.querySelector(".card__name").textContent;
	const tagContent = $card.querySelector(".card__tag").textContent;

	document.querySelector(".create__textarea").value = nameContent;
	document.querySelector(".create__select").value = tagContent;

	document.querySelector("#edit-button").addEventListener("click", () => {
		console.log($card);
	});
}

function confirmEdit($card) {
	const $select = document.querySelector(".create__select");
	const selectValue = $select.options[$select.selectedIndex].value;
	const textAreaValue = document.querySelector(".create__textarea").value;

	$card.querySelector(".card__name").textContent = textAreaValue;
	$card.querySelector(".card__tag").textContent = selectValue;

	clearInput();
	clearSelect();
	closeModal();
}
