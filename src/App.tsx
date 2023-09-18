import { usePokemon, PokemonProvider } from "./pokemonApp/store";

const PokemonList = () => {
  const { pokemons } = usePokemon()!;

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <>
      <PokemonProvider>
        <PokemonList />;
      </PokemonProvider>
    </>
  );
}
