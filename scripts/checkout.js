let info = [];
const form = document.querySelector('form');
const submit = document.getElementById("submit");

function submitEvent() {
	event.preventDefault();
	info.push(document.getElementById('name').value);
	info.push(document.getElementById('email').value);
	info.push(document.getElementById('street').value);
	info.push(document.getElementById('city').value);
	info.push(document.getElementById('state').value);
	info.push(document.getElementById('zip').value);
	info.push(document.querySelector('input[name="adopter"]:checked').value);
	info.push(document.getElementById('pickup').value);
	console.log(info);
	alert("Thank you. The form information has been received");
}

form.addEventListener("submit", submitEvent);
