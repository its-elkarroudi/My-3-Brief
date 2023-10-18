
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const topic = document.getElementById('topic');
const country = document.getElementById('country');
const message = document.getElementById('message');
const agreement = document.getElementById('agreement');

const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');


form.addEventListener('submit', (e) => {

    let messageView = [];

    if (firstName.value == '' || firstName.value == null) {
        messageView.push("++ first name is required");
    } 
    else if (firstName.value < 2 || firstName.value > 20) {
        messageView.push("++ Please enter a valid name");
    }
    else if (lastName.value == '' || lastName.value == null) {
        messageView.push("++ last name is required");
    }
    else if (email.value == '' || email.value == null) {
        messageView.push("++ email name is required");
    }
    else if (phone.value == '' || phone.value == null) {
        messageView.push("++ phone number is required");
    }
    else if (topic.value == '' || topic.value == null) {
        messageView.push("++ topic name is required");
    }
    else if (country.value == 0) {
        messageView.push("++ Please select your country");
    }
    else if (message.value == '' || message.value == null) {
        messageView.push("++ first name is required");
    }
    else if (agreement != true) {
        messageView.push("++ You agreement is necessary");
    }


    if (messageView.length > 0) {
        e.preventDefault();
        errorMessage.innerText = messageView.join();
    }

})