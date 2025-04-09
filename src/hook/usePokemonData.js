import { useState, useEffect } from 'react';
import { formatedPokemonData } from '../utils/formatFetchData';

export const usePokemonData = selectedPokemon => {
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchPokemonResponse = async url => {
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
                    fetchPokemonResponse(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`),
                    fetchPokemonResponse(
                        `https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`,
                    ),
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
