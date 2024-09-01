import React from "react";

const MAX_WORD_LENGTH = 5;

function GuessInput({
  guess,
  setGuess,
  setGuesses,
  answer,
  isFinished,
  setIsFinished,
  setIsWon,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== MAX_WORD_LENGTH) return;
    setGuesses((prevGuesses) => {
      return [...prevGuesses, guess];
    });
    if (guess === answer) {
      setIsWon(true);
      setIsFinished(true);
    }
    setGuess("");
  }

  function handleChange(e) {
    const uppercaseInput = e.target.value.toUpperCase();
    //TODO: Validate Invalid Characters such as space or special chars
    if (uppercaseInput.length === MAX_WORD_LENGTH + 1) return;
    setGuess(uppercaseInput);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        disabled={isFinished}
      />
    </form>
  );
}

export default GuessInput;
