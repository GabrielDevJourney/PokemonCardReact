import { PokemonCard } from './components/pokemonCard';
import { PokemonSelector } from './components/pokemonSelector';

export const App = () => {
    return (
        <div className="pokemonsCardsContainer">
            <PokemonSelector></PokemonSelector>
            <PokemonCard
                name="Mewtwo"
                type="Psychic"
                imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
                health="106"
                mainAbility="Pressure"
                habitat="Rare"
                power="680"
                captureRate="3/255"
                friendliness="0/255"
                height="2m"
                weight="122kg"
                hiddenAbility="Unnerve"
                speed="130"
                showExtraInfo={true} // Set to true to display extra info section
            />
            <PokemonCard
                name="Mewtwo"
                type="Ground"
                imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
                health="106"
                mainAbility="Pressure"
                habitat="Ground"
                power="680"
                captureRate="3/255"
                friendliness="0/255"
                height="2m"
                weight="122kg"
                hiddenAbility="Unnerve"
                speed="130"
                showExtraInfo={true}
            ></PokemonCard>
        </div>
    );
};
