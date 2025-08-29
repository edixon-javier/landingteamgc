import { render, screen, fireEvent } from '@testing-library/react';
import { useUI, UIProvider } from '@/contexts/UIContext';
import { useApp, AppProvider } from '@/contexts/AppContext';

describe('Contexts', () => {
  describe('UIContext', () => {
    const TestComponent = () => {
      const { state, toggleTheme, toggleMenu } = useUI();
      return (
        <div>
          <div data-testid="theme">{state.theme}</div>
          <button onClick={() => toggleTheme()}>Toggle Theme</button>
          <button onClick={() => toggleMenu(!state.isMenuOpen)}>Toggle Menu</button>
        </div>
      );
    };

    it('provides the correct initial state', () => {
      render(
        <UIProvider>
          <TestComponent />
        </UIProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('light');
    });

    it('toggles theme correctly', () => {
      render(
        <UIProvider>
          <TestComponent />
        </UIProvider>
      );

      fireEvent.click(screen.getByText('Toggle Theme'));
      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });

    it('toggles menu correctly', () => {
      render(
        <UIProvider>
          <TestComponent />
        </UIProvider>
      );

      fireEvent.click(screen.getByText('Toggle Menu'));
      // Add assertions for menu state
    });
  });

  describe('AppContext', () => {
    const mockCaseStudies = [
      {
        id: '1',
        title: 'Test Case Study',
        description: 'Test Description',
        technologies: ['React', 'TypeScript'],
        industry: 'Technology',
        date: '2025-08-15',
        slug: 'test-case-study',
        name: 'Test Case Study Name',
        subtitle: 'Test Subtitle',
        imageUrl: '/images/test.jpg',
      },
    ];

    const TestComponent = () => {
      const { state, setCaseStudies, filterCaseStudies } = useApp();
      return (
        <div>
          <div data-testid="case-studies-count">
            {state.caseStudies.length}
          </div>
          <button onClick={() => setCaseStudies(mockCaseStudies)}>
            Set Case Studies
          </button>
          <button
            onClick={() =>
              filterCaseStudies({ technology: ['React'] })
            }
          >
            Filter Studies
          </button>
        </div>
      );
    };

    it('provides empty initial state', () => {
      render(
        <AppProvider>
          <TestComponent />
        </AppProvider>
      );

      expect(screen.getByTestId('case-studies-count')).toHaveTextContent('0');
    });

    it('sets case studies correctly', () => {
      render(
        <AppProvider>
          <TestComponent />
        </AppProvider>
      );

      fireEvent.click(screen.getByText('Set Case Studies'));
      expect(screen.getByTestId('case-studies-count')).toHaveTextContent('1');
    });

    it('filters case studies correctly', () => {
      render(
        <AppProvider>
          <TestComponent />
        </AppProvider>
      );

      fireEvent.click(screen.getByText('Set Case Studies'));
      fireEvent.click(screen.getByText('Filter Studies'));
      // Add assertions for filtered state
    });
  });
});
