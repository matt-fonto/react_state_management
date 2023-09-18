import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

export type Pokemon = {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
};

function usePokemonSource() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function handleFetch() {
      try {
        const response = await fetch("/pokemon.json");
        const data = await response.json();
        setPokemons(data);
      } catch (e) {
        console.log(e);
      }
    }

    handleFetch();
  }, []);

  return { pokemons };
}

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  ({} as unknown) as ReturnType<typeof usePokemonSource>
);

export function usePokemon() {
  return useContext(PokemonContext)!;
}

export function PokemonProvider({ children }: { children: ReactNode }) {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
}
