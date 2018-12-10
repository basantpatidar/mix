var score, roundScore, activePlayer, player0, player1;
score = [0,0];
activePlayer = 0;
roundScore = 0;

//var x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click', function(){
        //1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1; 

        //2. Display Result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        

        //3. If rolled number is not 1 then update the round score
        if(dice !== 1){
            //Add roundScore
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            //Next Player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore =0;

            document.getElementById('current-0').textContent ='0';
            document.getElementById('current-1').textContent ='0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

           // document.querySelector('.player-0-panel').classList.remove('active');
           // document.querySelector('.player-1-panel').classList.add('active');

           document.querySelector('.dice').style.display='none';
            
        }
});

document.querySelector('btn-hold').addEventListener('click',function(){
    // Add CURRENT score to GLOBAL score --

    //Update the UI

    //Check if the player won the Game

});