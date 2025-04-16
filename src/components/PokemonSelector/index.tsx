import { useState } from 'react';
import { PokemonOption } from '../PokemonOption';
import { COLORS, POKEMON_LIST, ColorKey } from '../../constants/pokemons';

interface PokemonSelectorProps {
    onSelectedPokemon: (pokemon: string) => void;
    currentPokemon: string;
    color: string;
}
export const PokemonSelector = ({ onSelectedPokemon, currentPokemon, color }: PokemonSelectorProps) => {
    const [isOpen, setIsDropdownOpen] = useState(false);
    const colorKey =
        (color.toLowerCase() as ColorKey) in COLORS ? (color.toLowerCase() as ColorKey) : 'purple';
    const colors = COLORS[colorKey];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isOpen);
    };

    const handleSelect = (pokemon: string) => {
        const formatedName = pokemon.charAt(0).toUpperCase() + pokemon.slice(1).toLowerCase();
        onSelectedPokemon(formatedName);
        //will close the dropdown
        setIsDropdownOpen(false);
    };

    return (
        <>
            <div
                className={`${colors.background} relative mb-4 flex h-[134px] w-[500px] flex-col items-center justify-center rounded-2xl`}
            >
                <div className="absolute h-full w-full opacity-10"></div>
                <h1 className="mb-4 text-4xl text-stone-50">Pokémon</h1>
                <div className="relative flex w-[80%] justify-center rounded-2xl">
                    <div className="pointer-events-none absolute h-full w-full rounded-2xl bg-stone-50 opacity-20"></div>
                    <button
                        className="h-[40px] w-full cursor-pointer appearance-none rounded-2xl border border-stone-50 text-2xl text-teal-50"
                        onClick={toggleDropdown}
                    >
                        {currentPokemon}
                    </button>
                    {isOpen && (
                        <div
                            className={` ${colors.background} absolute top-[120%] z-50 h-auto w-full flex-col items-center justify-center rounded-2xl border-t border-t-stone-50`}
                        >
                            <div className="pointer-events-none absolute h-full w-full rounded-2xl bg-stone-50 opacity-20"></div>
                            {POKEMON_LIST.map(pokemon => (
                                <PokemonOption
                                    key={pokemon}
                                    value={pokemon}
                                    onClick={handleSelect}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

