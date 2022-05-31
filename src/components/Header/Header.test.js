import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
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

// https://api.weatherapi.com/v1/forecast.json?key=7b6fd23c870d4c66bba124658220704&q=Szyszek&days=3&aqi=no&alerts=no

const server = setupServer(
  rest.get('https://api.weatherapi.com/v1/*', (req, res, ctx) => {
    console.log('req', req);
    return res(
      ctx.json({
        error: { code: 1006, message: 'No matching location found.' },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Header', () => {
  test('handles incorrect input error', () => {
    render(renderComponent());

    const input = screen.getByTestId('headerInput');

    const span = screen.getByTestId('headerErrorSpan');

    fireEvent.change(input, { target: { value: 'Poznań' } });

    expect(span).toHaveTextContent(
      'Special characters are not allowed. Please try again.'
    );
  });

  test('handles incorrect query error', () => {
    render(renderComponent());

    const form = screen.getByTestId('headerForm');
    const input = screen.getByTestId('headerInput');
    const span = screen.getByTestId('headerErrorSpan');
    const btn = screen.getByTestId('headerSubmitBtn');

    fireEvent.change(input, { target: { value: 'Szyszek' } });
    fireEvent.click(btn, { target: [input, btn] });

    expect(span).toHaveTextContent(
      'No matching location found. Please try again.'
    );
  });
});
