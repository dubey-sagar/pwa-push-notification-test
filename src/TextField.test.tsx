import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextField from './TextField';

describe('TextField Component', () => {
    test('renders with correct placeholder', () => {
        render(<TextField placeholder="Enter your name" onChange={() => { }} />);
        const inputElement = screen.getByPlaceholderText(/Enter your name/i);
        expect(inputElement).toBeInTheDocument();
    });

    test('fires onChange event with correct value', () => {
        const onChangeMock = jest.fn();
        render(<TextField placeholder="Enter your name" onChange={onChangeMock} />);
        const inputElement = screen.getByPlaceholderText(/Enter your name/i);

        fireEvent.change(inputElement, { target: { value: 'John Doe' } });

        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith('John Doe');
    });

    test('updates value correctly when typing', () => {
        render(<TextField placeholder="Enter your name" onChange={() => { }} />);
        const inputElement = screen.getByPlaceholderText(/Enter your name/i) as HTMLInputElement;

        fireEvent.change(inputElement, { target: { value: 'John Doe' } });

        expect(inputElement.value).toBe('John Doe');
    });
});
