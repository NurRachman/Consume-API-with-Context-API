import React from 'react';

export default React.createContext({
  repos: [],
  requestRepos: () => {},
  isLoading: false,
});
