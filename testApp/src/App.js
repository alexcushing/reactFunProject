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
  sendOut(){
    this.props.callSubmit(this.myInput.value)
  },
  render(){
    return(
      <div className="test-div">
        <div className="outerCenter">
          {/*}  <User />*/}
            Name: <input type="text" ref={(input) => this.myInput = input} className="innerCenter textAr" onChange={this.sendOut}></input>
        </div>
      </div>
    )
  }
});

var Body = React.createClass({
    getInitialState() {
      return {
        name:""
      };
    },

    callSubmit(myname){
      console.log("name: ")
      console.log(myname)
      name = myname;

      this.setState({name:myname});
    },

  render() {
    if(name.length > 0){
      return (
        <div>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React, {name}.</h2>
          </div>
        </div>
          <Test callSubmit={this.callSubmit}/>
        </div>
      );
    }
    else{
      return (
        <div>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React.</h2>
          </div>
        </div>
          <Test callSubmit={this.callSubmit}/>
        </div>
      );
    }
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
