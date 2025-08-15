import { renderHook, act } from '@testing-library/react';
import { useNavigation } from '@/hooks/useNavigation';
import { UIProvider } from '@/contexts/UIContext';

describe('useNavigation', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <UIProvider>{children}</UIProvider>
  );

  beforeEach(() => {
    // Mock window methods and properties
    Object.defineProperty(window, 'scrollTo', {
      value: jest.fn(),
      writable: true,
    });
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    });
  });

  it('returns the correct initial state', () => {
    const { result } = renderHook(() => useNavigation(), { wrapper });
    expect(result.current.isHeaderVisible).toBe(true);
    expect(typeof result.current.scrollToSection).toBe('function');
  });

  it('handles scroll events correctly', () => {
    const { result } = renderHook(() => useNavigation({ offset: 50 }), { wrapper });

    act(() => {
      // Simulate scrolling down
      Object.defineProperty(window, 'scrollY', { value: 100 });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.isHeaderVisible).toBe(false);

    act(() => {
      // Simulate scrolling up
      Object.defineProperty(window, 'scrollY', { value: 50 });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.isHeaderVisible).toBe(true);
  });

  it('scrolls to section when called', () => {
    const mockScrollTo = jest.fn();
    Object.defineProperty(window, 'scrollTo', { value: mockScrollTo });

    const { result } = renderHook(() => useNavigation(), { wrapper });

    // Mock getElementById
    const mockGetElementById = jest.spyOn(document, 'getElementById');
    mockGetElementById.mockImplementation(() => ({
      offsetTop: 100,
    } as unknown as HTMLElement));

    act(() => {
      result.current.scrollToSection('test-section');
    });

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });
  });
});
