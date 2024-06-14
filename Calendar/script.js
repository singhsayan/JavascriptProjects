function calendar(){

    const dateEle = document.querySelector(".date");
    const dayEle= document.querySelector(".day");
    const monthEle= document.querySelector(".month");
    const yearEle = document.querySelector(".year");

    
    const currentDate = new Date();
            
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = currentDate.getDate();
    const dayOfWeek = currentDate.getDay();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    dateEle.textContent = day;
    dayEle.textContent = daysOfWeek[dayOfWeek];
    monthEle.textContent = monthsOfYear[month];
    yearEle.textContent = year;
}




calendar();
setInterval(calendar, 24 * 60 * 60 * 1000);