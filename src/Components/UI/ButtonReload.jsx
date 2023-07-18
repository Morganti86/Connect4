export function ButtonReload({ children, handleClick }) {
  const className = "buttonReload";
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
