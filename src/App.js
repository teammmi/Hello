import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from "./componnents/SayHello";
import Border from "./componnents/Border";

class App extends Component {
  constructor() {
  super();
  this.state = {
  name: "chalermchai oupawat",
  age: 30
  };
  }
  incrementAge(){
    this.setState({ age: this.state.age + 1});
  }
  decrementAge(){
    this.setState({ age: this.state.age - 1});
  }
  render() {
  return (
  <div className="App">
  <SayHello name={this.state.name} age={this.state.age}/>
  <p>age, {this.state.age}</p>
  <Border>
  <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>
  <button onClick={() => this.decrementAge()}>ลดอายุ</button>
  </Border>
  </div>
  );
  }
  }

export default App;
