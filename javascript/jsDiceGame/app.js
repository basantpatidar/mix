var score, roundScore, activePlayer, player0, player1;
score = [0,0];
activePlayer = 0;
roundScore = 0;

//var x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none';
document.querySelector('score-0').textContent = '0';
document.querySelector('score-1').textContent = '0';
document.querySelector('current-0').textContent = '0';
document.querySelector('current-1').textContent = '0';



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
        }else{
            //Next Player

        }
});
