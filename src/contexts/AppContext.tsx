'use client';

import React, { createContext, useContext, useReducer, useCallback, ReactNode } from 'react';
import { CaseStudy } from '@/types';

interface AppState {
  caseStudies: CaseStudy[];
  filteredCaseStudies: CaseStudy[];
  activeFilters: {
    technology?: string[];
    industry?: string[];
    year?: number[];
  };
  selectedCaseStudy: CaseStudy | null;
}

type AppAction =
  | { type: 'SET_CASE_STUDIES'; payload: CaseStudy[] }
  | { type: 'SET_FILTERED_CASE_STUDIES'; payload: CaseStudy[] }
  | { type: 'SET_ACTIVE_FILTERS'; payload: AppState['activeFilters'] }
  | { type: 'SET_SELECTED_CASE_STUDY'; payload: CaseStudy | null };

const initialState: AppState = {
  caseStudies: [],
  filteredCaseStudies: [],
  activeFilters: {},
  selectedCaseStudy: null,
};

const AppContext = createContext<{
  state: AppState;
  setCaseStudies: (caseStudies: CaseStudy[]) => void;
  setFilteredCaseStudies: (caseStudies: CaseStudy[]) => void;
  setActiveFilters: (filters: AppState['activeFilters']) => void;
  setSelectedCaseStudy: (caseStudy: CaseStudy | null) => void;
  filterCaseStudies: (filters: AppState['activeFilters']) => void;
} | undefined>(undefined);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_CASE_STUDIES':
      return { ...state, caseStudies: action.payload };
    case 'SET_FILTERED_CASE_STUDIES':
      return { ...state, filteredCaseStudies: action.payload };
    case 'SET_ACTIVE_FILTERS':
      return { ...state, activeFilters: action.payload };
    case 'SET_SELECTED_CASE_STUDY':
      return { ...state, selectedCaseStudy: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setCaseStudies = useCallback((caseStudies: CaseStudy[]) => {
    dispatch({ type: 'SET_CASE_STUDIES', payload: caseStudies });
  }, []);

  const setFilteredCaseStudies = useCallback((caseStudies: CaseStudy[]) => {
    dispatch({ type: 'SET_FILTERED_CASE_STUDIES', payload: caseStudies });
  }, []);

  const setActiveFilters = useCallback((filters: AppState['activeFilters']) => {
    dispatch({ type: 'SET_ACTIVE_FILTERS', payload: filters });
  }, []);

  const setSelectedCaseStudy = useCallback((caseStudy: CaseStudy | null) => {
    dispatch({ type: 'SET_SELECTED_CASE_STUDY', payload: caseStudy });
  }, []);

  const filterCaseStudies = useCallback((filters: AppState['activeFilters']) => {
    const filtered = state.caseStudies.filter(study => {
      let matches = true;

      if (filters.technology?.length) {
        matches = matches && study.technologies?.some(tech => 
          filters.technology?.includes(tech)
        );
      }

      if (filters.industry?.length) {
        matches = matches && filters.industry.includes(study.industry);
      }

      if (filters.year?.length) {
        const studyYear = new Date(study.date).getFullYear();
        matches = matches && filters.year.includes(studyYear);
      }

      return matches;
    });

    setFilteredCaseStudies(filtered);
    setActiveFilters(filters);
  }, [state.caseStudies, setFilteredCaseStudies, setActiveFilters]);

  return (
    <AppContext.Provider
      value={{
        state,
        setCaseStudies,
        setFilteredCaseStudies,
        setActiveFilters,
        setSelectedCaseStudy,
        filterCaseStudies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
