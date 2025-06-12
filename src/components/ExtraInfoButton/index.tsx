import React from 'react';
import { ColorStyle } from '../../constants/pokemons';
interface ExtraInfoButtonProps {
    colors: ColorStyle;
    showExtraInfo: boolean;
    setShowExtraInfo: React.Dispatch<React.SetStateAction<boolean>>;
}
const ExtraInfoButton = ({ colors, showExtraInfo, setShowExtraInfo }: ExtraInfoButtonProps) => {
    const handleClick = () => {
        setShowExtraInfo(!showExtraInfo);
    };

    return (
        <button
            data-testid="more-info-button"
            className="cursor-pointer appearance-none border-0 bg-transparent pr-[16px]"
            onClick={handleClick}
            aria-label={showExtraInfo ? 'Hide extra information' : 'Show extra information'}
            aria-expanded={showExtraInfo}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`h-[32px] w-[32px] ${colors.text}`}
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
            </svg>
        </button>
    );
};

export default ExtraInfoButton;
