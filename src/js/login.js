const loginInput = document.getElementById("login-input");
const loginButton = document.getElementById("login-button");
const loginForm = document.querySelector(".login-form");

const validateInput = ({target}) => {
    if (target.value.trim().length > 2) {
        loginButton.removeAttribute("disabled");
    }
    else {
        loginButton.setAttribute("disabled", "");
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    
    sessionStorage.setItem("user-name", loginInput.value);
    window.location = "src/pages/game.html"
}

loginInput.addEventListener("input", validateInput);
loginForm.addEventListener("submit", handleSubmit);