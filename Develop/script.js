// Psuedocode
// -Alert user that they need to create a secure password
// -Prompt the user on the length of the password they would like to create
// between 8 and 128 characters.
// -Have user prompted to choose between lower case, upper case, number of special characeters
// -have a loop that grabs a variable from each array of lower case, upper, numbers, SC and pushes 
// to array which will be the generated password
// -if user fails to select from the prompt of 4 types of characters they will be alerted with an error

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generator functions
// **generate random lower case**
function userInput() {
  var length = Number(prompt("Enter a password length(Between 8 & 128 characters)"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8 & 128 characters"));
}
var lowerCase = confirm("Would you like lowercase letters?");
var upperCase = confirm("Would you like uppercase letters?");
var num = confirm("Would you like numbers?");
var sym = confirm("Would you like special characters?");

while ((!lowerCase && !upperCase && !num && !sym)) {
  alert("You must select at least one character type!")
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// **generate random upper**
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// **generate random number**
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// **generate random symbols**
function getRandomSymbol() {
  const symbols = ['~!@#$%^&*"()-_[]{},./'];
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Push the characters into one array





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  // // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


  console.log(password);


}

