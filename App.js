import React, { Component } from 'react';
import NavBar from './components/navbar';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
  
  render() {
    return (
    
    <React.Fragment>
      <NavBar />
        <main>
          <LoginForm/>
        </main>
    </React.Fragment>
    );
  }
}

export default App;
