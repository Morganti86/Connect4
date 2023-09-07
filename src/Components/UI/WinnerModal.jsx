import { Square } from "./Square";
import { ButtonReload } from "./ButtonReload";
export function WinnerModal({ winner, nextGame }) {
  if (winner === null) return;
  const winnerText = winner === false ? "DRAW" : "WINNER:";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header>{winner && <Square>{winner}</Square>}</header>
        <footer>
          <ButtonReload handleClick={nextGame}>NEXT MATCH</ButtonReload>
        </footer>
      </div>
    </section>
  );
}
