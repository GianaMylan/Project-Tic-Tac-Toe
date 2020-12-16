const classNames = {
    cell: 'cell',
    cellValue: 'cell-value',
   // animation: 'animation'
};

const users = {
    playerOne: '(◕‿◕✿)',
    playerTwo: '(≧０≦)',
}

const winType = {
    tie: 'tie'
}

let boardArray = ["","","","","","","","",""];
var player1Turn = true;
let winner;
let turnsRemain = 9;

const winArrays = {
    0: [[1,2], [3,6],[4,8]],
    1: [[0,2],[4,7]],
    2: [[0,1],[5,6], [4,6]],
    3: [[0,6],[4,5]],
    4: [[0,8],[6,2],[1,7],[3,5]],
    5: [[2,8],[3,4]],
    6: [[0,3],[7,8],[4,2]],
    7: [[6,8],[1,4]],
    8: [[6,7],[0,4],[2,5]]
};

const cell = document.querySelectorAll(`.${classNames.cell}`);
const winnerOverlay = document.querySelector(`#winner-overlay`);
const whoWon = document.querySelector(`#winnerBox > span`) 
const resetButton = document.querySelector(`#resetButton`)

const findWinner = (index) => {
    const winRange = winArrays[index];

    for(let i = 0; i < winRange.length; i++) {
        const currentChoice = boardArray[index];
        const choiceOne = boardArray[winRange[i][0]];
        const choiceTwo = boardArray[winRange[i][1]];

        if(currentChoice === choiceOne && choiceOne === choiceTwo) {
            winner = currentChoice;
            return true;
        }
    }
    if (turnsRemain === 0) {
        winner = winType.tie;
        return true;
    }

    return false;
};

const showWinner = () => {
    if (winner === winType.tie) {
        whoWon.innerHTML = `It was a tie!`
    } else {
        whoWon.innerHTML = `"Winner is ${winner}!"`;
    } 
    winnerOverlay.style.display = 'grid';
};

/*
const resetBoard = () => {
    boardArray = ["","","","","","","","",""];
    player1Turn = true;
    winner = undefined;
    turnsRemain = 9;

    cell.forEach ((e, i) => {
        const cellValue = e.querySelector(`.${classNames.cellValue}`);
        cellValue.innerHTML = boardArray[i];
        cellValue.classNames.remove(classNames.animation);
        e.classNames.remove(classNames.winner);
    });

    winnerOverlay.style.display = 'none';
};

resetButton.addEventListener('click', () => {
    resetBoard();
});
*/
cell.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (!boardArray[i]) {
        boardArray[i] = player1Turn ? users.playerOne : users.playerTwo;
        player1Turn = !player1Turn;
        turnsRemain--;

        if (findWinner(i)) {
            showWinner();
        }

        const cellValue = e.querySelector(`.${classNames.cellValue}`);
        cellValue.innerHTML = boardArray[i];
        //cellValue.classNames.add(classNames.animation); //ask about this add 
        //why is the add undefined
        }
    });
});




