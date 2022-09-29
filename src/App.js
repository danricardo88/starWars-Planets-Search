import React from 'react';
import './App.css';
// import InputNameSearch from './components/InputNameSearch';
import InputNumberSeach from './components/InputNumberSeach';
// import Tbody from './components/Tbody';
import Table from './pages/Table';
import { AuthProvider } from './providers/auth';

function App() {
  return (
    <AuthProvider>
      {/* <InputNameSearch /> */}
      <InputNumberSeach />
      <Table />
    </AuthProvider>
  );
}

export default App;
// DanRicardo88
