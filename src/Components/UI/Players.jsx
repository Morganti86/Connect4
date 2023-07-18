import { Score } from "./Score";
import { TURNS } from "../../Constants";
export function Players({ turn, p1Score, p2Score }) {
  return (
    <section className="turn">
      <Score isTurn={turn === TURNS.X}>
        PLAYER {TURNS.X}: {p1Score}
      </Score>
      <Score isTurn={turn === TURNS.O}>
        PLAYER {TURNS.O}: {p2Score}
      </Score>
    </section>
  );
}