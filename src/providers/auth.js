import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const api = 'https://swapi.dev/api/planets';

  const [DATA, setData] = useState([]);
  const [planetList, setPlanetList] = useState('');
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [selectedFilters, setSelectedFilters] = useState([]);

  const setContext = {
    DATA,
    setData,
    planetList,
    setPlanetList,
    filters,
    setFilters,
    selectedFilters,
    setSelectedFilters,
  };

  useEffect(() => {
    const getApi = async () => {
      const { results } = await fetch(api).then((response) => response.json());
      results.map((result) => delete result.residents);
      const data = results;
      setData(data);
    };
    getApi();
  }, [setData]);

  return (
    <AuthContext.Provider value={ setContext }>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
