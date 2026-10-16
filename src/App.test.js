// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ReceiverClef title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ReceiverClef/i);
    expect(titleElement).toBeInTheDocument();
});
