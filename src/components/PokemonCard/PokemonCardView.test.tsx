import PokemonCardView from './PokemonCardView';
import { fireEvent, render, screen } from '@testing-library/react';

interface PokemonInfoProps {
    typeOfData: string;
    data: string | number | undefined;
}
const mockedData = {
    name: 'Bulbsaur',
    type: 'Grass',
    color: 'green',
    imageUrl:
        '	https://raw.githubusercontent.com/PokeAPI/sprites/…ster/sprites/pokemon/other/official-artwork/1.png',
    health: 45,
    mainAbility: 'Overgrow',
    habitat: 'Grassland',
    power: 318,
    captureRate: '45/255',
    friendliness: '70/255',
    height: '0.7',
    weight: '6.9',
    hiddenAbility: 'Chlorophyll',
    speed: 50,
};

//FIXME: remove logic to use props instead
jest.mock('../ExtraInfoButton', () => {
    return function MockExtraInfoButton({ setShowExtraInfo }: { setShowExtraInfo: () => void }) {
        return (
            <button data-testid="mock-extra-info" onClick={setShowExtraInfo}>
                Mock Button
            </button>
        );
    };
});

jest.mock('../PokemonInfo', () => {
    return function MockPokemonInfo({ typeOfData, data }: PokemonInfoProps) {
        return (
            <div data-testid="mock-pokemon-info">
                <span data-testid="mock-pokemon-info-type">{typeOfData}</span>
                <span data-testid="mock-pokemon-info-data">{data}</span>
            </div>
        );
    };
});

describe('PokemonCardView component', () => {
    const mockSetShowExtraInfo = jest.fn();

    it('renders basic Pokémon data and handles toggle function', () => {
        render(<PokemonCardView {...mockedData}showExtraInfo={false} toggleExtraInfo={mockSetShowExtraInfo} />);

        expect(screen.getByText('Bulbsaur')).toBeInTheDocument();
        expect(screen.getByText('Grass')).toBeInTheDocument();

        expect(screen.getByAltText('Bulbsaur Pokemon')).toHaveAttribute('src', mockedData.imageUrl);

        // Basic stats
        expect(screen.getByText('Health')).toBeInTheDocument();
        expect(screen.getByText('45')).toBeInTheDocument();
        expect(screen.getByText('Main Ability')).toBeInTheDocument();
        expect(screen.getByText('Overgrow')).toBeInTheDocument();
        expect(screen.getByText('Habitat')).toBeInTheDocument();
        expect(screen.getByText('Grassland')).toBeInTheDocument();
        expect(screen.getByText('Power')).toBeInTheDocument();
        expect(screen.getByText('318')).toBeInTheDocument();
        expect(screen.getByText('Capture Rate')).toBeInTheDocument();
        expect(screen.getByText('45/255')).toBeInTheDocument();
        expect(screen.getByText('Friendliness')).toBeInTheDocument();
        expect(screen.getByText('70/255')).toBeInTheDocument();

        expect(screen.getByTestId('mock-extra-info')).toBeInTheDocument();

        expect(screen.queryByTestId('more-info-container')).not.toBeInTheDocument();
    });

    it('should call toggleExtraInfo when "More Info" button is clicked', () => {
        render(<PokemonCardView {...mockedData} showExtraInfo={true} toggleExtraInfo={mockSetShowExtraInfo} />);

        const button = screen.getByTestId('mock-extra-info');
        fireEvent.click(button);

        expect(mockSetShowExtraInfo).toHaveBeenCalledTimes(1);
    });

    it('renders extra Pokémon data when button click', () => {
        render(
            <PokemonCardView
                {...mockedData}
                showExtraInfo={true}
                toggleExtraInfo={mockSetShowExtraInfo}
            />,
        );

        //extra info
        expect(screen.getByText('Height')).toBeInTheDocument();
        expect(screen.getByText('0.7')).toBeInTheDocument();
        expect(screen.getByText('Weight')).toBeInTheDocument();
        expect(screen.getByText('6.9')).toBeInTheDocument();
        expect(screen.getByText('Hidden Ability')).toBeInTheDocument();
        expect(screen.getByText('Chlorophyll')).toBeInTheDocument();
        expect(screen.getByText('Speed')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
    });
});
