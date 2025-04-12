export const PokemonInfo = ({ typeOfData, data }) => {
    return (
        <div className="flex justify-between items-center py-0 px-4">
            <span className="text-base font-normal">{typeOfData}</span>
            <span className="text-base font-bold">{data}</span>
        </div>
    );
};
