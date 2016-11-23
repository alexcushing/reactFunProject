import React, { Component } from 'react';
import './App.css';
import './Test.css';

/* eslint-disable */

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
  saveName(){
    console.log("hey", this.myInput.value)
  },
  render: function(){
    var myStyleClass = "btn";
    return(
      <div className="test-div">
        <div ref="hideMe" className="outerCenter">
          {/*}  <User />*/}
            Name: <input type="text" ref={(input) => this.myInput = input} className="innerCenter textAr" onChange={this.sendOut}></input>
            <button className={ myStyleClass } ref="submitter" onClick={this.saveName}>Submit</button>
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
          <h2>Get out of here<div className="usnmeNonme">,</div> <div className="usnme">Jamie.</div></h2>
        );
      }

    else if (name.toLowerCase() === "harry potter" || name.toLowerCase() === "harry" ){
            return (
              <h2>You're a wizard<div className="usnmeNonme">,</div> <div className="usnme">Harry.</div></h2>
            );
          }

    else if (name.toLowerCase() === "mark" || name.toLowerCase() === "mark zuckerberg" ){
            return (
              <h2>Marky Mark and the funky<div className="usnmeNonme"></div> <div className="usnme"> bunch.</div></h2>
            );
          }

    else if (name.toLowerCase() === "kanye" || name.toLowerCase() === "yeezy" || name.toLowerCase() === "kanye west" || name.toLowerCase() === "yeezy" || name.toLowerCase() === "yeezus" ){
            return (
              <h1 className="kanye">YeezuS</h1>
            );
          }

    else if (name.toLowerCase() === "jayz" || name.toLowerCase() === "jay z" || name.toLowerCase() === "monster" ){
            return (
              <h2>
              Sasquatch
              <div className="usnmeNonme">, </div> Godzilla
              <div className="usnmeNonme">, </div> King Kong
              <div className="usnmeNonme">, </div> Loch Ness
              <div className="usnmeNonme">, </div> Goblin
              <div className="usnmeNonme">, </div> <div className="usnme">Ghoul.</div>
             </h2>
            );
          }

    else if(name.length > 0){
      return (
        <h2>Welcome to React<div className="usnmeNonme">,</div> <div className="usnme">{name}.</div></h2>
      );
    }
      else{
        return (
          <h2>Welcome to React<div className="usnmeNonme">.</div></h2>
        );
      }
  }
});


export default App;
