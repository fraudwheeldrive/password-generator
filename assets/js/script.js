// variables 

var number = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+";
var upperCaseArray = upperCase.split("");
var lowerCaseArray = lowerCase.split("");
var numberArray = number.split("");
var specialCharArray = specialChar.split(""); 

// User prompt to begin password generation process 

 alert("Welcome to the Password Generator, to get started please select 'generate password'"); 

 document.querySelector("#generate").addEventListener("click", genPwd);

//generate password function 

function genPwd (){
  var selectChar = [];
  var pwdFinal = "";

//set password length 

var pwdLength = prompt("Please select a password length between 8 and 128 characters");

//set password length , need to refactor to make recursive untill right answer is selected 

if (pwdLength < 8 || pwdLength > 138 || isNaN(pwdLength)) {
  prompt("Please enter a number between 8 and 138")
if (pwdLength < 8 || pwdLength > 138 || isNaN(pwdLength)) 
  prompt("Please enter a number between 8 and 138")
if (pwdLength < 8 || pwdLength > 138 || isNaN(pwdLength)) 
alert("You have made too many incorrect selections, please start again")  
}

// select other variables and push into array that final password will be generated from. 

else{ 

  if(confirm("Please click Ok to include special characters in your password")){
    Array.prototype.push.apply(selectChar, specialCharArray);
}

 if(confirm(" Please click Ok to include lowercase letters in your password")){
   Array.prototype.push.apply(selectChar, lowerCaseArray);
}

 if(confirm(" Please click OK to include Uppercase letters in your password")){
  Array.prototype.push.apply(selectChar, upperCaseArray);

}

if(confirm("Please click OK to include numbers in your password")){
 Array.prototype.pish.apply(selectChar, numberArray); 
}

if(confirm("Please click OK to include special characters in your password ")){
  Array.prototype.push.apply(selectChar, specialCharArray);
}

if(selectChar.length===0){
  alert("you did not select any password critera. Please note in order to generate your password you must select at least one of the options above. Please start over, thank you. ")
}

}
// for loop 




};



// for loop to confirm info and create password 

// display the result 





















// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//document.querySelector("#generate").addEventListener("click", pwdGenerate);