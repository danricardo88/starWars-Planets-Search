import React, { useContext } from 'react';
import { AuthContext } from '../providers/auth';
import Tbody from '../components/Tbody';
// import InputNameSearch from '../components/InputNameSearch';

export default function Table() {
  const { filterList } = useContext(AuthContext);
  const keys = [];

  if (filterList.length > 0) {
    Object.keys(filterList[0]).forEach((key) => {
      keys.push(key);
    });
  }
  // console.log(keys);
  return (
    <table>
      {/* <InputNameSearch /> */}
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={ key }>{key}</th>
          ))}
        </tr>
      </thead>
      <Tbody />
    </table>
  );
}
