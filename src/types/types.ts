export interface PokemonDataProps {
    name: string;
    type: string;
    color: string;
    imageUrl: string;
    health: number;
    mainAbility: string;
    habitat: string;
    power: number;
    captureRate: string;
    friendliness: string;
    height: string;
    weight: string;
    hiddenAbility: string;
    speed?: number;
    showExtraInfo: boolean;
}
