import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const api = 'https://swapi.dev/api/planets';
  const [planetList, setPlanetList] = useState([]);
  const [filterList, setFilterList] = useState([{
    coluna: 'population',
    operador: 'maior que',
    value: '0',
  }]);

  const setContext = {
    planetList,
    setPlanetList,
    filterList,
    setFilterList,
  };

  useEffect(() => {
    const getApi = async () => {
      const { results } = await fetch(api).then((response) => response.json());
      results.map((result) => delete result.residents);
      setPlanetList(results);
      // setFilterList(results);
    };
    getApi();
  }, []);
  console.log(setContext);

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
