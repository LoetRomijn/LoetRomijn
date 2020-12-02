import React from 'react';

export const AppContext = React.createContext();

export const WrapWithProvider = ({ children }) => {
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  );
};