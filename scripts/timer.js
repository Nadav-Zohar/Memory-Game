function startTimer(){
    let timer= 0;
    timerInterval= setInterval(() =>{
        timer++;
        
        const date= new Date(timer * 1000);
        const m= date.getMinutes();
        const s= date.getSeconds();
        timerElem.innerHTML= `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }, 1000);
}
