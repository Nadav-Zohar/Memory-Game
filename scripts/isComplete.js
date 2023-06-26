function checkComplete(){
    const cards= board.querySelectorAll("div:not(.hidden)");
    if(!cards.length){
        confetti({
            particleCount: 100,
            spread: 70,
            decay: 0.9,
            origin: { y: 0.6 }
        });
        whoWon();
        endGame();
    }
}