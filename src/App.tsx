import { useEffect, useState } from 'react';
import { PokemonCard } from './components/PokemonCard';
import { PokemonSelector } from './components/PokemonSelector';
import { PokemonNotFoundAlert } from './components/PokemonNotFound';
import { SkeletonPokemonCard } from './components/SkeletonPokemonCard';
import { DEFAULT_POKEMON } from './constants/pokemons';
import { usePokemonData } from './hook/usePokemonData';

export const App = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(DEFAULT_POKEMON);
    const [showSkeleton, setShowSkeleton] = useState(true);
    const { pokemonData, isLoading, error } = usePokemonData(selectedPokemon);

    useEffect(() => {
        setShowSkeleton(true);
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [selectedPokemon]);

    const handlePokemonSelect = (pokemon: string) => {
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
        <div className="mt-25 flex w-full flex-col items-center">
            {showDropdown()}
            <SkeletonPokemonCard />
        </div>
    ) : error ? (
        <div className="mt-25 flex w-full flex-col items-center">
            {showDropdown()}
            <PokemonNotFoundAlert name={selectedPokemon}></PokemonNotFoundAlert>
        </div>
    ) : pokemonData ? (
        <div className="mt-25 flex w-full flex-col items-center">
            {showDropdown()}
            <PokemonCard {...pokemonData}></PokemonCard>
        </div>
    ) : (
        <div>something went wrong</div>
    );
};
