import { TURNS } from "../../Constants";
export function ButtonIntro({ children, isTurn, index, handleClick }) {
  const color = isTurn === TURNS.X ? "is-blue" : "is-white";
  const className = `introBall ${isTurn ? color : ""}`;
  return (
    <button
      key={index}
      className={className}
      value={index}
      onClick={handleClick}>
      {children}
    </button>
  );
};
