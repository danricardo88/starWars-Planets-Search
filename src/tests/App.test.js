import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import testData from '../../cypress/mocks/testData'

// test('I am your test', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hello, App!/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('tests', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData)
    });
    render(<App />);
  });
  it('a tabela carregou', async () => {
    const table = await screen.findByRole('table');
    expect(table).toBeInTheDocument();
    const select = screen.findByTestId('colum-filter');
    select.userEvent.selectOptions('population');
    const onChange = jest.fn();
    select.onChange(onChange);
    expect(onChange).toHaveBeenCalled();
  })
})