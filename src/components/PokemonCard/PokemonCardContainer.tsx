import { useDispatch, useSelector } from 'react-redux';
import { selectShowExtraInfo, toggle } from '../../store/slices/extraInfoSlice';
import PokemonCardView from './PokemonCardView';
import { PokemonDataProps } from '../../types/pokemonDataProps';

export const PokemonCardContainer = (pokemonData: PokemonDataProps) => {
    const dispatch = useDispatch();
    const showExtraInfo = useSelector(selectShowExtraInfo);

    const toggleExtraInfo = () => dispatch(toggle());

    return (
        <PokemonCardView
            {...pokemonData}
            showExtraInfo={showExtraInfo}
            toggleExtraInfo={toggleExtraInfo}
        />
    );
};
