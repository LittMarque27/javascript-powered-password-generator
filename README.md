# **JavaScript Password Generator**

The objective of this project is to create a secure password generator using JavaScript. The password can be between 8 and 128 characters in length and allows for the usage of uppercase letters, lowercase letters, numbers, and special characters.

## Getting Started

After opening the page the user can begin generating their password by clicking on the red "Generate Password" button. Here is a screenshot of the full site for reference:

![Full Site Screenshot](./Assets/images/full-generator.png)

##Choosing the Length of Your Password

The first prompt will ask you how many characters in length you'd like your password to be. Lengths between 8 and 128 characters are valid:

![Choosing password length](./Assets/images/length-pw.png)

**NOTE:** If a value lesser than 8 characters or greater than 128 is chosen, the user will view an alert that advises them to select an appropriate length. They will need to restart the process by selecting the "Generate Password" button:

![Please choose an appropriate length](./Assets/images/length-error.png)

**NOTE:** If the user enters characters that are not numbers, then an alert will suggest that they enter the appropriate characters. They will need to restart the process by selecting the "Generate Password" button:

![Please use numerical characters](./Assets/images/nan-error.png)

## Confirming Character Types

The following 4 prompts will ask the user to confirm which types of characters that they would like included in their password.

The first will ask them if they would like to include uppercase letters:

![Confirm uppercase letters](./Assets/images/upper-confirm.png)

Followed by lowercase letters:

![Confirm lowercase letters](./Assets/images/lower-confirm.png)

Then numbers:

![Confirm numbers](./Assets/images/number-confirm.png)

And lastly, special characters:

![Confirm special characters](./Assets/images/special-confirm.png)

**NOTE:** If none of the preceding categories are chosen, the user will see an alert that tells them to choose at least one character type. They will need to restart the process by selecting the "Generate Password" button.

![Please select a category](./Assets/images/type-error.png)

## Password Generated

After navigating these steps, you password will be generated and displayed in a window alert:

![Your new password](./Assets/images/finished-password.png)

### Try it Yourself

[You can generate your own password by clicking this link!](https://littmarque27.github.io/javascript-powered-password-generator/)
 