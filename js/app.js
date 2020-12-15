// make array for the board 
//player1 = 'X' 
//player2 = "computer or 'O'"



let boardArray = ["","","","","","","","",""];
var player1Turn = true;

/*
function startGame() {
    let p1Name = document.getElementById("inputPlayer1").value;
    document.getElementById("player1Score").innerHTML = p1Name;
    let p2Name = document.getElementById("inputPlayer2").value;
    document.getElementById("player2Score").innerHTML = p2Name;
    
    if(player1 === "X") {
        $(this).html("X")
    }
    if(player2 === "O") {
        $(this).html("O")
    }
};*/

const classNames = {
    cell: 'cell',
    cellValue: 'cell-value',
    character: 'character'
};

const users = {
    playerOne: 'X',
    playerTwo: 'O'
}

const cell = document.querySelectorAll(`.${classNames.cell}`);
cell.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (!boardArray[i]) {
        boardArray[i] = player1Turn ? users.playerOne : users.playerTwo;
        player1Turn = !player1Turn;

        const cellValue = e.querySelector(`.${classNames.cellValue}`);
        cellValue.innerHTML = boardArray[i];
        cellValue.classLists.add(classNames.animation);
        }
    });
});

/*
function cellClick(hi) {
   document.getElementById(hi)
   //console.log(document.getElementById(hi).innerHTML)
   if(turn) {
    document.getElementById(hi).innerHTML = "X"
   } else {
    document.getElementById(hi).innerHTML = "O"
   } turn =! turn
   console.log(hi) 
}; */

function trackGame () {
}

function countPlayer1 () { 
    let p1Count = $('.board, "X"').length  
    return p1Count
};

function countPlayer2 () {
    let p2Count = $('.board, "O"').length
    return p2Count
};

function gameTrack () {

} // check 

/*
function whoWonGame () {
    const winArr = [
    ["#1, #2, #3"], ["#4, #5, #6"], ["#7, #8, #9"], ["#1, #4, #7"], ["#2, #5, #8"], ["#3, #6, #9"], ["#1, #5, #9"], ["#3, #5, #7"]];

    let player1WinArr = getWinArr(winArr, "X");
    let player2WinArr = getWinArr(winArr, "O");
    let p1Wins = player1WinArr.includes(true);
    let p2Wins = player2WinArr.includes(true);
    let fullBoard = countPlayer1() + countPlayer2()
    let drawGame = (fullBoard === 9) && (!player1Wins) && (!player2Wins) 



    if(p1Wins) {
        player1WinArr()
        return winner = `${Player1Input} wins!}`;
    }
    if(p2Wins) {
        player2WinArr()
        return winner = `${Player2Input} wins!}`
    }
    if(drawGame) {
        drawGame() 
        return winner = draw
    } else {
        console.log ('the show must go on...')
    }
};
*/


function resetBoard () {
    console.log(document.querySelectorAll('.cell'))
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "Choose Me!");
}



// click function for the cells 
//document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));

//click function for the restart button
//document.querySelector('.restartButton').forEach(cell => cell.innerHTML = "Choose!");

//click function for the start button
//document.querySelector('.goButton').addEventListener('click', startGame);

