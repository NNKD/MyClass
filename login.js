let sinhVienBtn = document.querySelector(".sinhvien");
let giangVienBtn = document.querySelector(".giangvien");
var test = 1;

giangVienBtn.onclick = function () {
	if (test == 1) {
		sinhVienBtn.style.background = "#eee";
		giangVienBtn.style.background = "#5cee4d";
		test = 0;
	}
};

sinhVienBtn.onclick = function () {
	if (test == 0) {
		giangVienBtn.style.background = "#eee";
		sinhVienBtn.style.background = "#5cee4d";
		test = 1;
	}
};

let inputMail = document.querySelector(".input_mail");
let inputPass = document.querySelector(".input_pass");

function login() {
	var username = inputMail.value;
	var password = inputPass.value;
	if (
		(username == "21130035@st.hcmuaf.edu.vn" ||
			username == "21130047@st.hcmuaf.edu.vn") &&
		password == "123456" &&
		test == 1
	) {
		window.location.href = "./home.html";
	} else if (username == "admin" && password == "123456" && test == 0) {
		window.location.href = "./homeGV.html";
	} else if (username == "" || password == "") {
		warning();
	} else {
		error();
	}
}

let btnLog = document.querySelector(".btn_login");
// error
let toastError = document.querySelector(".toasterror");
let removeToastError = document.querySelector(".toast_close--error");

function error() {
	toastError.style.display = "block";
	setTimeout(function () {
		toastError.style.display = "none";
	}, 4000);
}

removeToastError.onclick = function () {
	toastError.style.display = "none";
};

// warning
let toastWarning = document.querySelector(".toastwarning");
let removeToastWarning = document.querySelector(".toast_close--warning");

function warning() {
	toastWarning.style.display = "block";
	setTimeout(function () {
		toastWarning.style.display = "none";
	}, 4000);
}

removeToastWarning.onclick = function () {
	toastWarning.style.display = "none";
};
