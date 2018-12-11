var score, roundScore, activePlayer, gamePlaying;
init();

//var x = document.querySelector('#score-0').textContent;



document.querySelector('.btn-roll').addEventListener('click', function(){
        if(gamePlaying){
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
            nextPlayer();
             }
        }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        // Add CURRENT score to GLOBAL score --
    scores[activePlayer] += roundScore;
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //Check if the player won the Game
    if (scores[activePlayer] >= 10){
        document.querySelector('#name-' + activePlayer).textContent = 'winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
       
    }else{
        //Next Player
        nextPlayer();
        }
    }
    
});

function nextPlayer() {
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
document.querySelector('.btn-new').addEventListener('click', init);
 function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';1
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
 }  