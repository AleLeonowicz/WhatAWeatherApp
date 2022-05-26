import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header';
import CityProvider from '../../store/CityProvider';

const renderComponent = () => {
  return (
    <CityProvider>
      <Header />
    </CityProvider>
  );
};

describe('Header', () => {
  test('handles incorrect input error', () => {
    render(renderComponent());

    const input = screen.getByTestId('headerInput');
    console.log('input', input);

    const span = screen.getByTestId('headerErrorSpan');

    fireEvent.change(input, { target: { value: 'Poznań' } });

    expect(span).toHaveTextContent(
      'Special characters are not allowed. Please try again.'
    );
  });
});
