import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Test.css';

class App extends Component {
  render() {
    return (
      <Body />
    );
  }
}

var Test = React.createClass({
  render(){
    return(
      <div className="test-div">
        <div className="outerCenter">
            <User />
            <input type="text" ref="myInput" className="innerCenter textAr" onChange={this.callSubmit}></input>
        </div>
      </div>
    )
  }
});

var Body = React.createClass({
  sub: function(){
    name = this.props.children.refs.myInput.value;
    console.log(name)
    console.log("called")
    this.setState({name:this.props.children.refs.myInput.value});
  },
  render() {
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React, {name}</h2>
        </div>
      </div>
        <Test callSubmit={this.sub} />
      </div>
    );
  }
});

var User = React.createClass({
  render(){
    return(
      <p>name: {name}</p>
    )
  }
});



export default App;
