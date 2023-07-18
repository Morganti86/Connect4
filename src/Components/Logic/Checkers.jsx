import { WINNER_COMBOS } from "../../Constants";
export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c, d] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c] &&
      boardToCheck[c] === boardToCheck[d]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null);
};
