import { useEffect, useState } from 'react';
import { PokemonCard } from './components/pokemonCard';
import { PokemonSelector } from './components/pokemonSelector';
import { PokemonNotFoundAlert } from './components/pokemonNotFound';
import { usePokemonData } from './hook/usePokemonData';
import { DEFAULT_POKEMON } from './constants/pokemons';
import { SkeletonPokemonCard } from './components/skeletonPokemonCard';

export const App = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(DEFAULT_POKEMON);
    const [showSkeleton, setShowSkeleton] = useState(true);
    const { pokemonData, isLoading, error } = usePokemonData(selectedPokemon);

    useEffect(() => {
        setShowSkeleton(true);
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [selectedPokemon]);

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

    return isLoading || showSkeleton ? (
        <div className="flex flex-col items-center w-full mt-25">
            {showDropdown()}
            <SkeletonPokemonCard />
        </div>
    ) : error ? (
        <div className="flex flex-col items-center w-full mt-25">
            <PokemonNotFoundAlert name={selectedPokemon}></PokemonNotFoundAlert>
            {showDropdown()}
        </div>
    ) : pokemonData ? (
        <div className="flex flex-col items-center w-full mt-25">
            {showDropdown()}
            <PokemonCard pokemonData={pokemonData}></PokemonCard>
        </div>
    ) : (
        <div>something went wrong</div>
    );
};
