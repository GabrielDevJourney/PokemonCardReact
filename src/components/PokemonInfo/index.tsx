interface PokemonInfoProps{
    typeOfData : string;
    data: string | number | undefined;
}
export const PokemonInfo = ({ typeOfData, data }: PokemonInfoProps) => {
    return (
        <div className="flex items-center justify-between px-4 py-0">
            <span className="text-base font-normal">{typeOfData}</span>
            <span className="text-base font-bold">{data}</span>
        </div>
    );
};
