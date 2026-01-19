const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

const emailError = document.getElementById("emailError");
const emailMessage = "invalid email";
const emailRegularExpression = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

const countryError = document.getElementById("countryError");
const countryMessage = "invalid country";
const countryRegularExpression = /\p{L}/gu; //from https://stackoverflow.com/questions/3617797/regex-to-match-only-letters

const postalError = document.getElementById("postalError");
const postalMessage = "invalid postal code"
const postalRegularExpression = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i; //from https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function

const passwordError = document.getElementById("passwordError");
const passwordMessage = "password must be greater than 6 characters";

const confirmPasswordError = document.getElementById("confirmError");
const confirmPasswordMessage = "password does not match";

const isValidEmail = () => {
    const validity = email.value.length !== 0 && emailRegularExpression.test(email.value);
    console.log("validity:", validity);
    return validity;
};

const isValidCountry = () => {
    const validity = country.value.length !== 0 && countryRegularExpression.test(country.value);
    console.log("validity:", validity);
    return validity;
};

const isValidPostal = () => {
    const validity = postal.value.length !== 0 && postalRegularExpression.test(postal.value);
    console.log("validity:", validity);
    return validity;
};

const isValidPassword = () => {
    const validity = password.value.length > 6;
    console.log("validity:", validity);
    return validity;
};

const isValidPasswordConfirm = () => {
    const validity = password.value === confirmPassword.value;
    console.log("validity:", validity);
    return validity;
};



function eventCreator(validationFunction, element, elementError, message) {
    const updateError = (isValid) => {
        if (isValid) {
            elementError.textContent = "";
            elementError.removeAttribute("class");
        } else {
            elementError.textContent = message;
            elementError.setAttribute("class", "active");
        }
    };

    const handleElementInput = () => {
        const validity = validationFunction();
        updateError(validity);
        console.log("check validity input:", validity);
    };

    const handleElementSubmit = (event) => {
        const validity = validationFunction();
        if (validity === false) {
            event.preventDefault();
            updateError(validity);
            console.log("check validity submit:", validity);
        };
    };

    element.addEventListener("blur", handleElementInput);
    form.addEventListener("submit", handleElementSubmit);
}

eventCreator(isValidEmail, email, emailError, emailMessage);
eventCreator(isValidCountry, country, countryError, countryMessage);
eventCreator(isValidPostal, postal, postalError, postalMessage);
eventCreator(isValidPassword, password, passwordError, passwordMessage);
eventCreator(isValidPasswordConfirm, confirmPassword, confirmPasswordError, confirmPasswordMessage);
