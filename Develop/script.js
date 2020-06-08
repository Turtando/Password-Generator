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


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  // // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


  console.log(password);


}

