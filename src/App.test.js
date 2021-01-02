import { render, screen } from '@testing-library/react';
import App from './App.js'; // './App'이라고 해도됨 

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
