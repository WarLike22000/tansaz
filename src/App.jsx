import React from 'react';
import { Container } from '@mui/material';
//components
import Navbar from './components/Navbar';
import Service from './components/Service';
import Reason from './components/Reason';
import SomeService from './components/SomeService';
import Reservation from './components/Reservation.jsx';
import Footer from './components/Footer';

const App = () => {
  return (
      <div>
        <Navbar />
        <Service />
        <Reason />
        <SomeService />
        <Reservation />
        <Footer />
      </div>
  );
};

export default App;