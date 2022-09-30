import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/auth';

function InputNumberSeach() {
  const { planetList, setPlanetList } = useContext(AuthContext);
  const { filters, setFilters } = useContext(AuthContext);
  const { selectedFilters, setSelectedFilters } = useContext(AuthContext);
  const { fils, setFils } = useContext(AuthContext);

  useEffect(() => {
    function test() {
      setFilters({
        column: fils[0],
        comparison: 'maior que',
        value: 0,
      });
    }
    test();
  }, [fils]);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="namePlanet">
            <input
              type="text"
              value={ planetList }
              placeholder="Search for your homeland"
              data-testid="name-filter"
              onChange={ ({ target }) => setPlanetList(target.value) }
            />
            Search Planet
          </label>
        </div>
        <select
          data-testid="column-filter"
          value={ filters.column }
          onChange={ ({ target }) => setFilters((prevSelect) => ({
            ...prevSelect, column: target.value })) }
        >
          {fils.map((fil, i) => (
            <option key={ i } value={ fil }>{fil}</option>
          ))}

          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}

        </select>

        <select
          data-testid="comparison-filter"
          value={ filters.comparison }
          onChange={ ({ target }) => setFilters((prevSelect) => ({
            ...prevSelect, comparison: target.value })) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          type="number"
          name="value"
          placeholder="Digite um numero"
          data-testid="value-filter"
          value={ filters.value }
          onChange={ ({ target }) => setFilters((prevSelect) => ({
            ...prevSelect, value: target.value })) }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setSelectedFilters((prevSelect) => ([
              ...prevSelect, filters,
            ]));
            setFils(fils.filter((fil) => fil !== filters.column));
            // setFilters({
            //   column: 'population',
            //   comparison: 'maior que',
            //   value: 0,
            // });
          } }
        >
          Filtrar
        </button>
      </form>
      {selectedFilters.map((filter, index) => (
        <div
          data-testid="filter"
          className="selectedFilters"
          key={ index }
        >
          <span>
            {filter.column}
            {' '}
            {filter.comparison}
            {' '}
            {filter.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default InputNumberSeach;
