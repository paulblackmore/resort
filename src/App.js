import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import SingleRoom from './pages/SingleRoom/SingleRoom';
import Error from './pages/Error/Error';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
