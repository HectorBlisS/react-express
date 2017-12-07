import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import {Routes} from "./Routes";

class App extends Component {

    state = {
      perro:{}
    };

    componentWillMount(){
        fetch("http://localhost:9000/api")
            .then(r=>r.json())
            .then(perro=>this.setState({perro}))
    }

  render() {
        const {perro} = this.state;
    return (
      <div className="App">
        <header className="App-header">
            <Link to={"/"}>
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
          <h1 className="App-title">Welcome to {perro.perro}</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <Link to={"/about"}>
                <h2>About</h2>
            </Link>
        </div>

          <section>
              <Routes/>
          </section>

      </div>
    );
  }
}

export default App;
