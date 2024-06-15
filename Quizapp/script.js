const apiUrl = "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
async function quiz(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);


    document.querySelector(".ques").innerHTML = "Q " + data.results[0].question;
    console.log(data.results[0].question);
    let options = document.querySelector(".options").innerHTML = data.results[0].incorrect_answers.concat(data.results[0].correct_answer);
    options = shuffleArray(options);

    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = "";

    options.forEach(option =>{
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.classList.add("option");
        optionElement.style.width = "15vw";
        optionElement.style.height = "3vh";
        optionElement.style.outline = "black";
        optionElement.style.border = "solid black 2px";
        optionElement.style.marginBottom = "2vh";
        optionElement.addEventListener("click",function(){
            if(option == data.results[0].correct_answer){
                optionElement.style.width = "15vw";
                optionElement.style.height = "3vh";
                optionElement.style.outline = "black";
                optionElement.style.border = "solid black 2px";
                optionElement.style.backgroundColor = "#9AEABD";
                optionElement.style.marginBottom = "2vh";
            }
            else{
                optionElement.style.width = "15vw";
                optionElement.style.height = "3vh";
                optionElement.style.outline = "black";
                optionElement.style.border = "solid black 2px";
                optionElement.style.backgroundColor = "#FF9394";
                optionElement.style.marginBottom = "2vh";
            }
        });
        optionsContainer.appendChild(optionElement);
    });

    function shuffleArray(options){
        for(var i = (options.length)-1;i>0;i--){
            var j = Math.floor(Math.random()*(i+1));
            var temp = options[i];
            options[i] = options[j];
            options[j] = temp;
        }
        return options;
    }
    console.log(shuffleArray(options));


    const found = options.find((options) => options === data.results[0].correct_answer);
    const correctAns = document.createElement("div");
    correctAns.classList.add("cAns");
    correctAns.textContent = "Correct answer is:" + data.results[0].correct_answer;
    optionsContainer.appendChild(correctAns); 
}
const btn = document.querySelector(".btn1");
btn.addEventListener("click",function(){
    quiz();
});
quiz();

