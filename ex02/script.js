const title = document.getElementById("title");
const message = document.querySelector(".message");
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    title.textContent = "Welcome to JavaScript!";
    message.textContent = "The text has changed!";

    title.style.color = "blue";
    button.classList.add("active");
});
