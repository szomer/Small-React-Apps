import Footer from '../footer/Footer';
import Header from '../header/Header';
import Login from '../login/Login';
import './App.scss';
import React, { useState } from 'react';

function App() {
  const [registered, setRegistered] = useState(false); // initialize state with false

  function onBtnclick() {
    // change the state registered
    registered ? setRegistered(false) : setRegistered(true);
  }

  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div className='content_wrapper'>
        <button onClick={onBtnclick} className='switchBtn btn btn-light'>
          {registered ? 'Sign Up Instead' : 'Sign In Instead'}
        </button>
        <Login registered={registered} />
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
