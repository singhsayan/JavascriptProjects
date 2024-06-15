function password() {
    const show_password = document.querySelector(".show");
    const password_type = document.querySelector(".type");

    show_password.addEventListener("click", function() {
        if (password_type.type === "password") {
            password_type.type = "text";
        } 
        else {
            password_type.type = "password";
        }
    });
}

password();
