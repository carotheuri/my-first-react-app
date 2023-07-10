import React from 'react';
import '../styles/App.css';
import Header from './Header';
import AboutUs from './AboutUs';

function App() {
  const price = '500'
  return (
    <React.Fragment>
      <div className='container-fluid'>
        <Header />
        <AboutUs />
      </div>
    </React.Fragment>
  );
}

export default App;
