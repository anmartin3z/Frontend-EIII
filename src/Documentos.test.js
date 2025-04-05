import { render, screen } from '@testing-library/react';
import Documentos from './Documentos';

test('renders learn react link', () => {
  render(<Documentos />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
