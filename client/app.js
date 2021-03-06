import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
