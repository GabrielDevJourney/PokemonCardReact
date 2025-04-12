import { COLORS } from '../constants/pokemons';
import { ExtraInfoButton } from './extraInfoButton';
import { useState } from 'react';
import { PokemonInfo } from './pokemonInfo';

export const PokemonCard = ({ pokemonData }) => {
    const {
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
    } = pokemonData;

    // Get background color based on type
    const colors = COLORS[color.toLowerCase()];
    const [showExtraInfo, setShowExtraInfo] = useState(false);
    return (
        <div>
            {/*CARD CONTAINER*/}
            <div
                className={`relative w-[500px] ${
                    showExtraInfo ? 'h-[550px]' : 'h-[470px]'
                } flex flex-col rounded-2xl transition-all duration-500 ease-in-out overflow-hidden ${
                    colors.background
                }`}
            >
                {/*CARD OPACITY CONTAINER */}
                {
                    <div className="absolute w-full h-full pointer-events-none opacity-10 rounded-2xl"></div>
                }
                {/*IMAGE CONAINER */}
                <div className="relative flex flex-col items-center justify-center mb-4">
                    <img
                        className="w-[200px] h-[200px]"
                        src={imageUrl || `/api/placeholder/200/200`}
                        alt={`${name} Pokemon`}
                    />
                    {/* BADGE TYPE CONTAINER */}
                    <div className="bg-stone-50 text-2xl flex justify-center items-center w-[200px] h-[40px] rounded-lg text-gray-800 font-medium">
                        <span>{type}</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between p-[16px] mb-4">
                    <h2 className={`pl-[16px] text-3xl ${colors.text} font-bold1`}>{name}</h2>
                    {/* BUTTON EXTEND INFO */}
                    <ExtraInfoButton
                        colors={colors}
                        showExtraInfo={showExtraInfo}
                        setShowExtraInfo={setShowExtraInfo}
                    ></ExtraInfoButton>
                </div>
                {/* VISIBLE INFO CONTAINER */}
                <div className={`grid grid-cols-2 grid-rows-3 mb-6 gap-2 px-4 ${colors.text}`}>
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
                        className={`grid grid-cols-2 grid-rows-2 border-t border-teal-50 gap-2 px-4 pt-4 h-20 transition-all duration-300 ease-in-out ${colors.text}`}
                    >
                        <PokemonInfo typeOfData="Height" data={height}></PokemonInfo>
                        <PokemonInfo typeOfData="Weight" data={weight}></PokemonInfo>
                        <PokemonInfo typeOfData="Hidden Ability" data={hiddenAbility}></PokemonInfo>
                        <PokemonInfo typeOfData="Speed" data={speed}></PokemonInfo>
                    </div>
                )}
            </div>
        </div>
    );
};
