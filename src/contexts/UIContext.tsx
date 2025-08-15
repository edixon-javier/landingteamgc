'use client';

import React, { createContext, useContext, useReducer, useCallback, ReactNode } from 'react';
import { isDarkMode } from '@/lib/themeUtils';

interface UIState {
  theme: 'light' | 'dark';
  isHeaderVisible: boolean;
  isMenuOpen: boolean;
  activeSection: string | null;
  isLoading: boolean;
}

type UIAction =
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'TOGGLE_HEADER'; payload: boolean }
  | { type: 'TOGGLE_MENU'; payload: boolean }
  | { type: 'SET_ACTIVE_SECTION'; payload: string | null }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: UIState = {
  theme: isDarkMode() ? 'dark' : 'light',
  isHeaderVisible: true,
  isMenuOpen: false,
  activeSection: null,
  isLoading: false,
};

const UIContext = createContext<{
  state: UIState;
  toggleTheme: () => void;
  toggleHeader: (visible: boolean) => void;
  toggleMenu: (open: boolean) => void;
  setActiveSection: (section: string | null) => void;
  setLoading: (loading: boolean) => void;
} | undefined>(undefined);

function uiReducer(state: UIState, action: UIAction): UIState {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'TOGGLE_HEADER':
      return { ...state, isHeaderVisible: action.payload };
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: action.payload };
    case 'SET_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export function UIProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const toggleTheme = useCallback(() => {
    dispatch({ 
      type: 'SET_THEME', 
      payload: state.theme === 'light' ? 'dark' : 'light' 
    });
  }, [state.theme]);

  const toggleHeader = useCallback((visible: boolean) => {
    dispatch({ type: 'TOGGLE_HEADER', payload: visible });
  }, []);

  const toggleMenu = useCallback((open: boolean) => {
    dispatch({ type: 'TOGGLE_MENU', payload: open });
  }, []);

  const setActiveSection = useCallback((section: string | null) => {
    dispatch({ type: 'SET_ACTIVE_SECTION', payload: section });
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  }, []);

  return (
    <UIContext.Provider
      value={{
        state,
        toggleTheme,
        toggleHeader,
        toggleMenu,
        setActiveSection,
        setLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
