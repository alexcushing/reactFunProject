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
        return (
          <div>
          <div className="App">
            <div className="App-header">
              <User />
            </div>
          </div>
            <Test callSubmit={this.callSubmit}/>
          </div>
        );

  }
});

var User = React.createClass({
  render() {
    if (name.toLowerCase() === "james" || name.toLowerCase() === "jamie" ){
        return (
          <h2>Get out of here, Jamie.</h2>
        );
      }

    else if(name.length > 0){
      return (
        <h2>Welcome to React, {name}.</h2>
      );
    }
      else{
        return (
          <h2>Welcome to React.</h2>
        );
      }
  }
});


export default App;
