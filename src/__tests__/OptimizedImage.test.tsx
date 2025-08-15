import React from 'react';
import { render, screen } from '@testing-library/react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

describe('OptimizedImage', () => {
  const defaultProps = {
    src: '/images/test-image.jpg',
    alt: 'Test image',
    width: 100,
    height: 100,
  };

  it('renders with default props', () => {
    render(<OptimizedImage {...defaultProps} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', defaultProps.alt);
  });

  it('shows loading state initially', () => {
    render(<OptimizedImage {...defaultProps} />);
    const loadingElement = screen.getByTestId('image-loading');
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveClass('animate-pulse');
  });

  it('applies custom className', () => {
    const customClass = 'custom-class';
    render(<OptimizedImage {...defaultProps} className={customClass} />);
    const container = screen.getByTestId('image-container');
    expect(container).toHaveClass(customClass);
  });

  it('uses fallback image on error', () => {
    render(<OptimizedImage {...defaultProps} src="invalid-image.jpg" />);
    const image = screen.getByRole('img');
    image.dispatchEvent(new Event('error'));
    expect(image).toHaveAttribute('src', '/images/placeholder.svg');
  });
});
