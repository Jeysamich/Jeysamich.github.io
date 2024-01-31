document.addEventListener("DOMContentLoaded", () => {
    var form = document.getElementById("validationForm");
    form.addEventListener("submit", event => {
        var email = document.getElementById("email1");
        var password = document.getElementById("password1");
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var isValidEmail = filter.test(email.value)
        var isValidPassword = password.value.length >= 8
        if (!isValidEmail) {
            console.log("email not valid");
            email.classList.add("is-invalid");
        } else {
            email.classList.remove("is-invalid");
        }
        if (!isValidPassword) {
            console.log("Password not valid");
            password.classList.add("is-invalid");
        } else {
            password.classList.remove("is-invalid");
        }
        if (!(isValidEmail && isValidPassword)) {
            event.preventDefault()
        }
    })
});
