import { render, screen } from '@testing-library/react';
import OutfitOfTheDay from '../components/OutfitOfTheDay/OutfitOfTheDay';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

test('OOTD title exists', () => {
    render(<OutfitOfTheDay />);

    const heading = screen.getByText('OUTFIT OF THE DAY');
    expect(heading).toBeInTheDocument();
});

test('Weather box exists', () => {
    render(<OutfitOfTheDay />);

    const box = screen.getByText('Today\'s Weather');
    expect(box).toBeInTheDocument();
})

test('Generate button exists', () => {
    render(<OutfitOfTheDay />);

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
})