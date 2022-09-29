// import React, { useContext } from 'react';
// import { AuthContext } from '../providers/auth';

// export default function InputNameSearch() {
//   const { nameFiltered: { name }, setNameFiltered: { setName },
//   } = useContext(AuthContext);

//   return (
//     <form>
//       <label htmlFor="namePlanet">
//         <input
//           type="text"
//           value={ name }
//           placeholder="Search for your homeland"
//           data-testid="name-filter"
//           onChange={ ({ target }) => setName(target.value) }
//         />
// //         Search Planet
// //       </label>
// //     </form>
// //   );
// // }
// .filter((planet) => {
//   const filtrado = [];

//   selectedFilters.forEach((filter) => {
//     if (filter.comparison === 'maior que') {
//       filtrado.push(Number(planet[filter.column]) > Number(filter.value));
//     } else if (filter.comparison === 'menor que') {
//       filtrado.push(Number(planet[filter.column]) < Number(filter.value));
//     } else {
//       filtrado.push(Number(planet[filter.column]) === Number(filter.value));
//     }
//     console.log(filter);
//   });

//   return filtrado.every((filtrados) => filtrados);
// })
