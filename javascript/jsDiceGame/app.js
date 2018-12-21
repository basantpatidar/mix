//Initialize variables
var scores, roundScore, activePlayer, gamePlaying,lastScore, changeTarget, playerZero, playerOne;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
        if(gamePlaying){
            //1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1; 

        //2. Display Result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        //2.1 If Rolled 6 twice
        //3. If rolled number is not 1 then update the round score
        if(lastScore === dice && lastScore === 6){
            console.log("yes")
            console.log(scores[activePlayer]);
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if(dice !== 1){
            //Add roundScore
            roundScore += dice;
            console.log("RoundScore " + roundScore)
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            //Next Player One if Zero
            nextPlayer();
             }
        }
    lastScore = dice;
console.log("lastscore: "+ lastScore)
});

//Change Target
document.querySelector('.chg-target').addEventListener('click',function(){
    changeTarget = 100;
   changeTarget = document.querySelector('.ip-text').value;
   console.log(changeTarget);

})


//get Hold buttton functional
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        // Add CURRENT score to GLOBAL score --
    scores[activePlayer] += roundScore;
        //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //Check if the player won the Game
    if (scores[activePlayer] >= changeTarget){
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
