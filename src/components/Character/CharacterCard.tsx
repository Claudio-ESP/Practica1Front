import type { CharacterT } from "../../types";
import "./style.css";

export const Character = ({ character }: { character: CharacterT }) => {
  return (
    <div className="mainContainer">
      <div className="characterContainer">
        <h2>{character.name}</h2>

        <p>Altura: {character.height}</p>
        <p>Peso: {character.mass}</p>
        <p>Color pelo: {character.hair_color}</p>
        <p>Color piel: {character.skin_color}</p>
        <p>Color ojos: {character.eye_color}</p>
        <p>Año nacimiento: {character.birth_year}</p>
        <p>Género: {character.gender}</p>

        <p>Películas: {character.films.length}</p>
        <p>Especies: {character.species.length}</p>
        <p>Vehículos: {character.vehicles.length}</p>
        <p>Naves: {character.starships.length}</p>

        <p>Creado: {new Date(character.created).toLocaleDateString()}</p>
        <p>Editado: {new Date(character.edited).toLocaleDateString()}</p>

        <p>URL: {character.url}</p>
      </div>
    </div>
  );
};