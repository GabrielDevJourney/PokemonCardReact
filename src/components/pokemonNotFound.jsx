export const PokemonNotFoundAlert = ({ name }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 mb-2 bg-red-400 h-30 w-100 rounded-2xl">
            <h1 className="text-stone-50">{name} not found</h1>
            <p className="text-base text-center text-stone-50">
                Sorry but {name} information can't be currently loaded
            </p>
            <p className="mt-2 text-sm text-stone-50">
                Please try selecting another pokemon from the dropdown!
            </p>
        </div>
    );
};
