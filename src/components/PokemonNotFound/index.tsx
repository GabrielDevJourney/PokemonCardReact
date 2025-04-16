interface PokemonNotFoundAlertProps {
    name: string;
}
export const PokemonNotFoundAlert = ({ name }: PokemonNotFoundAlertProps) => {
    return (
        <div className="mb-2 flex h-30 w-100 flex-col items-center justify-center rounded-2xl bg-red-400 p-4">
            <h1 className="text-stone-50">{name} not found</h1>
            <p className="text-center text-base text-stone-50">
                Sorry but {name} information can't be currently loaded
            </p>
            <p className="mt-2 text-sm text-stone-50">
                Please try selecting another pokemon from the dropdown!
            </p>
        </div>
    );
};
