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
    
    sessionStorage.setItem("player-name", loginInput.value);
    window.location = "pages/game.html"

    event.target.reset();
}

loginInput.addEventListener("input", validateInput);
loginForm.addEventListener("submit", handleSubmit);