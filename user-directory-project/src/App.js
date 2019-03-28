import React, { Component } from 'react';
import './App.css';
import User from './components/User'
import NextBtn from './components/NextBtn';
import PrevBtn from './components/PrevBtn';
import data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
     id: 0,
    }
    this.nextUser = this.nextUser.bind(this);
    this.prevUser = this.prevUser.bind(this);

  }
  nextUser() {
    this.setState(
      this.state.id >= data.length - 1 ?
      {id: 0} :
      {id: this.state.id + 1}
    )
  }
  prevUser() {
    this.state.id === 0 ? 
    this.setState({id: data.length - 1}) :
    this.setState({id: this.state.id - 1});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <div id="home">Home</div>
        </header>
        
        <main className="App-background">

          <User id={this.state.id} />

          <section className="Utilities-bar">
            <PrevBtn prev={()=> this.prevUser()} />
           
              <div className="Utilities-btns">
                <button className="Button">Edit</button>
                <button className="Button">Delete</button>
                <button className="Button">New</button>
              </div>

              <NextBtn next={() => this.nextUser()} />
          </section>

        </main>
      </div>
    );
  }
}

export default App;
