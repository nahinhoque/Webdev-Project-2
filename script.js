let userScore = 0;
let comScore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencomOption = () => {
    const options = ["Scissors", "Paper","Rock"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play again..!";
    msg.style.backgroundColor = "rgb(20, 32, 20)";
};

const showWinner = (userWin, userOption, comOption) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userOption} beats ${comOption}`;
        msg.style.backgroundColor = "green";
    }else{
        comScore++;
        compScorePara.innerText = comScore;
        // console.log("You Lose..");
        msg.innerText = `You Lost.. ${comOption} beats your ${userOption}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userOption) => { 
    // console.log("User Choice = ", userOption);
    const comOption = gencomOption();
    // console.log("Computer Choice = ", comOption);


    if(userOption === comOption) {
        drawGame();
    } else {
        let userWin = true;
        if(userOption === "Rock") {
            userWin = comOption == "Paper" ? false : true;
        } else if(userOption === "Paper") {
            userWin = comOption === "Scissors" ? false : true; 
        } else {
            userWin = comOption === "Rock" ? false : true;
         }
         showWinner(userWin, userOption, comOption);
    }

}

options.forEach((option) => {
    // console.log(option);
    option.addEventListener("click", () => {
        const userOption = option.getAttribute("id");
        // console.log("Option was clicked", userOption);
        playGame(userOption);

    });
});


