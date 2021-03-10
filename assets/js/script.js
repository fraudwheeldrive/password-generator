// Assignment code here


document.querySelector("#generate").addEventListener("click", promptMe);

// password length function 
function promptMe () {
  var userPasswordLength = prompt ("welcome to the passowrd generator, please select password length between 8 and 138 to continue");

  if (userPasswordLength < 8 || userPasswordLength > 138 || isNaN(userPasswordLength)) {
  alert("Please enter a number between 8 and 138")
  }
  else prompt ("Thank you")

};





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
