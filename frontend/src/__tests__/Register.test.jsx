import React from 'react';
import { render, fireEvent, waitFor, screen, findByText, findByRole, within } from '@testing-library/react';
import axios from 'axios';
import RegistrationPage from '../components/RegistrationPage/Registration';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

jest.mock('axios');

describe('Registration page functionality', () => {
    test('submits user registration data successfully', async () => {
        axios.post.mockResolvedValueOnce({ data: {} });
        const { getByLabelText, getByText, container } = render(<MemoryRouter><RegistrationPage /></MemoryRouter>);
        fireEvent.change(getByLabelText(/first name/i), { target: { value: 'Butter' } });
        fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Chicken' } });
        fireEvent.change(getByLabelText(/email/i), { target: { value: 'butter@email.com' } });
      
        const passwordInput = container.querySelector('input[id="password"]');
        const reenterPasswordInput = container.querySelector('input[id="reenter-password"]');
        fireEvent.change(passwordInput, { target: { value: 'password1' } });
        fireEvent.change(reenterPasswordInput, { target: { value: 'password1' } });
      
        const select = getByLabelText('Primary Location');
        userEvent.click(select, { target: { value: 'Auckland' } });
      
        const otherButton = getByText(/all/i);
        fireEvent.click(otherButton);

        const submitButton = getByText(/submit/i);
        fireEvent.click(submitButton);
        expect(axios.post)
    
      });
      
      

    test('displays error message for non-matching passwords', async () => {
        const { getByLabelText, getByText, container } = render(<MemoryRouter><RegistrationPage /></MemoryRouter>);
        fireEvent.change(getByLabelText(/first name/i), { target: { value: 'Butter' } });
        fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Chicken' } });
        fireEvent.change(getByLabelText(/email/i), { target: { value: 'butter@email.com' } });
        const passwordInput = container.querySelector('input[id="password"]');
        const reenterPasswordInput = container.querySelector('input[id="reenter-password"]');
        fireEvent.change(passwordInput, { target: { value: 'password1' } });
        fireEvent.change(reenterPasswordInput, { target: { value: 'password2' } });
        const select = getByLabelText('Primary Location');
        userEvent.click(select, { target: { value: 'Auckland' } });
      
        const otherButton = getByText(/all/i);
        fireEvent.click(otherButton);
        const submitButton = getByText(/submit/i);
        fireEvent.click(submitButton);
        await waitFor(async() => expect(await container.querySelector('.Toastify__toast-body div')).toHaveTextContent('Your passwords must match.'));
    });

    test('displays error message for missing input fields', async () => {
        const { getByText } = render(<MemoryRouter><RegistrationPage /></MemoryRouter>);
        fireEvent.submit(getByText(/submit/i));
        await waitFor(() => expect(getByText(/All details on this form are required./i)).toBeInTheDocument());
    });

    test('displays error message for failed registration', async () => {
        axios.post.mockRejectedValueOnce(new Error('Network Error'));
        const { getByLabelText, getByText } = render(<MemoryRouter><RegistrationPage /></MemoryRouter>);
        fireEvent.change(getByLabelText(/first name/i), { target: { value: 'Butter' } });
        fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Chicken' } });
        fireEvent.change(getByLabelText(/email/i), { target: { value: 'butter@email.com' } });
        fireEvent.change(getByLabelText(/password/i), { target: { value: 'password1' } });
        fireEvent.change(getByLabelText(/re-enter password/i), { target: { value: 'password1' } });
        fireEvent.change(getByLabelText(/location/i), { target: { value: 'Auckland' } });
        fireEvent.click(getByText(/male/i));
        fireEvent.submit(getByText(/submit/i));
        await waitFor(() => expect(getByText(/An error occurred while registering./i)).toBeInTheDocument());
    });
});
