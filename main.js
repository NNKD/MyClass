// SideBar
const sideBar = document.getElementById("sidebar");
const sideBarContainer = document.getElementById("sidebar_container");
const user = document.getElementById("user");
const iconRemoveSideBar = document.getElementById("remove");

function showSideBar() {
	sideBar.classList.toggle("show_sidebar");
}

function hideSideBar() {
	sideBar.classList.remove("show_sidebar");
}

user.addEventListener("click", showSideBar);
iconRemoveSideBar.addEventListener("click", hideSideBar);

// Nhấn ngoài phần lớp đen tắt
sideBar.addEventListener("click", hideSideBar);

// Bỏ nhấn bên trong tắt
sideBarContainer.addEventListener("click", function (event) {
	event.stopPropagation();
});

// Notice
const bellIcon = document.getElementById("bell");
const notice = document.getElementById("notice");

function showNotice() {
	notice.classList.toggle("show_notice");
}

bellIcon.addEventListener("click", showNotice);

// search
let input = document.querySelector(".search_input");

function search() {
	let menuItem = Array.from(document.querySelectorAll(".menu_item"));
	let textInput = input.value.toLowerCase();

	menuItem.forEach(function (el) {
		let textLowerCase = el.innerText.toLowerCase();
		if (textLowerCase.indexOf(textInput) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	});
}

// input
let searchList = document.querySelector(".search_list");
let cover = document.querySelector(".cover");

input.onclick = function () {
	searchList.style.display = "block";
	cover.style.display = "block";
};

cover.onclick = function () {
	searchList.style.display = "none";
	cover.style.display = "none";
};

// modal add
let addButton = document.getElementById("add");
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal_content");
let removeModal = document.querySelector(".removeModal");

function showModal() {
	modal.classList.add("show_modal");
}

function hideModal() {
	modal.classList.remove("show_modal");
}

addButton.addEventListener("click", showModal);
modal.addEventListener("click", hideModal);
removeModal.addEventListener("click", hideModal);
modalContent.addEventListener("click", function (event) {
	event.stopPropagation();
});
