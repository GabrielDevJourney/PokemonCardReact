//todo make a file where i have both background colors and text color so it becomes easier to have better ui coloring for each color coming from pokemon i can have both backgriund color corresponding has now but also a color for text : "bg-stone-50" or other based on bg

import { useState, useEffect } from 'react';
import { PokemonCard } from './components/pokemonCard';
import { PokemonSelector } from './components/pokemonSelector';

export const App = () => {
    const DEFAULT_POKEMON = 'Mewtwo';
    const [selectedPokemon, setSelectedPokemon] = useState(DEFAULT_POKEMON);
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonData = async () => {
            setIsLoading(true);
            try {
                const [pokemonResponse, speciesResponse] = await Promise.all([
                    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`).then(res =>
                        res.json(),
                    ),
                    fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`).then(
                        res => res.json(),
                    ),
                ]);

                const formattedData = {
                    name:
                        pokemonResponse.name.charAt(0).toUpperCase() +
                        pokemonResponse.name.slice(1),
                    type:
                        pokemonResponse.types[0].type.name.charAt(0).toUpperCase() +
                        pokemonResponse.types[0].type.name.slice(1),
                    color: speciesResponse.color.name,
                    imageUrl: pokemonResponse.sprites.other['official-artwork'].front_default,
                    health: pokemonResponse.stats.find(stat => stat.stat.name === 'hp').base_stat,
                    mainAbility:
                        pokemonResponse.abilities[0].ability.name.charAt(0).toUpperCase() +
                        pokemonResponse.abilities[0].ability.name.slice(1),
                    habitat: speciesResponse.habitat
                        ? speciesResponse.habitat.name.charAt(0).toUpperCase() +
                          speciesResponse.habitat.name.slice(1)
                        : 'Unknown',
                    power: pokemonResponse.stats.reduce((total, stat) => total + stat.base_stat, 0),
                    captureRate: `${speciesResponse.capture_rate}/255`,
                    friendliness: `${speciesResponse.base_happiness}/255`,
                    height: `${pokemonResponse.height / 10}m`,
                    weight: `${pokemonResponse.weight / 10}kg`,
                    hiddenAbility:
                        pokemonResponse.abilities
                            .find(ability => ability.is_hidden)
                            ?.ability.name.charAt(0)
                            .toUpperCase() +
                            pokemonResponse.abilities
                                .find(ability => ability.is_hidden)
                                ?.ability.name.slice(1) || 'None',
                    speed: pokemonResponse.stats.find(stat => stat.stat.name === 'speed').base_stat,
                    showExtraInfo: true,
                };

                setPokemonData(formattedData);
            } catch (error) {
                console.log('Error fetching data', error);
                if (selectedPokemon !== DEFAULT_POKEMON) {
                    setSelectedPokemon(DEFAULT_POKEMON);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchPokemonData();
    }, [selectedPokemon]);

    return isLoading || !pokemonData ? (
        <div>Loading Pokemon Data...</div>
    ) : (
        <div>
            <PokemonSelector
                onSelectedPokemon={setSelectedPokemon}
                currentPokemon={selectedPokemon}
                color={pokemonData.color}
            ></PokemonSelector>

            <PokemonCard
                name={pokemonData.name}
                type={pokemonData.type}
                color={pokemonData.color}
                imageUrl={pokemonData.imageUrl}
                health={pokemonData.health}
                mainAbility={pokemonData.mainAbility}
                habitat={pokemonData.habitat}
                power={pokemonData.power}
                captureRate={pokemonData.captureRate}
                friendliness={pokemonData.friendliness}
                height={pokemonData.height}
                weight={pokemonData.weight}
                hiddenAbility={pokemonData.hiddenAbility}
                speed={pokemonData.speed}
                showExtraInfo={pokemonData.showExtraInfo}
            ></PokemonCard>
        </div>
    )
};
