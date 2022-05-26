import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

test('renders correct text', () => {
  render(<Navbar />);

  expect(screen.getByTestId('navbarLogo')).toHaveTextContent('THE WEATHER');
});
