const colorClasses = {
    black: 'bg-gray-900',
    blue: 'bg-blue-500',
    brown: 'bg-amber-500',
    gray: 'bg-gray-500',
    green: 'bg-green-500',
    pink: 'bg-pink-500',
    purple: 'bg-purple-500',
    red: 'bg-red-400',
    white: 'bg-stone-200',
    yellow: 'bg-yellow-500',
};

export const PokemonCard = ({
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
    showExtraInfo = false,
}) => {
    // Get background color based on type
    const backgroundColor = colorClasses[color.toLowerCase()];

    return (
        <div>
            <div
                className={`relative w-[500px] ${
                    showExtraInfo ? 'h-[570px]' : 'h-[470px]'
                } flex flex-col rounded-2xl transition-all duration-300 ease-in-out overflow-hidden ${backgroundColor}`}
            >
                {
                    <div className="absolute w-full h-full pointer-events-none opacity-10 rounded-2xl"></div>
                }

                <div className="relative flex flex-col items-center justify-center mb-4">
                    <img
                        className="w-[200px] h-[200px]"
                        src={imageUrl || `/api/placeholder/200/200`}
                        alt={`${name} Pokemon`}
                    />
                    <div className="bg-stone-50 text-2xl flex justify-center items-center w-[200px] h-[40px] rounded-lg text-gray-800 font-medium">
                        <span>{type}</span>
                    </div>
                </div>

                <div className="flex flex-row justify-between p-[16px] mb-4">
                    <h2 className="pl-[16px] text-teal-50 font-bold">{name}</h2>
                    <button className="pr-[16px] appearance-none border-0 bg-transparent cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-[32px] h-[32px] text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                            />
                        </svg>
                    </button>
                </div>
                {/* VISIBLE INFO CONTAINER */}
                <div className="grid grid-cols-2 grid-rows-3 mb-6 gap-2 px-[16px] text-stone-50">
                    {/* Health container */}
                    <div className="flex items-center justify-between px-4 py-0">
                        <span className="text-base font-normal">Health</span>
                        <span className="text-base font-bold">{health}</span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-0">
                        <span className="text-base font-normal">Main Ability</span>
                        <span className="text-base font-bold">{mainAbility}</span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-0">
                        <span className="text-base font-normal">Habitat</span>
                        <span className="text-base font-bold">{habitat}</span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-0">
                        <span className="text-base font-normal">Power</span>
                        <span className="text-base font-bold">{power}</span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-0">
                        <span className="text-base font-normal">Capture Rate</span>
                        <span className="text-base font-bold">{captureRate}</span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-0">
                        <span className="text-base font-normal">Friendliness</span>
                        <span className="text-base font-bold">{friendliness}</span>
                    </div>
                </div>

                {showExtraInfo && (
                    <div className="grid grid-cols-2 grid-rows-2 border-t border-teal-50 gap-2 px-[16px] h-[100px] text-teal-50">
                        <div className="flex justify-between items-center py-0 px-[16px]">
                            <span className="text-base font-normal">Height</span>
                            <span className="text-base font-bold">{height}</span>
                        </div>
                        <div className="flex justify-between items-center py-0 px-[16px]">
                            <span className="text-base font-normal">Weight</span>
                            <span className="text-base font-bold">{weight}</span>
                        </div>
                        <div className="flex justify-between items-center py-0 px-[16px]">
                            <span className="text-base font-normal">Hidden Ability</span>
                            <span className="text-base font-bold">{hiddenAbility}</span>
                        </div>
                        <div className="flex justify-between items-center py-0 px-[16px]">
                            <span className="text-base font-normal">Speed</span>
                            <span className="text-base font-bold">{speed}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
