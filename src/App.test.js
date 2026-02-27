// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  // Match the heading text you actually render
  expect(
    screen.getByRole('heading', { name: /welcome to sinterior designer/i })
  ).toBeInTheDocument();
});
