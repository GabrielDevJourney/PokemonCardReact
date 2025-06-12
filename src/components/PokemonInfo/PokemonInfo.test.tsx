import PokemonInfo from '.';
import { render, screen } from '@testing-library/react';

describe('Pokemon Info component', () => {
    it('Should display health data when passed to the component as string', () => {
        const mockedTypeOfData = 'Health';
        const mockedData = '100HP';

        render(<PokemonInfo typeOfData={mockedTypeOfData} data={mockedData} />);

        const typeOfData = screen.getByTestId('pokemon-info-type-data');
        expect(typeOfData).toHaveTextContent('Health');

        const data = screen.getByTestId('pokemon-info-data');
        expect(data).toHaveTextContent('100HP');
    });

    it('Should display health data when passed to the component as number', () => {
        const mockedTypeOfData = 'Health';
        const mockedData = 100;

        render(<PokemonInfo typeOfData={mockedTypeOfData} data={mockedData} />);

        const typeOfData = screen.getByTestId('pokemon-info-type-data');
        expect(typeOfData).toHaveTextContent('Health');

        const data = screen.getByTestId('pokemon-info-data');
        expect(data).toHaveTextContent('100');
    });

    it('Should display health data when passed to the component as undefined', () => {
        const mockedTypeOfData = 'Health';
        const mockedData = undefined;

        render(<PokemonInfo typeOfData={mockedTypeOfData} data={mockedData} />);

        const typeOfData = screen.getByTestId('pokemon-info-type-data');
        expect(typeOfData).toHaveTextContent('Health');

        const data = screen.getByTestId('pokemon-info-data');
        expect(data).toHaveTextContent('');
    });
});
