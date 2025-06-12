import { useState } from 'react';
import PokemonCardView from './PokemonCardView';
import { PokemonDataProps } from '../../types/pokemonDataProps';

export const PokemonCardContainer = (pokemonData: PokemonDataProps) => {
    const [showExtraInfo, setShowExtraInfo] = useState(false);
    const toggleExtraInfo = () => setShowExtraInfo((prev) => !prev)
    return (
        <PokemonCardView {...pokemonData} showExtraInfo={showExtraInfo} toggleExtraInfo= {toggleExtraInfo}></PokemonCardView>
    )
};
