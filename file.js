alert("\tNameste🙏\nThis is an Online Cricket game with bat, ball and stump\nHere, Bat defeats Ball\nBall defeats Stump\n Stump defeats Bat");

let userChoice;
let ComputerChoice;
let CompScreen = `Computer Choice : none`;
let UserScreen = `User Choice : none`;

function BatChoice() {
    userChoice = 0;
    let compC=compchoice();
    resultScore(userChoice,compC);
    
}

function BallChoice() {
    userChoice = 1;
    compchoice();
    resultScore(userChoice,ComputerChoice);
}

function StumpChoice() {
    userChoice = 2;
    compchoice();
    resultScore(userChoice,ComputerChoice);
}

// User choice Display 
function UserDisplay() {
    if (userChoice === 0) {
        UserScreen = `User Choice : Bat`;
    } else if (userChoice === 1) {
        UserScreen = `User Choice : Ball`;
    } else if (userChoice === 2) {
        UserScreen = `User Choice : Stump`;
    }
    console.log(UserScreen);
    document.querySelector("#UserC").innerHTML=UserScreen;
}


function compchoice() {
    //Generate random value from 0 - 2
    ComputerChoice = Math.floor(Math.random() * 3);
    if (ComputerChoice === 0) {
        CompScreen = `Computer Choice : Bat`;
    } else if (ComputerChoice === 1) {
        CompScreen = `Computer Choice : Ball`;
    } else if (ComputerChoice === 2) {
        CompScreen = `Computer Choice : Stump`;
    }
    
    document.querySelector("#CompC").innerHTML = CompScreen;
    console.log(CompScreen);

    return ComputerChoice;
}

let scoreStr=localStorage.getItem('Score');
    score= JSON.parse(scoreStr) || {
        win: 0, 
        tie: 0,
        lost: 0,
        winboard: `Result : Won :)`,
        tieboard: `Result : Tie -_-`,
        lostboard: `Result : Lost :(`,
    };

function resultScore(uc,cc){

    //Check the result
    if(uc===0 && cc===0){
        score.tie++;
        document.querySelector("#resBoard").innerHTML=score.tieboard;
        document.querySelector("#resBoard").style.color = "blue";
    }else if(uc===0 && cc===1){
        score.win++;
        document.querySelector("#resBoard").innerHTML=score.winboard;
        document.querySelector("#resBoard").style.color = "green";
    }else if(uc===0 && cc===2){
        score.lost++;
        document.querySelector("#resBoard").innerHTML=score.lostboard;
        document.querySelector("#resBoard").style.color = "red";
    }else if(uc===1 && cc===0){
        score.lost++;
        document.querySelector("#resBoard").innerHTML=score.lostboard;
        document.querySelector("#resBoard").style.color = "red";
    }else if(uc===1 && cc===1){
        score.tie++;
        document.querySelector("#resBoard").innerHTML=score.tieboard;
        document.querySelector("#resBoard").style.color = "blue";
    }else if(uc===1 && cc===2){
        score.win++;
        document.querySelector("#resBoard").innerHTML=score.winboard;
        document.querySelector("#resBoard").style.color = "green";
    }else if(uc===2 && cc===0){
        score.win++;
        document.querySelector("#resBoard").innerHTML=score.winboard;
        document.querySelector("#resBoard").style.color = "green";
    }else if(uc===2 && cc===1){
        score.lost++;
        document.querySelector("#resBoard").innerHTML=score.lostboard;
        document.querySelector("#resBoard").style.color = "red";
    }else if(uc===2 && cc===2){
        score.tie++;
        document.querySelector("#resBoard").innerHTML=score.tieboard;
        document.querySelector("#resBoard").style.color = "blue";
    }

    UserDisplay();
    localStorage.setItem('Score',JSON.stringify(score));
    showResult();
    
}

function showResult(){
    document.querySelector("#Score").innerHTML=`Score: Win ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
}

function reset(){
    localStorage.clear();
    score.win=0;
    score.tie=0;
    score.lost=0;
    document.querySelector("#UserC").innerHTML = "User Choice : none";
    document.querySelector("#CompC").innerHTML = "Computer Choice : none";
    document.querySelector("#resBoard").innerHTML = "Result : none";
    document.querySelector("#resBoard").style.color = "black";
    document.querySelector("#Score").innerHTML=`Score: Win ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
}
