interface PokemonOptionProps {
    value: string;
    onClick: (value: string) => void;
}
export const PokemonOption = ({ value, onClick }: PokemonOptionProps) => {
    return (
        <button
            className="mt-2 h-[30px] w-full cursor-pointer appearance-none border-none bg-transparent text-[20px] text-stone-50"
            value={value}
            onClick={() => onClick(value)}
        >
            {value}
        </button>
    );
};
