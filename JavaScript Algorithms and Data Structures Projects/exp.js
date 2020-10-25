
console.log(vowelCount(''));

function rockPaperScissors() {
    const gameSelection = ["rock", "paper", "scissors"];

    let selectionCount = 0;

    const showSelection = () => {
        if(selectionCount == 2) {
            return stopSelection();
        }
        const random = Math.random();
        const randomIndex = random * (gameSelection.length - 1);
        const gameSelectionIndex = Math.round(randomIndex)
        // alert(gameSelection[gameSelectionIndex]);
        console.log(randomIndex + "("+random+")", gameSelection[gameSelectionIndex]);
        selectionCount++
    }

    const handle = setInterval(showSelection, 1 * 1000);

    const stopSelection = () => {
        clearInterval(handle)
    }
}
// rockPaperScissors();