import { useState } from 'react';

const colorClasses = {
    black: 'bg-gray-900',
    blue: 'bg-blue-500',
    brown: 'bg-amber-500',
    gray: 'bg-gray-500',
    green: 'bg-green-500',
    pink: 'bg-pink-500',
    purple: 'bg-purple-500',
    red: 'bg-red-400',
    white: 'bg-stone-200',
    yellow: 'bg-yellow-500',
};

export const PokemonSelector = ({ onSelectedPokemon, currentPokemon, color }) => {
    const [isOpen, setIsDropdownOpen] = useState(false);
    const backgroundColor = colorClasses[color.toLowerCase()];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isOpen);
    };

    const handleSelect = pokemon => {
        const formatedName = pokemon.charAt(0).toUpperCase() + pokemon.slice(1).toLowerCase();
        onSelectedPokemon(formatedName);
        //will close the dropdown
        setIsDropdownOpen(false);
    };

    const pokemonList = [
        'Bulbasaur',
        'Gengar',
        'Lucario',
        'Porygon',
        'Salamence',
        'Chandelure',
        'Mewtwo',
        'Alakazam',
        'Charizard',
        'Flareon',
    ];

    return (
        <div>
            <div
                className={`${backgroundColor} relative rounded-2xl w-[500px] h-[134px] flex flex-col items-center justify-center mb-4`}
            >
                <div className="absolute w-full h-full opacity-10"></div>
                <h1 className="mb-4 text-4xl text-teal-50">Pokémon</h1>
                <div className="relative flex justify-center w-[80%] rounded-2xl">
                    <div className="absolute w-full h-full pointer-events-none bg-stone-50 opacity-20 rounded-2xl"></div>
                    <button
                        className="w-full cursor-pointer h-[40px] text-2xl rounded-2xl appearance-none border border-stone-50 text-teal-50"
                        onClick={toggleDropdown}
                    >
                        {currentPokemon}
                    </button>
                    {isOpen && (
                        <div
                            className={` ${backgroundColor} rounded-2xl border-t border-t-stone-50 top-[120%] absolute h-auto w-full  flex-col items-center justify-center z-50`}
                        >
                            <div className="absolute w-full h-full pointer-events-none opacity-20 bg-stone-50 rounded-2xl"></div>
                            {pokemonList.map(pokemon => (
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
        </div>
    );
};

const PokemonOption = ({ value, onClick }) => {
    return (
        <button
            className="w-full cursor-pointer h-[30px] appearance-none border-none mt-2 bg-transparent text-[20px] text-stone-50"
            value={value}
            onClick={() => onClick(value)}
        >
            {value}
        </button>
    );
};
