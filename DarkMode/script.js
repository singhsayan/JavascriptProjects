function darkmode(){
    const btn1 = document.querySelector(".btn");
    
    let count = 0;
    
    btn1.addEventListener("click",function(){
        count++;
        if(count%2!=0){
            setTimeout(function(){
                document.body.style.backgroundColor = "black";
            },1000);
        }
        else{
            setTimeout(function(){
                document.body.style.backgroundColor = "white";
            },1000);
        }
        
    });
}
darkmode();