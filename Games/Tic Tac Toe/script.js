// bikin semua ticboxnya jadi gak bisa di klik kalo belom pencet start

function unclickables(){
for(let i = 0; i < document.getElementsByClassName('ticbox').length; i++){
    if(!document.getElementsByClassName('ticbox')[i].classList.contains('unclickable')){
    document.getElementsByClassName('ticbox')[i].classList.add("unclickable")
    }
}
}

//Untuk mengganti tombol start menjadi reset dan reset menjadi start, dan mengubah kondisi ticbox sesuai dengan tombol yang ditekan.
function startOrReset(classKey){
    if(classKey == "startbtn"){
        for(let i = 0; i < document.getElementsByClassName('ticbox').length; i++){
            document.getElementsByClassName('ticbox')[i].classList.remove("unclickable");
        }
        document.getElementsByClassName('startbtn')[0].classList.add('reset');
        document.getElementsByClassName('startbtn')[0].textContent = "Reset";
        document.getElementsByClassName('reset')[0].classList.remove('startbtn');
        document.getElementById('instruction').textContent="Click on the empty boxes to continue";
    }
    else{
        for(let i = 0; i < document.getElementsByClassName('ticbox').length; i++){
            document.getElementsByClassName('ticbox')[i].classList.add("unclickable");
            document.getElementsByClassName('ticbox')[i].value = '';
        }
        document.getElementsByClassName('reset')[0].classList.add('startbtn');
        document.getElementsByClassName('startbtn')[0].textContent = "Start";
        document.getElementsByClassName('startbtn')[0].classList.remove('reset');
        document.getElementById('instruction').textContent="Press the 'Start' button to start the game";
    }

}

//validasi input ticbox
function tictac(IdBox){
  
  switch(IdBox){
    case 'box1':
        document.getElementsByClassName('ticbox')[0].value = "X";
        document.getElementsByClassName('ticbox')[0].classList.add("unclickable")
        break;
    case 'box2':
        document.getElementsByClassName('ticbox')[1].value = "X";
        document.getElementsByClassName('ticbox')[1].classList.add("unclickable")
        break;
   
    case 'box3':
        document.getElementsByClassName('ticbox')[2].value = "X";
        document.getElementsByClassName('ticbox')[2].classList.add("unclickable")
        break;
    case 'box4':
        document.getElementsByClassName('ticbox')[3].value = "X";
        document.getElementsByClassName('ticbox')[3].classList.add("unclickable")
        break;
    case 'box5':
        document.getElementsByClassName('ticbox')[4].value = "X";
        document.getElementsByClassName('ticbox')[4].classList.add("unclickable")
        break;
    case 'box6':
        document.getElementsByClassName('ticbox')[5].value = "X";
        document.getElementsByClassName('ticbox')[5].classList.add("unclickable")
        break;
    case 'box7':
        document.getElementsByClassName('ticbox')[6].value = "X";
        document.getElementsByClassName('ticbox')[6].classList.add("unclickable")
        break;
    case 'box8':
        document.getElementsByClassName('ticbox')[7].value = "X";
        document.getElementsByClassName('ticbox')[7].classList.add("unclickable")
        break;
    case 'box9':
        document.getElementsByClassName('ticbox')[8].value = "X";
        document.getElementsByClassName('ticbox')[8].classList.add("unclickable")
        break;    
    }
    if(document.querySelectorAll('.unclickable').length < 8){
        botTicTac();
    }
    validateWin();

    
    
}   


//fungsi untuk move bot
function botTicTac(){
    var move = -1;
    while(true){
        move = Math.floor(Math.random() * 9)
        console.log(move);
        if(document.getElementsByClassName('ticbox')[move].value === "X"){
            continue;

        }else if(document.getElementsByClassName('ticbox')[move].value === "O"){
            continue;
        }
        else{
            document.getElementsByClassName('ticbox')[move].value = "O";
            document.getElementsByClassName('ticbox')[move].classList.add("unclickable")
            break;
        }
    }
}


function validateWin(){
    let box1 = document.getElementById('box1').value;
    let box2 = document.getElementById('box2').value;
    let box3 = document.getElementById('box3').value;
    let box4 = document.getElementById('box4').value;
    let box5 = document.getElementById('box5').value;
    let box6 = document.getElementById('box6').value;
    let box7 = document.getElementById('box7').value;
    let box8 = document.getElementById('box8').value;
    let box9 = document.getElementById('box9').value;
    let playerScore = parseInt(document.getElementById('player-score').textContent);
    let botScore = parseInt(document.getElementById('bot-score').textContent);

    if((box1 == 'X') && (box2 == 'X') && (box3 == 'X')){
        unclickables();
        document.getElementById('instruction').textContent="You win! Press the reset button to play again";
        document.getElementById('player-score').textContent.replace = playerScore+1;
        return;
    }else if((box1 =='X') && (box4 == 'X') && (box7 == 'X')){
        unclickables();
        document.getElementById('instruction').textContent="You win! Press the reset button to play again";
        document.getElementById('player-score').textContent = playerScore+1;
        return;
    }
    else if((box1 =='X') && (box5 == 'X') && (box9 == 'X')){
        unclickables();
        document.getElementById('instruction').textContent="You win! Press the reset button to play again";
        document.getElementById('player-score').textContent = playerScore+1;
        return;
    }
    else if((box2 =='X') && (box5 == 'X') && (box8 == 'X')){
        unclickables();
        document.getElementById('instruction').textContent="You win! Press the reset button to play again";
        document.getElementById('player-score').textContent = playerScore+1;
        return;
    }
    else if((box3 =='X') && (box5 == 'X') && (box7 == 'X')){
        unclickables();
        document.getElementById('instruction').textContent="You win! Press the reset button to play again";
        document.getElementById('player-score').textContent = playerScore+1;
        return;
    }
    else if((box3 =='X') && (box6 == 'X') && (box9 == 'X')){
        unclickables();
        document.getElementById('instruction').textContent="You win! Press the reset button to play again";
        document.getElementById('player-score').textContent = playerScore+1;
        return;
    }else if((box3 =='X') && (box5 == 'X') && (box7 == 'X')){
        unclickables();
        document.getElementById('instruction').textContent="You win! Press the reset button to play again";
        document.getElementById('player-score').textContent = playerScore+1;
        return;
    }else if((box3 =='X') && (box6 == 'X') && (box9 == 'X')){
        unclickables();
        document.getElementById('instruction').textContent="You win! Press the reset button to play again";
        document.getElementById('player-score').textContent = playerScore+1;
        return;
    }else if((box7 =='X') && (box8 == 'X') && (box9 == 'X')){
        unclickables();
        document.getElementById('instruction').textContent="You win! Press the reset button to play again";
        document.getElementById('player-score').textContent = playerScore+1;
        return;
    }else if((box4 =='X') && (box5 == 'X') && (box6 == 'X')){
        unclickables();
        document.getElementById('instruction').textContent="You win! Press the reset button to play again";
        document.getElementById('player-score').textContent = playerScore+1;
        return;
    }else if((box1 == 'O') && (box2 == 'O') && (box3 == 'O')){
        unclickables();
        document.getElementById('instruction').textContent="You lose! Press the reset button to play again";
        document.getElementById('bot-score').textContent = playerScore+1;
        return;
    }else if((box1 =='O') && (box4 == 'O') && (box7 == 'O')){
        unclickables();
        document.getElementById('instruction').textContent="You lose! Press the reset button to play again";
        document.getElementById('bot-score').textContent = botScore+1;
        return;
    }
    else if((box1 =='O') && (box5 == 'O') && (box9 == 'O')){
        unclickables();
        document.getElementById('instruction').textContent="You lose! Press the reset button to play again";
        document.getElementById('bot-score').textContent = botScore+1;
        return;
    }
    else if((box2 =='O') && (box5 == 'O') && (box8 == 'O')){
        unclickables();
        document.getElementById('instruction').textContent="You lose! Press the reset button to play again";
        document.getElementById('bot-score').textContent = botScore+1;
        return;
    }
    else if((box3 =='O') && (box5 == 'O') && (box7 == 'O')){
        unclickables();
        document.getElementById('instruction').textContent="You lose! Press the reset button to play again";
        document.getElementById('bot-score').textContent = botScore+1;
        return;
    }
    else if((box3 =='O') && (box6 == 'O') && (box9 == 'O')){
        unclickables();
        document.getElementById('instruction').textContent="You lose! Press the reset button to play again";
        document.getElementById('bot-score').textContent = botScore+1;
        return;
    }else if((box3 =='O') && (box5 == 'O') && (box7 == 'O')){
        unclickables();
        document.getElementById('instruction').textContent="You lose! Press the reset button to play again";
        document.getElementById('bot-score').textContent = botScore+1;
        return;
    }else if((box3 =='O') && (box6 == 'O') && (box9 == 'O')){
        unclickables();
        document.getElementById('instruction').textContent="You lose! Press the reset button to play again";
        document.getElementById('bot-score').textContent = botScore+1;
        return;
    }else if((box7 =='O') && (box8 == 'O') && (box9 == 'O')){
        unclickables();
        document.getElementById('instruction').textContent="You lose! Press the reset button to play again";
        document.getElementById('bot-score').textContent = botScore+1;
        return;
    }else if((box4 =='O') && (box5 == 'O') && (box6 == 'O')){
        unclickables();
        document.getElementById('instruction').textContent="You lose! Press the reset button to play again";
        document.getElementById('bot-score').textContent = botScore+1;
        return;
    }else if(document.querySelectorAll('.unclickable').length == 9){
        unclickables();
        document.getElementById('instruction').textContent="Tie Match! Press the reset button to play again";
    }

}

