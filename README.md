# PROJECT JavaScript: Password Generator

This project was a task that formed part of my learning process for full stack development. The task required me to design a password generator solution that requires the user to input certain parameters that meet corporate policies. This solution involves about 90% JavaScript, 5% HTML and 5% CSS.

## Specific User Requirements

Solution must randomly generate a new password with each request.
Clicking the main page button triggers series of interaction with user that validates requirements and enforces password policies.
The criteria requires a minimum of 8 and maximum of 128 character password.
User must select this password length compliance as a base requirement.
There are 4 character types from where the user must select at least one.
Generated password is pasted on the page.

## My Approach

I sketched out a workflow for the different modules on a paper.
This led me to one initiation, 5 prompts (with 5(or one) reference datab sources), one major decision logic with multiple conditions, the need for reusable randomizer function and a few error handling and page control functions.
I also decided to add a few things to make the generator more user friendly and more interactive like pop up form, password copy clipboard, reset function, etc.

## Data Source

I decided to use existing ASCII data source for ALL my characters. reading from this object and writing it to array looks like an an interesting challengeand offers me a real life learning path into array and array manipulation.
I decided to use this opportunity to deepen my understanding of arrays and their manipulation.
I decided to research better ways of achieving certain ideas.
I decided to improve usability with the clipboard copy fuction.
I estabished logging fuctions visibility into what the code is doing.

## Implementation Approach

My implementation approach includes:

Core logic design and breakdown, with each module implemented individually and later linked together.
Implementation of array based solution and using mostly array tools to manipulate data.
I stumbled upon Fitcher-Yates randomizer. Once I have my data in an array, randomizing it is as simple as calling the FY randomizer and feeding my data into it.
Using concat to combine and slice to truncate my arrays.
using alert and posting to HTML to display results.
Console Logging functions are still active but need to be called to validate each step.

## Other additions

I added a form that appears on click and disapears on reset button. This it to ensure better user experience.
I added 2 bottons on the main page - one for password copy to clipboard and the other for password reset.
I added a  form data to the HTML page for the pop up form. There is also an additional CSS styling for the reset button.
These additional are to ease the user experience and does not fundamentally alter the requirements.


## Error Handling

I used simple alert and if/else conditions to keep tight control of the flow.
True condition is executed from the main function which called other functions.
The pop up, close and reset buttons are all calling different functions based on the targeted eventListers.

## Result Presentation

Password is presented in the HTML Read ONLY page as well as on the alert page. 
For ease of use, user can easily copy to cliboard.
Any production level usage of this code may require automatic reset of password after generation just in case the user forgets. I did not have time to work on this but I hope to keep updating it as I learn more.

To view the project, please see here:

https://anyaegbufrancis.github.io/password.generator/

Your feedback will be appreciated.

## Major Challenges Faces

I faced quite some challenges here:
 Array data reading and combination.
 Array data manipulation.
 Reliable randomizer function (until I stumbled on the excellent work of Fitcher Yates).
 JS scoping challenges in real life.
 Functions design and reusability.



## Summary

With this code, I learned a lot about JS array and array data manipulation. I also learnt a few things about scoping of data and how to move my data between scopes. I found the use of reusable functions very useful. I also learn about a few existing methods like the array randomizer.

With this password generator, each generated password is completely random. There are multiple levels of randomization functions that gets called once the call conditions are met. 

I ensured that a user can generate up to 128 characters by selecting one option by ensuring that each option has about 130 characters completely randomized.

I combined the initial randomized characters into an array to be fed into the final concat and randomization engine.

I decided to randomize the password and slice it against the user selected password lenght, this ensures that password can come from anywhere from the chosen criteria that matches any combination of arrays at any point in time.




