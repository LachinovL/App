function downloadFileOne() {
	let inputs = document.getElementById('download-one');
	let label = inputs.nextElementSibling;
	let labelVal = label.innerHtml;

	inputs.addEventListener('change', function (e) {
		let fileName = '';
		fileName = this.files[0].name;
		if (fileName) {
			label.innerHTML = fileName;
		} else {
			label.innerHTML = labelVal;
		}
	});
}

function downloadFileTwo() {
	let inputs = document.getElementById('download-two');
	let label = inputs.nextElementSibling;
	let labelVal = label.innerHtml;

	inputs.addEventListener('change', function (e) {
		let fileName = '';
		fileName = this.files[0].name;
		if (fileName) {
			label.innerHTML = fileName;
		} else {
			label.innerHTML = labelVal;
		}
	});
}

const initAppOne = () => {
	const droparea = document.querySelector('.table-form__file_one');
	const active = () => droparea.classList.add("green-border");
	const inactive = () => droparea.classList.remove("green-border");
	const prevents = (e) => e.preventDefault();

	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evtName => {
		droparea.addEventListener(evtName, prevents);
	});

	['dragenter', 'dragover'].forEach(evtName => {
		droparea.addEventListener(evtName, active);
	});

	['dragleave', 'drop'].forEach(evtName => {
		droparea.addEventListener(evtName, inactive);
	});

	droparea.addEventListener("drop", handleDropOne)
}

const initAppTwo = () => {
	const droparea = document.querySelector('.table-form__file_two');
	const active = () => droparea.classList.add("green-border");
	const inactive = () => droparea.classList.remove("green-border");
	const prevents = (e) => e.preventDefault();

	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evtName => {
		droparea.addEventListener(evtName, prevents);
	});

	['dragenter', 'dragover'].forEach(evtName => {
		droparea.addEventListener(evtName, active);
	});

	['dragleave', 'drop'].forEach(evtName => {
		droparea.addEventListener(evtName, inactive);
	});

	droparea.addEventListener("drop", handleDropTwo)
}


document.addEventListener("DOMContentLoaded", downloadFileOne)
document.addEventListener("DOMContentLoaded", downloadFileTwo)
document.addEventListener("DOMContentLoaded", initAppOne)
document.addEventListener("DOMContentLoaded", initAppTwo)

const handleDropOne = (e) => {
	const inputOne = document.getElementById('download-one');
	const labelOne = inputOne.nextElementSibling;
	const dt = e.dataTransfer;
	const files = dt.files;
	fileName = files[0].name;
	if (fileName) {
		labelOne.innerHTML = fileName;
	} else {
		labelOne.innerHTML = labelVal;
	}
}

const handleDropTwo = (e) => {
	const inputTwo = document.getElementById('download-two');
	const labelTwo = inputTwo.nextElementSibling;
	const dt = e.dataTransfer;
	const files = dt.files;
	fileName = files[0].name;
	if (fileName) {
		labelTwo.innerHTML = fileName;
	} else {
		labelTwo.innerHTML = labelVal;
	}
}
