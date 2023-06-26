function endGame(){
    const message= document.createElement("div")
    const resetBtn= document.createElement("button")
    const playAgainBtn= document.createElement("button")

    message.classList.add("endGameMessage");
    resetBtn.classList.add("button-3");
    playAgainBtn.classList.add("button-3");

    message.style.display="flex";

    resetBtn.addEventListener("click", ()=>{
        location.reload;
    })
    playAgainBtn.addEventListener("click", ()=>{
        debugger
        const cardsArray = Array.from(board.querySelectorAll("div.hidden"));
        cardsArray.forEach(card => {
            card.parentNode.removeChild(card);
        });
        clearInterval(timerInterval);
        startTimer();
        createBoard();
        tablePlayer1Corr.textContent="0";
        tablePlayer2Corr.textContent="0";
        player1Corr=0;
        player2Corr=0;
        message.style.display="none";
        
    })

    resetBtn.textContent=`Reset The Game`;
    playAgainBtn.textContent=`Play Again`;

    message.innerHTML= `${winner} Won!`;

    document.body.appendChild(message);
    message.appendChild(resetBtn);
    message.appendChild(playAgainBtn);
}