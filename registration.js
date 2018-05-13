
// calls all validation functions
// if validation is successful, form is submitted and alert box pops up indicating success status
function formValidation() {
	var isValid = validateUsername() && validatePassword() && validatePasswordRepeat() && validateStreetName() &&
	validateCity() && validatePostalCode() && validatePhoneNumber();
	if(isValid) {
		alert("Submission successful!");
	}
	return isValid;
}

// validates username
function validateUsername() {

	// gets id for username 
	var username = document.getElementById("username").value.trim();

	// checks if username is less than 6 characters
	if (username.length < 6) {
		showErrors("USERNAME: Please enter at least 6 characters.");
		return false;
	}

	if (username.length >= 1) {

		// checks if first characer is a letter
		if (!isLetter(username[0])) {
			showErrors("USER NAME: First character must be a letter.");
			return false;
		}
	}

	// clears error messages by setting it to empty string
	showErrors("");
	return true;
}

function validatePassword() {

	// gets id for password
	var password = document.getElementById("password").value.trim();

	// checks if password field is empty
	if (password.length == 0) {
		showErrors("PASSWORD: The password field can not be left empty or just blank characters.");
		return false;
	}

	// checks if password is at least 8 characters
	if (password.length < 8) {
		showErrors("PASSWORD: Please enter at least 8 characters.");
		return false;
	}

	var i;

	var hasDigit = false;
	var hasLowerCase = false;
	var hasUpperCase = false;

	// checks if password has a digit in it
	for (i = 0; i < password.length; i++) {
		if (password[i] >= '0' && password[i] <= '9') {
			hasDigit = true;
			break;
		}
	}

	// if no digit, error message is displayed
	if (!hasDigit) {
		showErrors("PASSWORD: Please enter at least one digit.");
		return false;
	}

	// checks if password has at least one lower case
	for (i = 0; i < password.length; i++) {
		if (password[i] >= 'a' && password[i] <= 'z') {
			hasLowerCase = true;
			break;
		}
	}

	// if no lower case, shows error message
	if (!hasLowerCase) {
		showErrors("PASSWORD: Please enter at least one lower case.");
		return false;
	}

	// checks if password has at least one upper case
	for (i = 0; i < password.length; i++) {
		if (password[i] >= 'A' && password[i] <= 'Z') {
			hasUpperCase = true;
			break;
		}
	}

	// if no upper case, shows error message
	if (!hasUpperCase) {
		showErrors("PASSWORD: Please enter at least one uppercase.");
		return false;
	}

	// clears error messages by setting it to empty string
	showErrors("");

	// checks if password that is re-entered is not an empty string
	if (document.getElementById("passwordRepeat").value != "") {
		return validatePasswordRepeat();
	}
	return true;
}

function validatePasswordRepeat() {

	// gets id for password
	var password = document.getElementById("password").value.trim();

	// gets id for password that was re-entered
	var passwordRepeat = document.getElementById("passwordRepeat").value.trim();

	// checks if original password and repeated password are equal
	if (passwordRepeat != password) {
		showErrors("PASSWORD: Passwords do not match. Please re-enter your password.");
		return false;
	}

	// clears error messages by setting it to empty string
	showErrors("");
	return true;
}

function validateStreetName() {

	// gets id for street name
	var streetName = document.getElementById("streetName").value.trim();

	var i;

	// checks if street name has a digit
	for (i = 0; i < streetName.length; i++) {
		if (streetName[i] >= '0' && streetName[i] <= '9') {
			showErrors("STREET NAME: Street name can not contain numbers. Please re-enter.");
			return false;
		}
	}

	// clears error messages by setting it to empty string
	showErrors("");
	return true;
}

function validateCity() {

	// gets id for city
	var city = document.getElementById("city").value.trim();

	var i;

	// checks if the city has only letters
	for (i = 0; i < city.length; i++) {
		if (!isLetter(city[i])) {
			showErrors("CITY: City must contain only letters. Please re-enter.");
			return false;
		}
	}

	// clears error messages by setting it to empty string
	showErrors("");
	return true;
}

function validatePostalCode() {

	// gets id for postal code
	var postalCode = document.getElementById("postalCode").value.trim();

	// checks if postal code is in letter, digit, letter, digit, letter, digit format
	if (!isLetter(postalCode[0]) || !isDigit(postalCode[1]) || !isLetter(postalCode[2]) ||
	!isDigit(postalCode[3]) || !isLetter(postalCode[4]) || !isDigit(postalCode[5])) {
		showErrors("POSTAL CODE: Postal code should be in the following format: letter, digit, letter, digit, letter, digit.");

		return false;

	}

	// clears error messages by setting it to empty string
	showErrors("");
	return true;
}

function validatePhoneNumber() {

	// gets id for phone
	var phone = document.getElementById("phone").value.trim();

	// checks if phone length is 0 (ie, left blank)
	if (phone.length == 0) {
		showErrors("PHONE: Phone number can not be left empty or just blank characters.");
		return false;
	}

	// checks if phone number entered is equal to 12 characters including dash
	if (phone.length != 12) {
		showErrors("PHONE: The phone number was in the wrong format. Please enter only digits and in the following format: ###-###-####.");
		return false;
	}

	// checks if phone is in the ###-###-#### format
	if (!(isDigit(phone[0]) && isDigit(phone[1]) && isDigit(phone[2])
	&& isDash(phone[3])
	&& isDigit(phone[4]) && isDigit(phone[5]) && isDigit(phone[6])
	&& isDash(phone[7])
	&& isDigit(phone[8]) && isDigit(phone[9]) && isDigit(phone[10]) && isDigit(phone[11]))) {
		showErrors("PHONE: The phone number was in the wrong format. Please enter only digits and in the following format: ###-###-####.");
		return false;
	}

	// clears error messages by setting it to empty string
	showErrors("");
	return true;
}

// checks if character is a digit
function isDigit(ch) {
	return ch >= '0' && ch <= '9';
}

// checks if character is a dash
function isDash(ch) {
	return ch == '-';
}

// checks if character is a letter
function isLetter(ch) {
	return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

// shows error messages
function showErrors(messages) {

	// gets id for errors
	document.getElementById('errors').innerHTML = messages;

}

// clears the values in the form
function clearForm() {

	// gets id for errors
	document.getElementById('errors').innerHTML = "";

	// gets id for form
	document.getElementById('form').reset();

}

// displays large image
function imageView(bigImage) {
	// gets id for popupImage and sets src to bigImage
	document.querySelector('#popupImage').setAttribute('src', bigImage);

	// gets id for popup and displays it as block
	document.querySelector('#popup').style.display = 'block';

	// gets id for popupbg and sets the visibility as visible
	document.querySelector('#popupbg').style.visibility = 'visible';
}

// closes image
function imageClose() {

	// gets id for popup and turns off display
	document.querySelector('#popup').style.display = 'none';

	// gets id for popupbg and sets the visibility as invisible
	document.querySelector('#popupbg').style.visibility = 'hidden';
}
