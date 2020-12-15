// make array for the board 
//player1 = 'X' 
//player2 = "computer or 'O'"



let boardArr = ["","","","","","","","",""];
let player1 = 'X';
let player2 = 'O';
let computer = 'O';


function startGame(event) {
    $(".goButton").click(function(event) {
        let buttonClicked = this.innerHTML
        let player1 = getPlayerOne();
        if(player1 === "X") {
            $(this).html("X")
        }
        if(player2 === "O") {
            $(this).html("O")
        }
        if(computer === "O") {
            $(this).html("O")
        }
        playGame();
    }) 
} startGame(event)

function countPlayer1 () { // need to get count of P1 
    let p1Count = $('.board, "X"').length  
    return p1Count
}

function countPlayer2 () {
    let p2Count = $('.board, "O"').length
    return p2Count
}

function countComputer () {
    let compCount = $('.board, "O"').length
}

function whoWonGame () {
    const winArr = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
    let player1Wins = getWinArr(winArr, "X")
    let player2Wins = getWinArr(winArr, "O")
    let computerWins = getWinArr(winArr, "O")
    let fullBoard = countPlayer1() + countPlayer2() || countPlayer1() + countComputer()
    let drawGame = (fullBoard === 9) && (!player1Wins) && (!player2Wins) && (!computerWins)

    if(player1Wins) {
        player1Wins()
        return winner = `${Player1Input} wins!}`
    }
    if(player2Wins) {
        player2Wins()
        return winner = `${Player2Input} wins!}`
    }
    if(computerWins) {
        computerWins() 
        return winner = `Computer wins!`
    }
    if(drawGame) {
        drawGame() 
        return winner = draw
    } else {
        console.log ('the show must go on...')
    }
}

/*    
    $("#goButton").click(function() {
        applyName();
        startGame();
        startComputer();
        cellClick();
        scoreNames();
        scoreKeeper();
    });
    
    $("#resetButton").click(function() {
        restartGame();
    });

    function startGame () {
        if (inputPlayer1.value !== '' && inputPlayer2.value !== '' && inputPlayer2.value === '') {
            player1 = userFactory(player1Name.value, 'X');
            player2 = userFactory(player2Name.value, 'O');
            computer = userFactory(player2Name.value, 'O')
        }    
    // what to do when clicking on the "lets go" button
    };


    function cellClick() {
        let cell = array.from(document.querySelectorAll('.cell'));
        // what to do when cellClick (clicking on individual cells)
    };

    function applyName() {

    }

    function restartGame () {
        
        // what to do with clicking on the restartButton
    };

    function scoreNames() {

        //changing the "player1" and "player2" names of the scorecard
    }

    function scoreKeeper () {

    };

    function whoWins () {
        
    }
});
*/
// click function for the cells 
//document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));

//click function for the restart button
//document.querySelector('.restartButton').addEventListener('click', restartGame);

//click function for the start button
//document.querySelector('.goButton').addEventListener('click', startGame);

