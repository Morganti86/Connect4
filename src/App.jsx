import { useState } from "react";
import { Title } from "./Components/UI/Title";
import { Players } from "./Components/UI/Players";
import { Board } from "./Components/UI/Board";
import { IntroBall } from "./Components/UI/IntroBall";
import { TURNS } from "./Constants";
import { WinnerModal } from "./Components/UI/WinnerModal";
import { ButtonReload } from "./Components/UI/ButtonReload";
import { checkWinner, checkEndGame } from "./Components/Logic/Checkers";
import { Footer } from "./Components/UI/Footer";
import confetti from "canvas-confetti";

function App() {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);

  const introBall = Array(7).fill(null);

  const handleClick = (event) => {
    updateBoard(event.target.value);
  };

  const updateBoard = (index) => {
    var auxIndex = 42 - 7 + parseInt(index);

    while (board[auxIndex] !== null && auxIndex >= 0) {
      auxIndex -= 7;
    }

    if (auxIndex >= 0) {
      //Change turn
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);

      //updateBoard;
      const newBoard = [...board];
      newBoard[auxIndex] = turn;
      setBoard(newBoard);

      //Check winner && end game
      const newWinner = checkWinner(newBoard);
      if (newWinner) {
        confetti({
          particleCount: 250,
        });
        setWinner(newWinner);
        // const updateScore =
          turn === TURNS.X
            ? setP1Score((prev) => prev + 1)
            : setP2Score((prev) => prev + 1);
      } else if (checkEndGame(newBoard)) {
        setWinner(false);
      }
    }
  };

  function nextGame() {
    setBoard(Array(42).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  function resetGame() {
    setBoard(Array(42).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    setP1Score(0);
    setP2Score(0);
  }

  return (
    <main className="board">
      <Title />
      <Players turn={turn} p1Score={p1Score} p2Score={p2Score}/>
      <IntroBall introBall={introBall} turn={turn} handleClick={handleClick}/>
      <Board board={board} updateBoard={updateBoard} />
      <ButtonReload handleClick={resetGame}>RESTART GAME</ButtonReload>
      <WinnerModal winner={winner} nextGame={nextGame} />
      <Footer />
    </main>
  );
}

export default App;
