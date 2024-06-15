function password(){
    let  str = " ";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;

    const smallCharacters = "abcdefghijklmnopqrst";
    const smallCharactersLength = smallCharacters.length;

    const numbers = "0123456789";
    const numbersLength = numbers.length;

    const symbols = "!@#$%^&/";
    const symbolsLength = symbols.length;

    const clickUppercase = document.querySelector(".switch1");
    clickUppercase.addEventListener("click",function(){
        let counter = 22;
        while(counter<26){
            str+= characters.charAt(Math.floor(Math.random() * charactersLength));
            counter++;
        }
    });
    const clickSmallercase = document.querySelector(".switch2");
    clickSmallercase.addEventListener("click", function(){
        let counter1 = 22;
        while(counter1<26){
            str+= smallCharacters.charAt(Math.floor(Math.random() * smallCharactersLength));
            counter1++;
        }
    });
    const clickNumbers = document.querySelector(".switch3");
    clickNumbers.addEventListener("click", function(){
        let counter2 = 22;
        while(counter2<26){
            str+= numbers.charAt(Math.floor(Math.random() * numbersLength));
            counter2++;
        }
    });
    const clickSymbol = document.querySelector(".switch4");
    clickSymbol.addEventListener("click", function(){
        let counter3 = 22;
        while(counter3<26){
            str+= symbols.charAt(Math.floor(Math.random ()* symbolsLength));
            counter3++;
        }
    });

    const clickButton = document.querySelector(".btn");
    clickButton.addEventListener("click", function(){
        
        str = "";
        clickUppercase.click();
        clickSmallercase.click();
        clickNumbers.click();
        clickSymbol.click();
        const shufflePassword = shuffleString(str);
        const text = document.querySelector(".search-input");
        text.value = shufflePassword;
        
    });

    

    function shuffleString(str){
        var arr = str.split("");
        for(var i = (arr.length)-1;i>0;i--){
            var j = Math.floor(Math.random() * (i));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
    }
    return arr.join("");
    
};
    


}
password();
