let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randidx =  Math.floor(Math.random()*3);
    return options[randidx];
}

const showWinner =(userwin) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText =userScore;
        console.log("you win !");
        msg.innerText ="you win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!");
        msg.innerText ="you lose!";
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor ="Blue";
}
const playGame =(userChoice) =>{
console.log("user choice =", userChoice);
// generate computer choice;
const compChoice =genComputerChoice();
console.log("comp choice =" , compChoice );

if(userChoice === compChoice){
    drawGame ();
}
else
{
    let userwin =true;
    if(userChoice ==="rock"){
      userwin =  compChoice  ==="paper" ? false :true;
    }
    else if(userChoice ==="paper"){
        userwin =compChoice === "scissors"? false :true;
    }
    else
    {
       userwin = compChoice ==="rock"? false:true;
    }
showWinner(userwin);
}
};



choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
console.log("choice was clicked", userChoice);
playGame(userChoice);
    })
})