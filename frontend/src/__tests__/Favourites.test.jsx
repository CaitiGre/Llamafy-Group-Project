import React from 'react';
import { render, screen } from '@testing-library/react';
import Favourites from '../components/Favourites/Favourites';

test('Favourites heading exists', () => {
    render(
          <Favourites />
      );

    const heading = screen.getByText(/PAST OUTFITS/i);
    expect(heading).toBeInTheDocument();
});