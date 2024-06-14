document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector(".text");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonValue = button.textContent;

            if (buttonValue === "AC") {
                text.value = "";
            } else if (buttonValue === "=") {
                try {
                    // Evaluate the expression in the text input
                    text.value = eval(text.value.replace(/X/g, '*').replace(/÷/g, '/'));
                } catch (e) {
                    text.value = "Error";
                }
            } else {
                // Append the button value to the text input
                text.value += buttonValue;
            }
        });
    });
});
