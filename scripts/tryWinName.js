let playerFlag=true;
player1Corr=0;
player2Corr=0;
let player1Win=0;
let player2Win=0;
let winner="";
function printTries(){
    tablePlayer1Corr.innerHTML=player1Corr;
    tablePlayer2Corr.innerHTML=player2Corr;
}
function whoWon(){
    if(player1Corr > player2Corr){
        player1Win++
        tablePlayer1Win.innerHTML= player1Win;
        winner= player1Elem.textContent;
    }else{
        player2Win++
        tablePlayer2Win.innerHTML= player2Win;
        winner= player2Elem.textContent;
    }
}