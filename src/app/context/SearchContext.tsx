"use client"
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type FilterContextType = {
  searchInput: string;
  selectedCategory: string;
  searchDropdown: boolean;
  searchButtonPressed: boolean;
  propertyName: string;
  selectPropertyName: (value: string) => void;
  updateSearchInput: (value: string) => void;
  updateSelectedCategory: (value: string) => void;
  updateDropdown: (value: boolean) => void;
  setSearchButtonPressed: (value: boolean) => void;
  searchNavigation: () => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchDropdown, setSearchDropdown] = useState(true);
  const [searchButtonPressed, setSearchButtonPressed] = useState(false);
  const [propertyName, setPropertyName] = useState(""); 

  const updateSearchInput = (value: string) => {
    setSearchInput(value);
  };

  const updateSelectedCategory = (value: string) => {
    setSelectedCategory(value);
  };

  const updateDropdown = (value: boolean) => {
    setSearchDropdown(value);
  };

  const searchNavigation = () => {
    router.refresh();
    router.push('/Search');
    setSearchButtonPressed(true);
  }

  const selectPropertyName = (value:string) => {
    setPropertyName(value);
  }

  const contextValue: FilterContextType = {
    searchInput,
    selectedCategory,
    searchDropdown,
    updateSearchInput,
    propertyName,
    updateSelectedCategory,
    updateDropdown,
    searchNavigation,
    searchButtonPressed,
    setSearchButtonPressed,
    selectPropertyName
  };

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
