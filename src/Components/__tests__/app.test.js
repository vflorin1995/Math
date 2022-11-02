import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

it('Matches DOM Snapshot', async () => {
  render(<Calculator />);
  const button5 = screen.getByRole('button', { name: '5' });
  const displayy = screen.getByTestId('display');
  fireEvent.click(button5);
  expect(displayy.textContent).toBe('5');
});
