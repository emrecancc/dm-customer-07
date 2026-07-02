import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('Dashboard renders correctly', () => {
  jest.spyOn(Date, 'now').mockReturnValue(new Date('2024-01-14').getTime());
  const { asFragment } = render(<Dashboard />);
  expect(asFragment()).toMatchSnapshot();
});