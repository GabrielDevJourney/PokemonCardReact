interface PokemonAbility {
    ability: {
        name: string;
    };
    is_hidden: boolean;
}
interface PokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}
interface PokemonType {
    type: {
        name: string;
    };
}
interface PokemonStripes {
    other: {
        'official-artwork': {
            front_default: string;
        };
    };
}

export interface PokemonResponse {
    name: string;
    height: number;
    weight: number;
    abilities: PokemonAbility[];
    stats: PokemonStat[];
    types: PokemonType[];
    sprites: PokemonStripes;
}
export interface PokemonSpeciesResponse {
    color: {
        name: string;
    };
    habitat: {
        name: string;
    };
    capture_rate: number;
    base_happiness: number;
}
