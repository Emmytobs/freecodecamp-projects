/*
function multipleLetterCount(str) {
    let accObject = {

    }
    
    for(let letter of str) {
        if(accObject[letter] == undefined) {
            accObject[letter] = 1
        } else {
            accObject[letter] = accObject[letter] + 1;
        }
    }
    console.log(accObject);
}

multipleLetterCount("person")
*/

/*
function arrayManipulation(arr, command, location, value = null) {
    if(command == "add") {
        if(!value) {
            return console.log("Please put a value to add as the last argument!")
        }
        if(location == "end"){
            arr.push(value);
        } else {
            arr.unshift(value)
        }
    }

    else {
        if(location == "end") {
            arr.pop()
        }
        else {
            arr.shift()
        }
    }
    console.log(arr)
}

arrayManipulation([1,2,3], "add", "end", 4)
*/

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
rockPaperScissors();