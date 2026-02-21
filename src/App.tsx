import { useEffect, useState } from "react";
import { api } from "./api/api";
import { CharacterList } from "./components/Character/CharacterList";
import { Loader } from "./components/Character/Loader";
import { ErrorMessage } from "./components/Character/ErrorMessage";
import type { CharacterT } from "./types";
import "./App.css";

type ApiResponse = {
  next: string | null;
  results: CharacterT[];
};

const App = () => {
  const [characters, setCharacters] = useState<CharacterT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>("/people/");

  const fetchCharacters = async (url: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get<ApiResponse>(url);

      setCharacters((prev) => [...prev, ...response.data.results]);

      const nextUrl = response.data.next;
      if (nextUrl) {
        const relativeUrl = nextUrl.replace("https://swapi.dev/api", "");
        setNextPage(relativeUrl);
      } else {
        setNextPage(null);
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
      setError("Error al obtener los datos de la API. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Iniciando carga de personajes...");
    fetchCharacters("/people/");
  }, []);

  return (
    <div className="container">
      <h1>Star Wars Explorer</h1>

      {error && <ErrorMessage message={error} />}

      <CharacterList characters={characters} />

      {loading && <Loader />}

      {nextPage && !loading && (
        <button onClick={() => fetchCharacters(nextPage)} className="load-more-btn">
          Siguiente Página
        </button>
      )}
    </div>
  );
};

export default App;