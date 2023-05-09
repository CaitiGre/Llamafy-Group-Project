import { render, screen } from '@testing-library/react';
import Favourites from '../components/Favourites/Favourites';

test('Favourites page informs of no favourites', async () => {
    render(<Favourites />);

    const noFavourites = screen.getByText(/Go select/i);
    expect(noFavourites).toBeInTheDocument();
});

test('Favourites title exists', async () => {
    render(<Favourites />);

    const heading = screen.getByText('Favourites');
    expect(heading).toBeInTheDocument();
});

test('Subheading exists', async () => {
    render(<Favourites />);

    const subHeading = screen.getByText('PAST OUTFITS');
    expect(subHeading).toBeInTheDocument();
})