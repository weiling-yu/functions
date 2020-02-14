/* I create a program that you can play paper, rock, scissors with. this function will only takes paper, rock, scissors as a valid input. in the bottom I create a helper function that will papulate random string, I use Math.random to create random number from 0 to 2 and assign them to paper, rock, and scissors. */


function rockPaperScissors (input){
  // create edge cases
  input = input.toLowerCase();
  if (input === 'rock' || input === 'paper' || input === 'scissors'){
    input = input;
  }
  else {
    console.log('invalid input');
  }

  // determine winner
  if (input === computerChoice()){
    return `The game is a tie`;
  }
  if (input === 'rock'){
    if (computerChoice() === 'paper'){
      return `${input} vs paper : paper wins!`;
    }
    else { // computerChoice : scissors
      return `${input} vs scissors: ${input} wins!`;
    }
  }
  if (input === 'paper'){
    if (computerChoice() === 'scissors'){
      return `${input} vs scissors: scissors wins!`;
    } else { // computerChoice : rock
      return `${input} vs rock: ${input} wins!`;
    }
  }
  if (input === 'scissors'){
    if (computerChoice() === 'rock'){
      return `${input} vs rock : rock wins!`;
    } else { // computerChoice : paper
      return `${input} vs paper: ${input} wins!`;
    }
  }

};

let computerChoice  = function (){
  let rondomNum = Math.floor(Math.random()*3);
  let radomChoice = '';
  if (rondomNum === 0){
    radomChoice = 'rock';
  }
  if (rondomNum === 1){
    radomChoice = 'paper';
  }
  if (rondomNum === 2){
    radomChoice = 'scissors';
  }
  return radomChoice;
};


let computerRandomChoice  = function (){
  let rondomNum = Math.floor(Math.random()*3);
  let radomChoice = '';
  if (rondomNum === 0){
    radomChoice = 'rock';
  }
  if (rondomNum === 1){
    radomChoice = 'paper';
  }
  if (rondomNum === 2){
    radomChoice = 'scissors';
  }
  return radomChoice;
};

function rockPaperScissors (input){
  // create edge cases
  input = input.toLowerCase();
  if (input === 'rock' || input === 'paper' || input === 'scissors'){
    input = input;
  }
  else {
    console.log('invalid input');
  }
  let computerChoice = computerRandomChoice(); // console.log('computerChoice: ', computerChoice)
  // RR PP SS --> tie
  if (input === computerChoice){
    return `The game is a tie`;
  }
  // RP RS
  if (input === 'rock'){
    if (computerChoice === 'paper'){
      return `${input} vs ${computerChoice} : ${computerChoice} wins!`;
    }
    else { // computerChoice : scissors
      return `${input} vs ${computerChoice}: ${input} wins!`;
    }
  }
  // PS PR
  if (input === 'paper'){
    if (computerChoice === 'scissors'){
      return `${input} vs ${computerChoice}: ${computerChoice} wins!`;
    } else { // computerChoice : rock
      return `${input} vs ${computerChoice}: ${input} wins!`;
    }
  }
  // SR SP
  if (input === 'scissors'){
    if (computerChoice === 'rock'){
      return `${input} vs ${computerChoice} : ${computerChoice} wins!`;
    } else { // computerChoice : paper
      return `${input} vs ${computerChoice}: ${input} wins!`;
    }
  }
};
//rockPaperScissors('Paper') //'paper vs rock: paper wins!
//rockPaperScissors('rocK')  //'rock vs rock: tie!'