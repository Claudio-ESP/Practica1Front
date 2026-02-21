import { Character } from "./CharacterCard";
import type { CharacterT } from "../../types";

export const CharacterList = ({ characters }: { characters: CharacterT[] }) => {
  return (
    <div className="list-grid">
      {characters.map((c, index) => (
        <Character key={c.url || index} character={c} />
      ))}
    </div>
  );
};