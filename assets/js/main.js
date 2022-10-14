document.querySelector(".app__button").addEventListener("click", showModal);

function showModal() {
	document.querySelector(".create-container").classList.add("active");

	addEventClose();
	addCreateListener();
}

function addEventClose() {
	document
		.querySelector(".create__close")
		.addEventListener("click", closeModal);
}

function closeModal() {
	document.querySelector(".create-container").classList.remove("active");
}

function addCreateListener() {
	document
		.querySelector(".create__button")
		.addEventListener("click", createNewTodo);
}

function createNewTodo() {
	const textAreaValue = document.querySelector(".create__textarea").value;
	const select = document.querySelector(".create__select");
	const selectValue = select.options[select.selectedIndex].value;

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
	clearModal();
	closeModal();
}

function checkIfEmpty(textAreaValue, selectValue) {
	if (textAreaValue === "") {
		return 1;
	}
}

function showInputEmptyError() {
	console.log("ERROR: input is empty.");
}

function clearModal() {
	document.querySelector(".create__textarea").value = "";
}
