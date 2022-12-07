import { render, screen } from '@testing-library/react';
import App from './App';

test('renders kidzzy link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Kidzzy/i);
  expect(linkElement).toBeInTheDocument();
});
