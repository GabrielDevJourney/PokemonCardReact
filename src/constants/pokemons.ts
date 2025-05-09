export const POKEMON_BASE_INFO_URL = 'https://pokeapi.co/api/v2/pokemon/';
export const POKEMON_SPECIES_INFO_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
export const DEFAULT_POKEMON = 'Mewtwo';
export const POKEMON_LIST = [
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
    'abc',
];

export interface ColorStyle {
    background: string;
    text: string;
}

export type ColorKey = 'black' | 'blue' | 'brown' | 'gray' | 'green' | 'pink' | 'purple' | 'red' | 'white' | 'yellow';
export const COLORS: Record<ColorKey,ColorStyle> = {
    black: {
        background: 'bg-gray-900',
        text: 'text-amber-400',
    },
    blue: {
        background: 'bg-blue-600',
        text: 'text-lime-300',
    },
    brown: {
        background: 'bg-amber-950',
        text: 'text-yellow-200',
    },
    gray: {
        background: 'bg-gray-500',
        text: 'text-indigo-100',
    },
    green: {
        background: 'bg-green-400',
        text: 'text-sky-800',
    },
    pink: {
        background: 'bg-pink-500',
        text: 'text-stone-100',
    },
    purple: {
        background: 'bg-purple-600',
        text: 'text-cyan-200',
    },
    red: {
        background: 'bg-red-600',
        text: 'text-yellow-200',
    },
    white: {
        background: 'bg-stone-200',
        text: 'text-indigo-800',
    },
    yellow: {
        background: 'bg-yellow-500',
        text: 'text-amber-900',
    },
};
