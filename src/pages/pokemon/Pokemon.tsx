/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonCard } from "../../components/pokemon/PokemonCard";
import axios from "axios";

export const PokemonLoader = async () => {
  try {
    const baseUrl: string = "https://pokeapi.co/api/v2";
    const res: any = await axios.get(`${baseUrl}/pokemon`);
    console.log(res.data);
    return { pokemonData: res.data };
  } catch (err) {
    console.log("We Found Errors:", err);
  }
};

export const PokemonPage = () => {
  return <PokemonCard />;
};
