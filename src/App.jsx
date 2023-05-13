import React from 'react';
//components
import Navbar from './components/Navbar';
import Service from './components/Service';
import Reason from './components/Reason';
import SomeService from './components/SomeService';
import Reservation from './components/Reservation.jsx';
import Footer from './components/Footer';

const App = () => {
  return (
      <div style={{maxWidth: '1400px', margin: 'auto'}}>
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