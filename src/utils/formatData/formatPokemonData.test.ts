import { PokemonResponse, PokemonSpeciesResponse } from '@/types/types';
import { formatedPokemonData } from './formatPokemonData';

describe('format pokemon data utility method', () => {
    it('should format raw response data to the proper usage needed props structure', () => {
        const mockPokemonResponse: PokemonResponse = {
            name: 'ola',
            height: 20,
            weight: 122,
            abilities: [
                {
                    ability: {
                        name: 'sayan',
                    },
                    is_hidden: true,
                },
            ],
            stats: [
                { base_stat: 78, stat: { name: 'hp' } },
                { base_stat: 100, stat: { name: 'attack' } },
                { base_stat: 80, stat: { name: 'speed' } },
            ],
            types: [{ type: { name: 'fire' } }],
            sprites: {
                other: {
                    'official-artwork': {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
                    },
                },
            },
        };
        const mockPokemonSpeciesResponse: PokemonSpeciesResponse = {
            color: { name: 'lightred' },
            habitat: { name: 'hells paridise' },
            capture_rate: 22,
            base_happiness: 100,
        };

        const result = formatedPokemonData({
            pokemonResponse: mockPokemonResponse,
            speciesResponse: mockPokemonSpeciesResponse,
        });

        expect(result).toEqual({
            name: 'Ola',
            type: 'Fire',
            color: 'lightred',
            imageUrl:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
            health: 78,
            mainAbility: 'Sayan',
            habitat: 'Hells paridise',
            power: 258,
            captureRate: '22/255',
            friendliness: '100/255',
            height: '2m',
            weight: '12.2kg',
            hiddenAbility: 'Sayan',
            speed: 80,
            showExtraInfo: true,
        });
    });
});
