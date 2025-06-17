import { renderHook, waitFor } from '@testing-library/react';
import { usePokemonData } from './usePokemonData';
import { formatedPokemonData } from '../utils/formatData/formatPokemonData';
import { PokemonResponse, PokemonSpeciesResponse } from '../types/types';
import { POKEMON_BASE_INFO_URL, POKEMON_SPECIES_INFO_URL } from '../constants/pokemons';

jest.mock('../utils/formatData/formatPokemonData');
globalThis.fetch = jest.fn();

describe('usePokemonData', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return initial state', () => {
        const { result } = renderHook(() => usePokemonData('Mewtwo'));

        expect(result.current.pokemonData).toBe(null);
        expect(result.current.isLoading).toBe(true);
        expect(result.current.error).toBe(false);
    });

    it('should fetch and return formated data', async () => {
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
        const mockFormattedData = {
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
        };

        (globalThis.fetch as jest.Mock)
            .mockResolvedValueOnce({
                ok: true,
                json: async () => mockPokemonResponse,
            })
            .mockResolvedValueOnce({
                ok: true,
                json: async () => mockPokemonSpeciesResponse,
            });

        (formatedPokemonData as jest.Mock).mockReturnValue(mockFormattedData);

        const { result } = renderHook(() => usePokemonData('Mewtwo'));

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.pokemonData).toEqual(mockFormattedData);
        expect(result.current.error).toBe(false);

        expect(globalThis.fetch).toHaveBeenCalledTimes(2);
        expect(globalThis.fetch).toHaveBeenCalledWith(`${POKEMON_BASE_INFO_URL}Mewtwo`);
        expect(globalThis.fetch).toHaveBeenCalledWith(`${POKEMON_SPECIES_INFO_URL}Mewtwo`);
    });
});
