export const SkeletonPokemonCard = () => {
    return (
        <>
            {/*CARD CONTAINER*/}
            <div className={`relative w-[500px] h-[470px] flex flex-col rounded-2xl bg-gray-200`}>
                {/*CARD OPACITY CONTAINER */}
                {
                    <div className="absolute w-full h-full pointer-events-none opacity-10 rounded-2xl"></div>
                }
                {/*IMAGE CONAINER */}
                <div className="relative flex flex-col items-center justify-center mb-4 animate-pulse">
                    <div className="w-[200px] h-[200px] bg-gray-400 animate-pulse rounded-full"></div>
                    {/* BADGE TYPE CONTAINER */}
                    <div className="bg-gray-400 text-2xl flex justify-center items-center w-[200px] h-[40px] rounded-lg  font-medium animate-pulse">
                    </div>
                </div>
                <div className="flex flex-row justify-between p-[16px] mb-4">
                    <div className="pl-[16px] w-[150px] h-[30px] bg-gray-400 rounded animate-pulse"></div>

                    {/* BUTTON EXTEND INFO */}
                    <div className="w-[32px] h-[32px] bg-gray-400 rounded-full animate-pulse"></div>
                </div>
                {/* VISIBLE INFO CONTAINER */}
                <div className="px-4 mb-6 grid grid-cols-2 grid-rows-3 gap-2">
                    {/* Info placeholders */}
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={`visible-info-${index}`}
                            className="flex items-center justify-between px-4 py-2"
                        >
                            <div className="w-[80px] h-[16px] bg-gray-400 rounded animate-pulse"></div>
                            <div className="w-[60px] h-[16px] bg-gray-400 rounded animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
