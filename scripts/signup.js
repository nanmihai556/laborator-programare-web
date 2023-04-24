const emailInput = document.getElementById("email");
const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

emailInput.addEventListener("input", function() {
    const value = this.value;
    const isValid = emailPattern.test(value);
    const sign = document.getElementById("email-sign");

    if (isValid) {
        sign.textContent = "✔️";
        sign.style.color = "green";
    } else {
        sign.textContent = "❌";
        sign.style.color = "red";
    }
});

const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;

const usernameInput = document.getElementById('username');
const usernameSign = document.getElementById('username-sign');

usernameInput.addEventListener('input', () => {
    const isValid = usernameRegex.test(usernameInput.value);
    if (isValid) {
        usernameSign.textContent = "✔️";
        usernameSign.style.color = "green";
    } else {
        usernameSign.textContent = "❌";
        usernameSign.style.color = "red";
    }
});
