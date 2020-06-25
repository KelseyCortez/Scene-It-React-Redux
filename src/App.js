import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path= '/' component={MovieSearch}/>
      <Route path= '/watchlist' component={Watchlist}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
