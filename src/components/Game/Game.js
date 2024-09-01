import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  const [isFinished, setIsFinished] = React.useState(false);
  const [isWon, setIsWon] = React.useState(false);

  React.useEffect(() => {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setIsFinished(true);
    }
  }, [guesses]);

  React.useEffect(() => {}, [isFinished]);

  return (
    <React.Fragment>
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        setGuesses={setGuesses}
        answer={answer}
        setIsFinished={setIsFinished}
        isFinished={isFinished}
        setIsWon={setIsWon}
      />
      <Guesses guesses={guesses} answer={answer} />
      {isFinished && (
        <Banner
          type={isWon ? "happy" : "sad"}
          numberOfGuesses={guesses.length}
          answer={answer}
          isWon={isWon}
        />
      )}
    </React.Fragment>
  );
}

export default Game;
