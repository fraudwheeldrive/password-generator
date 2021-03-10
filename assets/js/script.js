// Assignment code here


document.querySelector("#generate").addEventListener("click", promptMe);

// password length function 
function promptMe () {
  var userPasswordLength = prompt ("welcome to the passowrd generator, please select password length between 8 and 138 to continue");
  if (userPasswordLength < 8) {
    alert ("please select a number greater than 8");
  }  
  if(userPasswordLength > 138) {
    alert ("please select a number less than 138")
  }
  if (userPasswordLength === isNaN()) {
    alert("please select only a number")
  }
  if (isNaN(userPasswordLength)){
  alert("Please enter a number between 8 and 138")
  }
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
