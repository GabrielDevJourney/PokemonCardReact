import { PokemonResponse } from './types';
import { PokemonSpeciesResponse } from './types';
import { PokemonDataProps } from '../../types/pokemonDataProps';
interface FormatedPokemonDataProps {
    pokemonResponse: PokemonResponse;
    speciesResponse: PokemonSpeciesResponse;
}

const formatData = (data: string): string => {
    return data.charAt(0).toUpperCase() + data.slice(1);
};

export const formatedPokemonData = (data: FormatedPokemonDataProps): PokemonDataProps => {
    const name = data.pokemonResponse.name;
    const type = data.pokemonResponse.types[0].type.name;
    const color = data.speciesResponse.color.name;
    const imageUrl = data.pokemonResponse.sprites.other['official-artwork'].front_default;
    const health = data.pokemonResponse.stats.find(stat => stat.stat.name === 'hp')?.base_stat ?? 0;
    const mainAbility = data.pokemonResponse.abilities[0].ability.name;
    const habitat = data.speciesResponse.habitat ? data.speciesResponse.habitat.name : 'Unknown';
    const power = data.pokemonResponse.stats.reduce((total, stat) => total + stat.base_stat, 0);
    const captureRate = `${data.speciesResponse.capture_rate}/255`;
    const friendliness = `${data.speciesResponse.base_happiness}/255`;
    const height = `${data.pokemonResponse.height / 10}m`;
    const weight = `${data.pokemonResponse.weight / 10}kg`;
    const hiddenAbility = data.pokemonResponse.abilities.find(ability => ability.is_hidden)?.ability
        .name;
    const speed = data.pokemonResponse.stats.find(stat => stat.stat.name === 'speed')?.base_stat;
    const showExtraInfo = true;

    return {
        name: formatData(name),
        type: formatData(type),
        color,
        imageUrl,
        health,
        mainAbility: formatData(mainAbility),
        habitat: formatData(habitat),
        power,
        captureRate,
        friendliness,
        height,
        weight,
        hiddenAbility: hiddenAbility ? formatData(hiddenAbility) : 'None',
        speed,
        showExtraInfo,
    };
};
