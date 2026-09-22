/** @jest-environment jsdom */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders the navigation links', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: 'Einkaufsliste App' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Neue Liste erstellen' })).toHaveAttribute(
      'href',
      '/register'
    );
    expect(screen.getByRole('link', { name: 'Liste beitreten' })).toHaveAttribute('href', '/join');
    expect(screen.getByRole('link', { name: 'Einkaufsliste anzeigen' })).toHaveAttribute(
      'href',
      '/list'
    );
  });
});