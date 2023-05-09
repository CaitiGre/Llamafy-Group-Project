import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import OutfitOfTheDay from '../components/OutfitOfTheDay/OutfitOfTheDay';

test('OOTD title exists', () => {
    render(
        <Router>
          <OutfitOfTheDay />
        </Router>
      );

    const heading = screen.getByText('OUTFIT OF THE DAY');
    expect(heading).toBeInTheDocument();
});

test('Weather box exists', () => {
    render(
        <Router>
          <OutfitOfTheDay />
        </Router>
      );

    const box = screen.getByText('Today\'s Weather');
    expect(box).toBeInTheDocument();
})

test('Generate button exists', () => {
    render(
        <Router>
          <OutfitOfTheDay />
        </Router>
      );

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
})
