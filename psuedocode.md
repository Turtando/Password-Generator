GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


<!-- Psuedocode
-Alert user that they need to create a secure password
-Prompt the user on the length of the password they would like to create
between 8 and 128 characters.
-Have user prompted to choose between lower case, upper case, number of special characeters
-have a loop that grabs a variable from each array of lower case, upper, numbers, SC and pushes 
to array which will be the generated password
-if user fails to select from the prompt of 4 types of characters they will be alerted with an error
-->