// make array for the board 
//player1 = 'X' 
//player2 = "computer or 'O'"



let boardArr = ["","","","","","","","",""];
let player1 = 'X';
let player2 = 'O';
let computer = 'C';
var turn = true;


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
};


function cellClick(hi) {
   document.getElementById(hi)
   //console.log(document.getElementById(hi).innerHTML)
   if(turn) {
    document.getElementById(hi).innerHTML = "X"
   } else {
    document.getElementById(hi).innerHTML = "O"
   } turn =! turn
   console.log(hi) 
}; 

function checkGame () {

}

function countPlayer1 () { // need to get count of P1 
    let p1Count = $('.board, "X"').length  
    return p1Count
};

function countPlayer2 () {
    let p2Count = $('.board, "O"').length
    return p2Count
};

function gameTrack () {

} // check 

function whoWonGame () {
    const winArr = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
    let player1Wins = getWinArr(winArr, "X")
    let player2Wins = getWinArr(winArr, "O")
    let fullBoard = countPlayer1() + countPlayer2()
    let drawGame = (fullBoard === 9) && (!player1Wins) && (!player2Wins) 

    if(player1Wins) {
        player1Wins()
        return winner = `${Player1Input} wins!}`
    }
    if(player2Wins) {
        player2Wins()
        return winner = `${Player2Input} wins!}`
    }
    if(drawGame) {
        drawGame() 
        return winner = draw
    } else {
        console.log ('the show must go on...')
    }
};



function restartGame () {
    console.log(document.querySelectorAll('.cell'))
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "Choose!");

}



// click function for the cells 
//document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));

//click function for the restart button
//document.querySelector('.restartButton').forEach(cell => cell.innerHTML = "Choose!");

//click function for the start button
//document.querySelector('.goButton').addEventListener('click', startGame);

