interface PokemonInfoProps {
    typeOfData: string;
    data: string | number | undefined;
}
const PokemonInfo = ({ typeOfData, data }: PokemonInfoProps) => {
    return (
        <div className="flex items-center justify-between px-4 py-0" data-testid="pokemon-info">
            <span data-testid="pokemon-info-type-data" className="text-base font-normal">
                {typeOfData}
            </span>
            <span data-testid="pokemon-info-data"  className="text-base font-bold">
                {data}
            </span>
        </div>
    );
};

export default PokemonInfo