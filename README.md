# Password Generator Starter Code

## User story 
* AS AN employee with access to sensitive data
* I WANT to randomly generate a password that meets certain criteria
* SO THAT I can create a strong password that provides greater security

## User Criteria 
* GIVEN I need a new, secure password
* WHEN I click the button to generate a password
* THEN I am presented with a series of prompts for password criteria
* WHEN prompted for password criteria
* THEN I select which criteria to include in the password
* WHEN prompted for the length of the password
* THEN I choose a length of at least 8 characters and no more than 128 characters
* WHEN prompted for character types to include in the password
* THEN I choose lowercase, uppercase, numeric, and/or special characters
* WHEN I answer each prompt
* THEN my input should be validated and at least one character type should be selected
* WHEN all prompts are answered
* THEN a password is generated that matches the selected criteria
* WHEN the password is generated
* THEN the password is either displayed in an alert or written to the page

## How to use 
Password generation is initiated when user clicks the "Generate Password" button. These instructions 
are present in the placeholder text in the textbox where the generated password will appear. This was 
a concious design decision as to avoid the use of too many prompts. 

User is prompted to choose a password between 8-128 characters, if this prompt revcives a value that is out side
of the specified critera, the prompt will issue and error and restart untill the proper value is selected 

One password length is set, the user is prompted to choose from at least one of the following criteria. 
* Inclusion of special characters 
* Inclusion of lowercase letters 
* Inclusion of uppercase letters 
* inclusion of numbers 

As long as one criteria is selected a random password will be generated at the specified length. If no criteria is selected, 
user is prompted to start again. 

## Rough outline of logic
![Wireframe diagram showing logic of password generation](https://github.com/fraudwheeldrive/password-generator/blob/main/assets/images/wireframe%20js%20logic%20rough.png)

## Image of Webiste 
![webiste image](https://github.com/fraudwheeldrive/password-generator/blob/main/assets/images/Password%20generator%20image.PNG)

