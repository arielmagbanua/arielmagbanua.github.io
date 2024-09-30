import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../src/components/Header';

// this is how to mock partial library for mock a method, in this case, useNavigate
// referense: https://gist.github.com/CarmeloRicarte/ee7b9908c0ef20eae32428de77a0cd4a
const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('Header', () => {
  it('Renders the header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logoHeader = screen.getByText(/Ariel Magbanua/i);
    const aboutLinks = screen.getAllByText(/About/i);
    const portfolioLinks = screen.getAllByText(/Portfolio/i);
    const darkModeToggles = screen
      .getAllByRole('checkbox')
      .filter((toggle: HTMLElement) => toggle.tagName === 'svg');

    expect(logoHeader).toBeInTheDocument();
    expect(logoHeader.textContent).toBe('Ariel Magbanua.');
    expect(aboutLinks).toHaveLength(2);
    expect(portfolioLinks).toHaveLength(2);
    expect(darkModeToggles).toHaveLength(2);
  });
});
