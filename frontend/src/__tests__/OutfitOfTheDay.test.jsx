import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import OutfitOfTheDay from '../components/OutfitOfTheDay/OutfitOfTheDay';

test('OOTD heading', () => {
    render(
        <Router>
          <OutfitOfTheDay />
        </Router>
      );

    const heading = screen.getByText(/OUTFIT OF THE DAY/i);
    expect(heading).toBeInTheDocument();
});