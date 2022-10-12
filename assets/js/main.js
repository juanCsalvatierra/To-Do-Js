const $addButton = document.querySelector(".app__button");
$addButton.addEventListener("click", showModal);

function showModal() {
	const $appContainer = document.querySelector(".create-container");
	$appContainer.classList.add("active");
	addEventClose();
}

function addEventClose() {
	const $closeButton = document.querySelector(".create__close");
	$closeButton.addEventListener("click", closeModal);
}

function closeModal() {
	const $appContainer = document.querySelector(".create-container");
	$appContainer.classList.remove("active");
}
