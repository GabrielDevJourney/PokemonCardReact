export const PokemonOption = ({ value, onClick }) => {
    return (
        <button
            className="w-full cursor-pointer h-[30px] appearance-none border-none mt-2 bg-transparent text-[20px] text-stone-50"
            value={value}
            onClick={() => onClick(value)}
        >
            {value}
        </button>
    );
};
