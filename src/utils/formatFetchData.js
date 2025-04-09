export const formatedPokemonData = (data) => {
    return {
        name: data.pokemonResponse.name.charAt(0).toUpperCase() + data.pokemonResponse.name.slice(1),
        type:
            data.pokemonResponse.types[0].type.name.charAt(0).toUpperCase() +
            data.pokemonResponse.types[0].type.name.slice(1),
        color: data.speciesResponse.color.name,
        imageUrl: data.pokemonResponse.sprites.other['official-artwork'].front_default,
        health: data.pokemonResponse.stats.find(stat => stat.stat.name === 'hp').base_stat,
        mainAbility:
            data.pokemonResponse.abilities[0].ability.name.charAt(0).toUpperCase() +
            data.pokemonResponse.abilities[0].ability.name.slice(1),
        habitat: data.speciesResponse.habitat
            ? data.speciesResponse.habitat.name.charAt(0).toUpperCase() +
              data.speciesResponse.habitat.name.slice(1)
            : 'Unknown',
        power: data.pokemonResponse.stats.reduce((total, stat) => total + stat.base_stat, 0),
        captureRate: `${data.speciesResponse.capture_rate}/255`,
        friendliness: `${data.speciesResponse.base_happiness}/255`,
        height: `${data.pokemonResponse.height / 10}m`,
        weight: `${data.pokemonResponse.weight / 10}kg`,
        hiddenAbility:
            data.pokemonResponse.abilities
                .find(ability => ability.is_hidden)
                ?.ability.name.charAt(0)
                .toUpperCase() +
                data.pokemonResponse.abilities
                    .find(ability => ability.is_hidden)
                    ?.ability.name.slice(1) || 'None',
        speed: data.pokemonResponse.stats.find(stat => stat.stat.name === 'speed').base_stat,
        showExtraInfo: true,
    };
}