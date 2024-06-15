function clock(){

    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let interval = null;
    let isRunning = false;


    const hr = document.getElementById("hrs");
    const min = document.getElementById("mins");
    const sec = document.getElementById("sec");


    function updateDisplay(){
        hr.textContent = String(hours).padStart(2,"0") + ":";
        min.textContent = String(minutes).padStart(2,"0") + ":";
        sec.textContent = String(seconds).padStart(2,"0");

    }

    function time(){
        seconds++;
        if(seconds>=60){
            seconds=0;
            minutes++;
        }
        if(minutes>=60){
            
            minutes = 0;
            hours++;
        }
        if(hours>24){
            hours=0;
            
        }
        updateDisplay();
    }
        
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(time, 1000);
    }
    updateDisplay();
    
    
}
clock();