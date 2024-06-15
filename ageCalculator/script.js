const box = document.querySelector(".date");
function dob(){
    
    const textValue = document.querySelector(".text");
    const button = document.querySelector(".calculate");
    button.addEventListener("click",function(){
        // const str = year + "," + month + "," + date
        // console.log(str);
        
        const dobValue = box.value
        console.log(dobValue);
        let birthday = new Date(dobValue);
        const year = birthday.getFullYear();
        const currentYear = new Date().getFullYear();
        const years = currentYear - year;


        const currentMonth = new Date().getMonth() + 1;
        const month = birthday.getMonth() +1;

        const currentDate = new Date().getDate();
        const birthDate = birthday.getDate();
        console.log(currentMonth);
        let noOfMonths;
        let noOfDays;
        let leapYear;
        let count;
        let i;
        let difMonth
        if(currentMonth>month){
            difMonth = currentMonth - month;
            noOfMonths = (12 * years) + (difMonth);
            
        }
        else if(month>currentMonth){
            difMonth = month - currentMonth;
            noOfMonths = (12*years) + (12-difMonth);
            
        }
        else{
            noOfMonths = 12*years;
            
        }
        count = 0;
   
        for(i=Number(year);i<=Number(currentYear);i++){
           
            if((i%4===0 && i%100 !==0) || i%400 === 0 ){
                 count++;
            }
        }
        console.log(count);
        // noOfDays = ((years * 365) + count + (difMonth * 30)) + (currentDate - birthDate);
        noOfDays = (noOfMonths*30) + (years*7) - (years*2) + (count);
        const date = birthday.getDate();
        textValue.textContent = `You are ${years} years ,${noOfMonths } months and ${noOfDays} days old`;
        console.log(month);
        console.log(date);
    });

}
document.addEventListener("DOMContentLoaded",function(){
    dob();
});
