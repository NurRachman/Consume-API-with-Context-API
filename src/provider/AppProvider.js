import React, { useState, useContext, useReducer } from 'react';

const Context = React.createContext({
  repos: [],
  requestRepos: () => { },
  isLoading: false,
  onFilter: (text) => { },
});

const AppProvider = ({ children }) => {

  const [repos, setRepos] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  requestRepos = async () => {
    setLoading(true);
    try {
      const request = await fetch('https://api.github.com/users/NurRachmen/repos');
      const response = await request.json();
      setRepos(response);
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  onFilter = (keyword) => {
    if (keyword) {
      const filter = repos.filter((repo) => repo.full_name.includes(keyword));
      setData(filter);
    } else {
      setData(repos);
    }
  };

  return (
    <Context.Provider value={{
      repos: data,
      isLoading: loading,
      requestRepos,
      onFilter,
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
