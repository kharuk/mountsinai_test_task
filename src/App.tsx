import React from 'react';
import { DocsProvider } from 'store/context';
import { DoctorList } from './components/doctors-list/DoctorsList';

const App = () => {
  return (
    <DocsProvider>
      <DoctorList />
    </DocsProvider>
  );
};

export default App;
