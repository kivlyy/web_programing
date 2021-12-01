import React from 'react';
import './App.css';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import {Navbar} from "react-bootstrap"
import About from './Pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          Pokemon List
        </Navbar.Brand>
        <NavLink to="/" style={{marginRight:"20px"}} className='text-light bg-dark'>Home</NavLink>
        <NavLink to="/about" className='text-light bg-dark'>About</NavLink>
      </Navbar>

      <Switch>
        <Route path='/about' component={About} />
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;

