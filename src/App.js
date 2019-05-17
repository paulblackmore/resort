import React from 'react';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import SingleRoom from './pages/SingleRoom/SingleRoom';
import Error from './pages/Error/Error';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </React.Fragment>
  );
}

export default App;
