function check(){
    const cards= board.querySelectorAll(".showing");
    
    if(cards.length == 2){
        const first= cards[0];
        const last= cards[1];
        if(first.textContent == last.textContent){
            setTimeout(()=>{
                first.classList.remove("showing");
                last.classList.remove("showing");
                first.classList.add("hidden");
                last.classList.add("hidden");
                checkComplete();
                if(playerFlag == true){
                    player1Corr++;
                    printTries();
                }
                if(playerFlag == false){
                    player2Corr++;
                    printTries();
                }
            }, 500);
        }else{
            setTimeout(()=>{
                first.classList.remove("showing");
                last.classList.remove("showing");
                if(playerFlag){
                    playerFlag= false;
                }else{
                    playerFlag= true;
                }
                if(playerFlag){
                    player2Elem.classList.remove("playing");
                    player1Elem.classList.add("playing");
                }else{
                    player1Elem.classList.remove("playing");
                    player2Elem.classList.add("playing");
                }
                printTries();
            }, 1500);
        }
    }
}