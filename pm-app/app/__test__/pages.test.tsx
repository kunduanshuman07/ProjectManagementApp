import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import Home from '../page';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

describe('Home component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: jest.fn(),
    }));

    jest.resetAllMocks();
  });

  test('renders Drawer and Dashboard components', () => {
    render(<Home />);
    expect(screen.getByRole('navigation')).toBeTruthy(); 
    expect(screen.getByRole('main')).toBeTruthy(); 
  });
});
