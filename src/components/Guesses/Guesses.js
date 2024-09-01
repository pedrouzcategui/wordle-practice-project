import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, MAX_NUM_OF_CELLS } from "../../constants";
import { checkGuess } from "../../game-helpers.js";

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
        let guess = guesses[i];
        let doesGuessExistAtPosition = guess !== undefined;
        let guessStatusObject = checkGuess(guess, answer);
        return (
          <p key={`guess-row-${i}`} className="guess">
            {range(0, MAX_NUM_OF_CELLS).map((j) => {
              return (
                <span
                  key={`guess-cell-${j}`}
                  className={`cell ${
                    doesGuessExistAtPosition && guessStatusObject[j].status
                  }`}
                >
                  {doesGuessExistAtPosition ? guess[j] : ""}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guesses;
