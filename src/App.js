import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import SingleRoom from './pages/SingleRoom/SingleRoom';
import Error from './pages/Error/Error';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/single-room" component={SingleRoom} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
