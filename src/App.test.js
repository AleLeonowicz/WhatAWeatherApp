import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header above input field', () => {
  render(<App />);
  const linkElement = screen.getByText(
    'A QUICK GUIDE ON WHAT TO WEAR IN A CURRENT WEATHER'
  );
  expect(linkElement).toBeInTheDocument();
});

const multiply = (arg1, arg2) => arg1 * arg2;

test('multipl ffunction returns corrent value', () => {
  expect(multiply(2, 10)).toEqual(20);
  expect(multiply('s', 1)).toEqual(NaN);
});
