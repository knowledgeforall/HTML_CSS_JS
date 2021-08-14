<!--form.js-->
//works with "onload" in the HTML tag to execute js
function myFunc(){
//creates a block scope var "firstname" and sets it to the HTML input value of id "firstname"
let firstName = document.querySelector("#firstname");
//creates a block scope var "lastname" and sets it to the HTML input value of id "lastname"
let lastName = document.querySelector("#lastname");
//creates a block scope var "age" and sets it to the HTML input value of id "age"
let age = document.querySelector("#age");
//creates a block scope var "displayFirstName" and sets it to the HTML value of id "displayFirstName"
let displayFirstName = document.querySelector("#displayfirstname");
//creates a block scope var "displayLastName" and sets it to the HTML value of id "displayLastName"
let displayLastName = document.querySelector("#displaylastname");
//creates a block scope var "displayAge" and sets it to the HTML value of id "displayAge"
let displayAge = document.querySelector("#displayage");
//declares block scope variables and sets values to "0"
let firstNameLength = 0;
let lastNameLength = 0;
let ageLength = 0;

//add event listener for "firstname"
firstName.addEventListener("change", function () {
    //set "firstname" length to value of the length of input
    firstNameLength = this.value.length;

    // check the length of first name
    if(firstNameLength > 2) {
        displayFirstName.textContent = "That's my favorite first name!";
    } else  if (firstNameLength <= 2) {
        displayFirstName.textContent = "That's not a real first name!";
    }
});
//add event listener for "lastname"
lastName.addEventListener("change", function () {
    //set "lastname" length to value of the length of input
    lastNameLength = this.value.length;
    //set conditionals for feedback and display them
    if(lastNameLength > 2) {
        displayLastName.textContent = "And such an interesting last name!";
    } else  if (lastNameLength <= 2) {
        displayLastName.textContent = "That's not a real last name!";
    }
});
//add event listener for "age"
age.addEventListener("change", function () {
    //set "firstname" length to value of the length of input
    ageLength = this.value;
    //set conditional for feedback and display it
    if(ageLength => 1) {
        displayAge.textContent = "Wow! You are really young!";
    }
});

}