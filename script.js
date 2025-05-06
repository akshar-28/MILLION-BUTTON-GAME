let counterButton = document.getElementById('counter-button');
let counterText = document.getElementById('counter-text');
let messageText = document.getElementById('message-text');
let count = 0;

counterButton.addEventListener('click', function() {
    count++;
    if (count === 1000000) {
        messageText.textContent = "I know it was hard but you have to start again, whatever your name is.";
        setTimeout(function() {
            messageText.textContent = ''; // Clear message after 3 seconds
        }, 3000);
        count = 0;
    } else {
        counterText.textContent = count;
    }
});
