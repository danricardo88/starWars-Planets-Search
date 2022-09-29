import React, { useContext } from 'react';
import { AuthContext } from '../providers/auth';

export default function Table() {
  const { DATA,
    planetList,
    selectedFilters,
    // setSelectedFilters,
    // filters,
    // setFilters,
  } = useContext(AuthContext);
  const keys = [];

  if (DATA.length > 0) {
    Object.keys(DATA[0]).forEach((key) => {
      keys.push(key);
    });
  }

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={ key }>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          DATA
            .filter((planet) => (
              planet.name.toLowerCase().includes(planetList.toLowerCase())
            ))
            .filter((planet) => {
              const filtrado = [];

              selectedFilters.forEach((filter) => {
                switch (filter.comparison) {
                case 'maior que':
                  filtrado.push(Number(planet[filter.column]) > Number(filter.value));
                  break;
                case 'menor que':
                  filtrado.push(Number(planet[filter.column]) < Number(filter.value));
                  break;
                case 'igual a':
                  filtrado.push(Number(planet[filter.column]) === Number(filter.value));
                  break;
                default:
                  break;
                }
              });

              return filtrado.every((filtrados) => filtrados);
            })

            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}
