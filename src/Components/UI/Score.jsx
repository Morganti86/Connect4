export function Score({ children, isTurn }) {
  const className = `${isTurn ? "is-turn" : ""}`;
  return <h3 className={className}>{children}</h3>;
}
