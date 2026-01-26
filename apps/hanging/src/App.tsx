import { useMemo, useState } from "react";
import { getWord } from "./helpers/getWord";
import { letters } from "./helpers/letters";
import { HangImage } from "./components/HangImage";
import "./App.css";

function App() {
  const [wordToGuess] = useState(getWord());
  const [hidenWord, setHidenWord] = useState("_".repeat(wordToGuess.length));
  const [attemps, setAttemps] = useState(0);
  const gameOver = attemps >= 9;
  const won = useMemo(() => {
    const currentHiddenWord = hidenWord.split(" ").join("");
    return currentHiddenWord === wordToGuess;
  }, [hidenWord, wordToGuess]);
  const checkLetter = (letter: string) => {
    if (gameOver) return;
    if (won) return;
    if (!wordToGuess.includes(letter)) {
      setAttemps(Math.min(attemps + 1, 9));
      return;
    }
    const hiddenWordArray = hidenWord.split("");

    for (let i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    setHidenWord(hiddenWordArray.join(""));
  };

  return (
    <div className="App">
      {/* Imagenes */}
      <HangImage imageNumber={attemps} />
      {/* Palabra oculta */}
      <h3 className="word-display">{hidenWord}</h3>
      {/* Contador de intentos */}
      <h3 className="attempts">Intentos: {attemps}</h3>
      {/* Mensaje si perdio */}
      {gameOver && !won ? (
        <h2 className="message lose-message">
          ¡Has perdido! La palabra era: {wordToGuess}
        </h2>
      ) : null}
      {/* Mensaje si gano */}
      {won ? <h2 className="message win-message">¡Has ganado!</h2> : null}
      {/* Botones de letras */}
      <div className="letters">
        {letters.map((letter) => (
          <button
            onClick={() => checkLetter(letter)}
            key={letter}
            disabled={gameOver || won}
          >
            {letter}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={() => window.location.reload()}>
        Reiniciar juego
      </button>
    </div>
  );
}
export default App;
