import ExtraInfoButton from '../ExtraInfoButton';
import { COLORS, ColorKey } from '../../constants/pokemons';
import PokemonInfo from '../PokemonInfo';
import { PokemonDataProps } from '../../types/pokemonDataProps';

interface PokemonCardViewProps extends PokemonDataProps {
    toggleExtraInfo: () => void;
}

const PokemonCardView = ({
    name,
    type,
    color,
    imageUrl,
    health,
    mainAbility,
    habitat,
    power,
    captureRate,
    friendliness,
    height,
    weight,
    hiddenAbility,
    speed,
    showExtraInfo,
    toggleExtraInfo,
}: PokemonCardViewProps) => {
    const colorKey =
        (color.toLowerCase() as ColorKey) in COLORS ? (color.toLowerCase() as ColorKey) : 'purple';
    const colors = COLORS[colorKey];

    return (
        <>
            {/*CARD CONTAINER*/}
            <div
                className={`relative w-[500px] ${
                    showExtraInfo ? 'h-[550px]' : 'h-[470px]'
                } flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ease-in-out ${
                    colors.background
                }`}
                data-testid="card-container"
            >
                {/*CARD OPACITY CONTAINER */}
                <div
                    className="pointer-events-none absolute h-full w-full rounded-2xl opacity-10"
                ></div>

                {/*IMAGE CONTAINER */}
                <div
                    className="relative mb-4 flex flex-col items-center justify-center"
                >
                    <img
                        width={200}
                        height={200}
                        className="h-[200px] w-[200px]"
                        src={imageUrl || `/api/placeholder/200/200`}
                        alt={`${name} Pokemon`}
                        data-testid="image"
                    />
                    {/* BADGE TYPE CONTAINER */}
                    <div
                        data-testid="badge-type"
                        className="flex h-[40px] w-[200px] items-center justify-center rounded-lg bg-stone-50 text-2xl font-medium text-gray-800"
                    >
                        <span data-testid="badge-type-data">{type}</span>
                    </div>
                </div>

                <div className="mb-4 flex flex-row justify-between p-[16px]">
                    <h2
                        data-testid="pokemon-name-data"
                        className={`pl-[16px] text-3xl ${colors.text} font-bold`}
                    >
                        {name}
                    </h2>
                    {/* BUTTON EXTEND INFO */}
                    <ExtraInfoButton
                        colors={colors}
                        showExtraInfo={showExtraInfo}
                        setShowExtraInfo={toggleExtraInfo}
                    ></ExtraInfoButton>
                </div>

                {/* VISIBLE INFO CONTAINER */}
                <div className={`mb-6 grid grid-cols-2 grid-rows-3 gap-2 px-4 ${colors.text}`}>
                    {/* Health container */}
                    <PokemonInfo typeOfData={'Health'} data={health}></PokemonInfo>
                    <PokemonInfo typeOfData={'Main Ability'} data={mainAbility}></PokemonInfo>
                    <PokemonInfo typeOfData={'Habitat'} data={habitat}></PokemonInfo>
                    <PokemonInfo typeOfData={'Power'} data={power}></PokemonInfo>
                    <PokemonInfo typeOfData={'Capture Rate'} data={captureRate}></PokemonInfo>
                    <PokemonInfo typeOfData={'Friendliness'} data={friendliness}></PokemonInfo>
                </div>

                {/* HIDDEN INFO CONTAINER */}
                {showExtraInfo && (
                    <div
                        data-testid="more-info-container"
                        className={`grid h-20 grid-cols-2 grid-rows-2 gap-2 border-t border-teal-50 px-4 pt-4 transition-all duration-300 ease-in-out ${colors.text}`}
                    >
                        <PokemonInfo typeOfData="Height" data={height}></PokemonInfo>
                        <PokemonInfo typeOfData="Weight" data={weight}></PokemonInfo>
                        <PokemonInfo typeOfData="Hidden Ability" data={hiddenAbility}></PokemonInfo>
                        <PokemonInfo typeOfData="Speed" data={speed}></PokemonInfo>
                    </div>
                )}
            </div>
        </>
    );
};

export default PokemonCardView