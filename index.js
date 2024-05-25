/* --- VARIABLES --- */
  const choices = ['✊', '🤚', '✌️'];
  const player1 = document.getElementById('player-1');
  /* 4b. */
  // const rock = '?';
  // const paper = '?';
  // const scissors = '?';
  /* 1a. */
  const player2 = '?';

  /* 1b. */
  const resultArea = '?';

  /* 1c. and 4b. */
  const playBtn = '?';

  /* This will help check your results */
  console.log(player2, resultArea, playBtn);

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

  const generateChoice = () => {
    let r = Math.floor(Math.random() * 3);
    return choices[r]
  };

  const insertHTML = (choice1, choice2, result) => {
    player1.innerHTML = choice1;
    player2.innerHTML = choice2;
    resultArea.innerHTML = result;
  };

  const decideWinner = (a, b) => {
    if (a === b) {

      /* 3a. */ return "?";

    } else if ((a === '✊' && b === '✌️') || (a === '🤚' && b === '✊') || (a === '✌️' && b === '🤚')) {

      /* 3b. */ return "?";

    } else {

      /* 3c. */ return "?";

    }
  };

  const play = (event) => {
    /* 4c. */
    let choice1 = generateChoice();
    // let choice1 = event.target.innerText;

    let choice2 = generateChoice();
    let result = decideWinner(choice1, choice2);

    insertHTML(choice1, choice2, result);
  };

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

  /* 2. and 4d. */

/* ------------------------------- */
