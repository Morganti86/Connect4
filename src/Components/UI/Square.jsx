export function Square({ children, isTurn, updateBoard, index }) {
  const className = `square ${isTurn ? "is-turn" : ""}`;
  return <div className={className}>{children}</div>;
};
