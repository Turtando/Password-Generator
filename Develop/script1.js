// Variables
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = '0123456789';
var sym = '!?@#$%^&*)(_-][}{:/.~';
var minlength = 8;
var minlength = 128;


function userInput() {
    var length = Number(prompt("Enter a password length(Between 8 & 128 characters)"));
    while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8 & 128 characters"))
    confirm("Would you like lowercase letters?");
    confirm("Would you like uppercase letters?")
    confirm("Would you like numbers?")
    confirm("Would you like special characters?")
}

while (!lowerCase && !upperCase && !num && !sym) {
    alert("You must select at least one character type!")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
