function timer() {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let interval = null;
    let isRunning = false;

    const day = document.getElementById("day");
    const hr = document.getElementById("hr");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    function updateDisplay() {
        day.textContent = String(days).padStart(2, "0");
        hr.textContent = String(hours).padStart(2, "0");
        min.textContent = String(minutes).padStart(2, "0");
        sec.textContent = String(seconds).padStart(2, "0");
    }

    function time() {
        const now = new Date();
        const eventDate = new Date(2024, 7, 21); 
        const timeDiff = eventDate - now;

        if (timeDiff <= 0) {
            clearInterval(interval);
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
            updateDisplay();
            return;
        }

        days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        updateDisplay();
    }

    if (!isRunning) {
        interval = setInterval(time, 1000);
        isRunning = true;
    }
}

timer();
