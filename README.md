# JavaScript: Password Generator

My purpose in creating this Password Generator was to write a script that enabled any user who accessed the site to be prompted to create their own secure password.
The password would have to pass certain criterea if the user wished to be successful in generating one. The parameters of the password were constructed from taking either a letter (uppercase or lowercase), a special symbol such as a "$" or a number and between the length of 8 to 128 characters.

The Generate password button used- served my function as a means of collecting user data to push it into a seperate array, which would then be used to generate the user's password.

The first step in my process was that I wanted to alert the user as soon as the opened the page, that "they needed to create a secure password". After this prompt, the user (after pressing the generate password button) would be prompted with a series of 4 questions, gathering information whether they hit confirm or cancel to input whether or not the random string of variables would be used in their password selection. 

If the user does not input a number in the first prompt, answering how long they would like their password to be, they will be prompted again to enter a correct number. The following prompts, like the password length,  contain of 4 prompts about the user's preferred parameters of the password- if the user does not select uppercase, lowercase, number, or symbol- they are looped to the beginning to enter at least one parameter for their password. 

![](password%20generator%20screencapture%203.jpg)


