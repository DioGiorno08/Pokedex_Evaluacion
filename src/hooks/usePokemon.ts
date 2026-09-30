import { useMemo } from "react";
import { Pokemon } from "../types";

const POKEMON: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["Planta", "Veneno"],
    height: 7,
    weight: 69,
    ability: "Espesura",
  },
  {
    id: 4,
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    types: ["Fuego"],
    height: 6,
    weight: 85,
    ability: "Mar llamas",
  },
  {
    id: 7,
    name: "Squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    types: ["Agua"],
    height: 5,
    weight: 90,
    ability: "Torrente",
  },
  {
    id: 25,
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    types: ["Eléctrico"],
    height: 4,
    weight: 60,
    ability: "Electricidad estática",
  },
  {
    id: 39,
    name: "Jigglypuff",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    types: ["Normal", "Hada"],
    height: 5,
    weight: 55,
    ability: "Gran encanto",
  },
  {
    id: 52,
    name: "Meowth",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    types: ["Normal"],
    height: 4,
    weight: 42,
    ability: "Recogida",
  },
  {
    id: 94,
    name: "Gengar",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    types: ["Fantasma", "Veneno"],
    height: 15,
    weight: 405,
    ability: "Cuerpo maldito",
  },
  {
    id: 133,
    name: "Eevee",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    types: ["Normal"],
    height: 3,
    weight: 65,
    ability: "Fuga",
  },
];

export function usePokemon(query: string) {
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return POKEMON;
    return POKEMON.filter((item) => item.name.toLowerCase().includes(value));
  }, [query]);

  return {
    pokemon: filtered,
    loading: false,
    error: "",
    total: filtered.length,
    refresh: () => undefined,
  };
}
