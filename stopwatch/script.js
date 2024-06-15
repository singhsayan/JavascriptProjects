function stopwatch() {
    const btn1 = document.querySelector(".set1");
    const btn2 = document.querySelector(".start1");
    const btn3 = document.querySelector(".reset1");

    const hrDisplay = document.getElementById("hrs");
    const minDisplay = document.getElementById("mins");
    const secDisplay = document.getElementById("sec");

    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let interval = null;
    let isRunning = false;

    function updateDisplay() {
        hrDisplay.textContent = String(hours).padStart(2, '0') + " :";
        minDisplay.textContent = String(minutes).padStart(2, '0') + " :";
        secDisplay.textContent = String(seconds).padStart(2, '0');
    }

    btn1.addEventListener("click", function() {
        // Optional: Define set button functionality if needed
    });

    btn2.addEventListener("click", function() {
        if (!isRunning) {
            isRunning = true;
            interval = setInterval(function() {
                seconds++;
                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;
                }
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
                updateDisplay();
            }, 1000);  // Update the time every 1000 milliseconds (1 second)
        } 
        else {
            clearInterval(interval);
            isRunning = false;
        }
    });

    btn3.addEventListener("click", function() {
        clearInterval(interval);
        isRunning = false;
        hours = 0;
        minutes = 0;
        seconds = 0;
        updateDisplay();
    });

    updateDisplay();
}

stopwatch();
