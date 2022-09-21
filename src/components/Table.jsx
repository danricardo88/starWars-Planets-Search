import React, { useContext } from 'react';
import { AuthContext } from '../providers/auth';
// import Tbody from './Tbody';

export default function Table() {
  const { planetList } = useContext(AuthContext);
  const keys = [];

  if (planetList.length > 0) {
    Object.keys(planetList[0]).forEach((key) => {
      keys.push(key);
    });
  }
  console.log(planetList);
  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={ key }>{key}</th>
          ))}
        </tr>
      </thead>
      {/* <Tbody /> */}
      <tbody>
        { planetList.map((planet) => (
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
        ))}
      </tbody>
    </table>
  );
}
