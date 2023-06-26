submitBtn.addEventListener("click", () => {
    if (player1Name.value && player2Name.value && select.value) {
        player1Elem.textContent = player1Name.value;
        player2Elem.textContent = player2Name.value;
        popupWrapper.style.display = "none";
        startTimer();
        createBoard();
    }
});
function handleSubmit(event) {
    event.preventDefault();
}
