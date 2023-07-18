import { ButtonIntro } from "./ButtonIntro";
export function IntroBall({introBall, handleClick, turn}) {
  return (
    <section className="game">
      {introBall.map((introBall, index) => {
        return (
          <ButtonIntro
            key={index}
            index={index}
            handleClick={handleClick}
            isTurn={turn}>
            ⇩
          </ButtonIntro>
        );
      })}
    </section>
  );
}
