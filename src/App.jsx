import { useState} from 'react';
import { PokemonCard } from './components/pokemonCard';
import { PokemonSelector } from './components/pokemonSelector';
import { PokemonNotFoundAlert } from './components/pokemonNotFound';
import { usePokemonData } from './hook/usePokemonData';

export const App = () => {
    const DEFAULT_POKEMON = 'Mewtwo';
    const [selectedPokemon, setSelectedPokemon] = useState(DEFAULT_POKEMON);

    const { pokemonData, isLoading, error } = usePokemonData(selectedPokemon);

    const handlePokemonSelect = pokemon => {
        setSelectedPokemon(pokemon);
    };

    const showDropdown = () => {
        return (
            <PokemonSelector
                onSelectedPokemon={handlePokemonSelect}
                currentPokemon={selectedPokemon}
                color={error ? 'purple' : pokemonData?.color || 'purple'}
            ></PokemonSelector>
        );
    };

    return isLoading ? (
        <div>Loading Pokemon Data...</div>
    ) : error ? (
        <div className="flex flex-col items-center">
            <PokemonNotFoundAlert name={selectedPokemon}></PokemonNotFoundAlert>
            {showDropdown()}
        </div>
    ) : pokemonData ? (
        <div className="flex flex-col items-center">
            <div className="h-30 w-100"></div>
            {showDropdown()}
            <PokemonCard pokemonData={pokemonData}
            ></PokemonCard>
        </div>
    ) : (
        <div>something went wrong</div>
    );
};
