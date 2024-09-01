import React from "react";

function Banner({ type, numberOfGuesses, answer, isWon }) {
  const sadMessage = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );

  const happyMessage = (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{numberOfGuesses} guesses</strong>.
    </p>
  );

  return (
    <div className={`banner ${type}`}>{isWon ? happyMessage : sadMessage}</div>
  );
}
export default Banner;
