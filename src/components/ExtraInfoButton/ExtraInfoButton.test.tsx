import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ExtraInfoButton from '.';
import { useState } from 'react';

describe('ExtraInfoButton component', () => {
    const mockSetShowExtraInfo = jest.fn();
    const mockedProps = {
        colors: {
            text: 'text-purple-500',
            background: 'bg-purple-100',
        },
        showExtraInfo: false,
        setShowExtraInfo: mockSetShowExtraInfo,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the info button', () => {
        render(<ExtraInfoButton {...mockedProps} />);

        const button = screen.getByTestId('more-info-button');
        expect(button).toBeInTheDocument();
    });

    it('should toggle showExtraInfo and update aria attributes on each click starting from false)', async () => {
        const Wrapper = () => {
            const [showExtraInfo, setShowExtraInfo] = useState(false);

            return (
                <ExtraInfoButton
                    colors={{
                        text: 'text-purple-500',
                        background: 'bg-purple-100',
                    }}
                    showExtraInfo={showExtraInfo}
                    setShowExtraInfo={setShowExtraInfo}
                />
            );
        };

        render(<Wrapper />);

        const button = screen.getByTestId('more-info-button');

        expect(button).toHaveAttribute('aria-label', 'Show extra information');
        expect(button).toHaveAttribute('aria-expanded', 'false');

        fireEvent.click(button);
        await waitFor(() => {
            expect(button).toHaveAttribute('aria-label', 'Hide extra information');
            expect(button).toHaveAttribute('aria-expanded', 'true');
        });

        fireEvent.click(button);
        await waitFor(() => {
            expect(button).toHaveAttribute('aria-label', 'Show extra information');
            expect(button).toHaveAttribute('aria-expanded', 'false');
        });

        
    });
});
