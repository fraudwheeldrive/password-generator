// variables 

var number = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+";
var upperCaseArray = upperCase.split("");
var lowerCaseArray = lowerCase.split("");
var numberArray = number.split("");
var specialCharArray = specialChar.split(""); 

//generate password function, SelectChar uses array inputs from else statment in function, 
// pwdfinal is blank string for the password that is generated

function genPwd (){
  var selectChar = [];
  var pwdFinal = "";

//set password length 

var pwdLength = prompt(" Welcome to the Secure Password Generator, Please select a password length between 8 and 128 characters");

//while loop to continuously prompt user to enter length between 8-128

while(pwdLength < 8 || pwdLength > 138 || isNaN(pwdLength)){
  pwdLength = prompt("Please enter a number between 8 and 128")
}

// if statement begins, checks and validates input of pwdLength is correct then moves to else /if statemtns 

if (pwdLength < 8 || pwdLength > 138 || isNaN(pwdLength)) {
 
}

// create in put for arrays for uppercase, lowercase, special characters and numbers 
// uses Array.prototype.push.apply to add user input into arrays like objects defined at the top of the 
// the page, the apply() fuction combines the arrays into one another to create selectChar

//add alert to let user know they must choose at leaste on of the following criteria. 



else{

  alert("please pick at lease one of the following criteria for your secure password, failure to do so will result in the termination of the  password generator"); 

if(confirm("Please click Ok to include special characters in your password")){
    Array.prototype.push.apply(selectChar, specialCharArray);
}

 if(confirm("Please click Ok to include lowercase letters in your password")){
   Array.prototype.push.apply(selectChar, lowerCaseArray);
}

 if(confirm("Please click OK to include Uppercase letters in your password")){
  Array.prototype.push.apply(selectChar, upperCaseArray);

}

if(confirm("Please click OK to include numbers in your password")){
 Array.prototype.push.apply(selectChar, numberArray); 
}

// validates the above if statements, if user choose "cancel" for all criteria then
// length === 0 and will promp the user to start again 

if(selectChar.length===0){
  alert("You did not select any password critera. Please note in order to generate your password you must select at least one of the options above. Please start over, thank you. ")
}

// for loop to validate and generate password , math.floor to round down to whole numbers

else{
  
  for(var i=0; i< pwdLength; i++) {
    var random = Math.floor(Math.random() * selectChar.length);
    pwdFinal += selectChar[random];
  }
}
}

// print generated password to text box on site 

document.getElementById("password").innerHTML = pwdFinal;

};

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", genPwd);