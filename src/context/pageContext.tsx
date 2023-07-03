import { createContext, FC, ReactNode, useState } from 'react';

interface ProviderProps {
  children: ReactNode;
}

interface PageContextType {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export const PageContext = createContext<PageContextType>(
  {} as PageContextType
);

const PageProvider: FC<ProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  const contextValue = {
    currentPage,
    setCurrentPage
  };

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};

export default PageProvider;
