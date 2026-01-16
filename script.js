const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

const emailError = document.getElementById("emailError");

const emailRegularExpression = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

const isValidEmail = () => {
    const validity = email.value.length !== 0 && emailRegularExpression.test(email.value);
    console.log("validity:", validity);
    return validity;
};

// const setEmailClass = (isValid) => {
//     if (isValid) {
//         email.className = "valid";
//     } else {
//         email.className = "invalid";
//     }
// }

const updateError = (isValid) => {
    if (isValid) {
        emailError.textContent = "";
        emailError.removeAttribute("class");
    } else {
        emailError.textContent = "invalid email";
        emailError.setAttribute("class", "active");
    }
}

const handleEmailInput = () => {
    const validity = isValidEmail();
    // setEmailClass(validity);
    updateError(validity);
}

const handleEmailSubmit = (event) => {
    const validity = isValidEmail();
    if (validity === false) {
        event.preventDefault();
        // setEmailClass(validity);
        updateError(validity);
    };
};

const validity = isValidEmail();
// setEmailClass(validity);

email.addEventListener("blur", handleEmailInput);
form.addEventListener("submit", handleEmailSubmit);

console.log("test");