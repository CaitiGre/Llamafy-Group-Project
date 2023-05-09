import { render } from '@testing-library/react';
import Profile from '../components/SettingsPage/Profile';

it('profile form renders', () => {
    const { queryByText, queryByRole } = render(
        <Profile></Profile>
    );

    expect(queryByRole('form')).toBeDefined();
    expect(queryByRole('input')).toBeDefined();
    expect(queryByRole('InputLabel')).toBeDefined();
    expect(queryByRole('Selection')).toBeDefined();
    expect(queryByText('EMAIL')).toBeDefined();
    expect(queryByText('FIRST NAME')).toBeDefined();
    expect(queryByText('LAST NAME')).toBeDefined();
    expect(queryByText('STYLE PREFERENCE')).toBeDefined();
    expect(queryByText('SKIN TONE')).toBeDefined();
    expect(queryByText('LOCATION')).toBeDefined();
    expect(queryByText('NEW PASSWORD')).toBeDefined();
    expect(queryByText('RE-ENTER NEW PASSWORD')).toBeDefined();
    expect(queryByText('CURRENT PASSWORD*')).toBeDefined();
});

it('submit button renders', () => {
    const { queryByRole } = render(
        <Profile></Profile>
    );
    expect(queryByRole('button')).toBeDefined();
});

