import { useState } from 'react';

export const PokemonSelector = () => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('MewTwo');

    const toggleDropdown = () => {
        setOpen(!open);
    };
    const handleSelect = pokemon => {
        const formatedName = pokemon.charAt(0).toUpperCase() + pokemon.slice(1).toLowerCase();
        setSelectedOption(formatedName);
        //will close the dropdown
        setOpen(false);
    };

    const pokemonList = [
        'bulbasaur',
        'gengar',
        'lucario',
        'porygon',
        'salamence',
        'chandelure',
        'mewtwo',
        'alakazam',
        'charizard',
        'flareon',
    ];

    return (
        <div>
            <div className="bg-cyan-600 relative rounded-2xl w-[500px] h-[134px] flex flex-col items-center justify-center mb-4">
                <div className="absolute w-full h-full bg-stone-50 opacity-20"></div>
                <h1 className="mb-4 text-4xl text-blue-950">Pokémon</h1>
                <div className="relative flex justify-center w-[80%] rounded-2xl">
                    <div className="absolute w-full h-full pointer-events-none bg-stone-50 opacity-20 rounded-2xl"></div>
                    <button
                        className="w-full cursor-pointer h-[40px] text-2xl rounded-2xl appearance-none border border-stone-50 text-blue-950"
                        onClick={toggleDropdown}
                    >
                        {selectedOption}
                    </button>
                    <div
                        className={`rounded-2xl border-t border-t-stone-50 top-[120%] absolute h-auto w-full ${
                            open ? 'flex' : 'hidden'
                        } flex-col items-center justify-center z-50`}
                    >
                        <div className="absolute w-full h-full pointer-events-none opacity-40 bg-stone-50 rounded-2xl"></div>
                        {pokemonList.map(pokemon => (
                            <PokemonOption key={pokemon} value={pokemon} onClick={handleSelect} />
                        ))}
                    </div>
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
