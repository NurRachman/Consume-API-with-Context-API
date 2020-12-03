import React, { useState, useContext, useReducer } from 'react';
import Context from '../context/AppContext';

const AppProvider = ({ children }) => {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  requestRepos = async () => {
    setLoading(true);
    try {
      const request = await fetch('https://api.github.com/users/NurRachmen/repos');
      const response = await request.json();
      setRepos(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Context.Provider value={{
      repos,
      requestRepos,
      isLoading: loading,
    }}>
      {children}
    </Context.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
