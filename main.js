let hands = ["Rock", "Paper", "Scissor"]
let playerOne= []
let playerTwo= []
let p1w= false
let p2w= false
let draw= false
let a1= 1
let a2= 1
let gameOver=false

function noMoreGame(){
    alert("Game is Over, Please Tap On The Restart Button To Play Again")
}

function changeScore1(){
    if(p1w = true){
        document.getElementById("p1-0").innerHTML= a1++
    }else{
        return
    }
}


function changeScore2(){
    if(p2w = true){
        document.getElementById("p2-0").innerHTML= a2++
    }else{
        return
    }
}


function restartGame(){
    return window.location.reload();
}


function startRock(){  
    
    playerOne= hands[0]
    playerTwo= hands[Math.floor(Math.random()*3)]
    console.log("Player one- "+ playerOne);
    console.log("Player two- "+ playerTwo);

    if(gameOver == true){
        noMoreGame();
    }
    
    if(document.getElementById("p1-0").textContent== 3){
        document.getElementById("scoreall").textContent="Congradulations, You Won!";
        gameOver=true
        return
    }else if(document.getElementById("p2-0").textContent== 3){
        document.getElementById("scoreall").textContent="You Lose, Maybe Next Time.";
        gameOver=true
        return
    }
       
    // Draws:
    if(playerOne === hands[0] && playerTwo === hands[0]){
        document.getElementById("scoreall").textContent="-D R A W-";
        document.getElementById("p1").src = "images/rock.jpg";
        document.getElementById("p2").src = "images/rock.jpg";
        document.getElementById("scoreall").style.color = "black";
        console.log("DRAW -_-")
        draw = true;
    }else if(playerOne === hands[1] && playerTwo === hands[1]){
        document.getElementById("scoreall").textContent="-D R A W-";
        document.getElementById("p1").src = "images/paper.jpg";
        document.getElementById("p2").src = "images/paper.jpg";
        document.getElementById("scoreall").style.color = "black";
        console.log("DRAW -_-")
        draw = true;
    }else if(playerOne === hands[2] && playerTwo === hands[2]){
        document.getElementById("scoreall").textContent="-D R A W-";
        document.getElementById("p1").src = "images/scissor.jpg";
        document.getElementById("p2").src = "images/scissor.jpg";
        document.getElementById("scoreall").style.color = "black";
        console.log("DRAW -_-")
        draw = true;
    
    // WINS
    }else if(playerOne === hands[0] && playerTwo === hands[1]){
        console.log("Player Two Wins");
        document.getElementById("p1").src = "images/rock.jpg";
        document.getElementById("p2").src = "images/paper.jpg";
        document.getElementById("scoreall").textContent="Player Two Wins";
        document.getElementById("scoreall").style.color = "blue";
        p2w= true;
        changeScore2();
    }else if(playerOne === hands[0] && playerTwo === hands[2]){
        console.log("Player One wins");
        document.getElementById("p1").src = "images/rock.jpg";
        document.getElementById("p2").src = "images/scissor.jpg";
        document.getElementById("scoreall").textContent="Player One wins";
        document.getElementById("scoreall").style.color = "Red";
        p1w= true;
        changeScore1();
    }else if(playerOne === hands[1] && playerTwo === hands[0]){
        console.log("Player One wins");
        document.getElementById("p1").src = "images/paper.jpg";
        document.getElementById("p2").src = "images/rock.jpg";
        document.getElementById("scoreall").textContent="Player One wins";
        document.getElementById("scoreall").style.color = "Red";
        p1w= true;
        changeScore1();
    }else if(playerOne === hands[1] && playerTwo === hands[2]){
        console.log("Player Two Wins");
        document.getElementById("p1").src = "images/paper.jpg";
        document.getElementById("p2").src = "images/scissor.jpg";
        document.getElementById("scoreall").textContent="Player Two Wins";
        document.getElementById("scoreall").style.color = "blue";
        p2w= true;
        changeScore2();
    }else if(playerOne === hands[2] && playerTwo === hands[0]){
        console.log("Player Two Wins");
        document.getElementById("p1").src = "images/scissor.jpg";
        document.getElementById("p2").src = "images/rock.jpg";
        document.getElementById("scoreall").textContent="Player Two Wins";
        document.getElementById("scoreall").style.color = "blue";
        p2w= true;
        changeScore2();
    }else if(playerOne === hands[2] && playerTwo === hands[1]){
        console.log("Player One Wins");
        document.getElementById("p1").src = "images/scissor.jpg";
        document.getElementById("p2").src = "images/paper.jpg";
        document.getElementById("scoreall").textContent="Player One Wins";
        document.getElementById("scoreall").style.color = "Red";
        p1w= true;
        changeScore1();
    }
    
    if(document.getElementById("p1-0").textContent== 3){
        document.getElementById("scoreall").textContent= "Congradulations, You Won!";
        gameOver=true
    }else if(document.getElementById("p2-0").textContent== 3){
        document.getElementById("scoreall").textContent= "You Lose, Maybe Next Time.";
        gameOver=true
    }
}


function startPaper(){  
    
    playerOne= hands[1]
    playerTwo= hands[Math.floor(Math.random()*3)]
    console.log("Player one- "+ playerOne);
    console.log("Player two- "+ playerTwo);

    if(gameOver == true){
        noMoreGame();
    }

    //cancel buttons
    if(document.getElementById("p1-0").textContent== 3){
        document.getElementById("scoreall").textContent="Congradulations, You Won!";
        gameOver=true
        return
    }else if(document.getElementById("p2-0").textContent== 3){
       document.getElementById("scoreall").textContent="You Lose, Maybe Next Time.";
       gameOver=true
       return 
    }

    // Draws:
    if(playerOne === hands[0] && playerTwo === hands[0]){
        document.getElementById("scoreall").textContent="-D R A W-";
        document.getElementById("p1").src = "images/rock.jpg";
        document.getElementById("p2").src = "images/rock.jpg";
        document.getElementById("scoreall").style.color = "black";
        console.log("DRAW -_-")
        draw = true;
    }else if(playerOne === hands[1] && playerTwo === hands[1]){
        document.getElementById("scoreall").textContent="-D R A W-";
        document.getElementById("p1").src = "images/paper.jpg";
        document.getElementById("p2").src = "images/paper.jpg";
        document.getElementById("scoreall").style.color = "black";
        console.log("DRAW -_-")
        draw = true;
    }else if(playerOne === hands[2] && playerTwo === hands[2]){
        document.getElementById("scoreall").textContent="-D R A W-";
        document.getElementById("p1").src = "images/scissor.jpg";
        document.getElementById("p2").src = "images/scissor.jpg";
        document.getElementById("scoreall").style.color = "black";
        console.log("DRAW -_-")
        draw = true;
    
    // WINS
    }else if(playerOne === hands[0] && playerTwo === hands[1]){
        console.log("Player Two Wins");
        document.getElementById("p1").src = "images/rock.jpg";
        document.getElementById("p2").src = "images/paper.jpg";
        document.getElementById("scoreall").textContent="Player Two Wins";
        document.getElementById("scoreall").style.color = "blue";
        p2w= true;
        changeScore2();
    }else if(playerOne === hands[0] && playerTwo === hands[2]){
        console.log("Player One wins");
        document.getElementById("p1").src = "images/rock.jpg";
        document.getElementById("p2").src = "images/scissor.jpg";
        document.getElementById("scoreall").textContent="Player One wins";
        document.getElementById("scoreall").style.color = "Red";
        p1w= true;
        changeScore1();
    }else if(playerOne === hands[1] && playerTwo === hands[0]){
        console.log("Player One wins");
        document.getElementById("p1").src = "images/paper.jpg";
        document.getElementById("p2").src = "images/rock.jpg";
        document.getElementById("scoreall").textContent="Player One wins";
        document.getElementById("scoreall").style.color = "Red";
        p1w= true;
        changeScore1();
    }else if(playerOne === hands[1] && playerTwo === hands[2]){
        console.log("Player Two Wins");
        document.getElementById("p1").src = "images/paper.jpg";
        document.getElementById("p2").src = "images/scissor.jpg";
        document.getElementById("scoreall").textContent="Player Two Wins";
        document.getElementById("scoreall").style.color = "blue";
        p2w= true;
        changeScore2();
    }else if(playerOne === hands[2] && playerTwo === hands[0]){
        console.log("Player Two Wins");
        document.getElementById("p1").src = "images/scissor.jpg";
        document.getElementById("p2").src = "images/rock.jpg";
        document.getElementById("scoreall").textContent="Player Two Wins";
        document.getElementById("scoreall").style.color = "blue";
        p2w= true;
        changeScore2();
    }else if(playerOne === hands[2] && playerTwo === hands[1]){
        console.log("Player One Wins");
        document.getElementById("p1").src = "images/scissor.jpg";
        document.getElementById("p2").src = "images/paper.jpg";
        document.getElementById("scoreall").textContent="Player One Wins";
        document.getElementById("scoreall").style.color = "Red";
        p1w= true;
        changeScore1();
    }
    
    if(document.getElementById("p1-0").textContent== 3){
        document.getElementById("scoreall").textContent= "Congradulations, You Won!";
        gameOver=true
    }else if(document.getElementById("p2-0").textContent== 3){
        document.getElementById("scoreall").textContent= "You Lose, Maybe Next Time.";
        gameOver=true
    }
}

function startScissor(){  
    
    playerOne= hands[2]
    playerTwo= hands[Math.floor(Math.random()*3)]
    console.log("Player one- "+ playerOne);
    console.log("Player two- "+ playerTwo);

    if(gameOver == true){
        noMoreGame();
    }

    // cancel buttons
    if(document.getElementById("p1-0").textContent== 3){
        document.getElementById("scoreall").textContent= "Congradulations, You Won!";
        gameOver=true
        return
    }else if(document.getElementById("p2-0").textContent== 3){
       document.getElementById("scoreall").textContent= "You Lose, Maybe Next Time.";
       gameOver=true
       return 
    }

    // Draws:
    if(playerOne === hands[0] && playerTwo === hands[0]){
        document.getElementById("scoreall").textContent="-D R A W-";
        document.getElementById("p1").src = "images/rock.jpg";
        document.getElementById("p2").src = "images/rock.jpg";
        document.getElementById("scoreall").style.color = "black";
        console.log("DRAW -_-")
        draw = true;
    }else if(playerOne === hands[1] && playerTwo === hands[1]){
        document.getElementById("scoreall").textContent="-D R A W-";
        document.getElementById("p1").src = "images/paper.jpg";
        document.getElementById("p2").src = "images/paper.jpg";
        document.getElementById("scoreall").style.color = "black";
        console.log("DRAW -_-")
        draw = true;
    }else if(playerOne === hands[2] && playerTwo === hands[2]){
        document.getElementById("scoreall").textContent="-D R A W-";
        document.getElementById("p1").src = "images/scissor.jpg";
        document.getElementById("p2").src = "images/scissor.jpg";
        document.getElementById("scoreall").style.color = "black";
        console.log("DRAW -_-")
        draw = true;
    
    // WINS
    }else if(playerOne === hands[0] && playerTwo === hands[1]){
        console.log("Player Two Wins");
        document.getElementById("p1").src = "images/rock.jpg";
        document.getElementById("p2").src = "images/paper.jpg";
        document.getElementById("scoreall").textContent="Player Two Wins";
        document.getElementById("scoreall").style.color = "blue";
        p2w= true;
        changeScore2();
    }else if(playerOne === hands[0] && playerTwo === hands[2]){
        console.log("Player One wins");
        document.getElementById("p1").src = "images/rock.jpg";
        document.getElementById("p2").src = "images/scissor.jpg";
        document.getElementById("scoreall").textContent="Player One wins";
        document.getElementById("scoreall").style.color = "Red";
        p1w= true;
        changeScore1();
    }else if(playerOne === hands[1] && playerTwo === hands[0]){
        console.log("Player One wins");
        document.getElementById("p1").src = "images/paper.jpg";
        document.getElementById("p2").src = "images/rock.jpg";
        document.getElementById("scoreall").textContent="Player One wins";
        document.getElementById("scoreall").style.color = "Red";
        p1w= true;
        changeScore1();
    }else if(playerOne === hands[1] && playerTwo === hands[2]){
        console.log("Player Two Wins");
        document.getElementById("p1").src = "images/paper.jpg";
        document.getElementById("p2").src = "images/scissor.jpg";
        document.getElementById("scoreall").textContent="Player Two Wins";
        document.getElementById("scoreall").style.color = "blue";
        p2w= true;
        changeScore2();
    }else if(playerOne === hands[2] && playerTwo === hands[0]){
        console.log("Player Two Wins");
        document.getElementById("p1").src = "images/scissor.jpg";
        document.getElementById("p2").src = "images/rock.jpg";
        document.getElementById("scoreall").textContent="Player Two Wins";
        document.getElementById("scoreall").style.color = "blue";
        p2w= true;
        changeScore2();
    }else if(playerOne === hands[2] && playerTwo === hands[1]){
        console.log("Player One Wins");
        document.getElementById("p1").src = "images/scissor.jpg";
        document.getElementById("p2").src = "images/paper.jpg";
        document.getElementById("scoreall").textContent="Player One Wins";
        document.getElementById("scoreall").style.color = "Red";
        p1w= true;
        changeScore1();
    }
    
    if(document.getElementById("p1-0").textContent== 3){
        document.getElementById("scoreall").textContent= "Congradulations, You Won!";
        gameOver=true
    }else if(document.getElementById("p2-0").textContent== 3){
        document.getElementById("scoreall").textContent= "You Lose, Maybe Next Time.";
        gameOver=true
    }
}