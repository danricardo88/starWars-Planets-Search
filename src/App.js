import React from 'react';
import './App.css';
import InputNameSearch from './components/InputNameSearch';
// import Tbody from './components/Tbody';
import Table from './pages/Table';
import { AuthProvider } from './providers/auth';

function App() {
  return (
    <AuthProvider>
      <InputNameSearch />
      <br />
      <Table />
      {/* <Tbody /> */}
    </AuthProvider>
  );
}

export default App;
// DanRicardo88
