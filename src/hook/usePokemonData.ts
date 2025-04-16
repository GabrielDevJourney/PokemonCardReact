import { useState, useEffect } from 'react';
import { PokemonDataProps } from '../types/types';
import { formatedPokemonData } from '../utils/formatFetchData/formatFetchData';
import { POKEMON_BASE_INFO_URL, POKEMON_SPECIES_INFO_URL } from '../constants/pokemons';

export const usePokemonData = (selectedPokemon: string) => {
    const [pokemonData, setPokemonData] = useState<PokemonDataProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchPokemonResponse = async (url: string) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`api resquest failed with status ${response.status}`);
        }
        return response.json();
    };

    useEffect(() => {
        //reset error bo be able to fetch for new pokemon
        setError(false);
        const fetchPokemonData = async () => {
            setIsLoading(true);
            try {
                const [pokemonResponse, speciesResponse] = await Promise.all([
                    fetchPokemonResponse(`${POKEMON_BASE_INFO_URL}${selectedPokemon}`),
                    fetchPokemonResponse(`${POKEMON_SPECIES_INFO_URL}${selectedPokemon}`),
                ]);

                const formattedData = formatedPokemonData({ pokemonResponse, speciesResponse });

                setPokemonData(formattedData);
            } catch (error) {
                console.log('Error fetching data', error);
                setPokemonData(null);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPokemonData();
    }, [selectedPokemon]);

    return {
        pokemonData,
        isLoading,
        error,
    };
};
