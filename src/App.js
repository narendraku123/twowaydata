import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
       users: [
         {name: 'John', age: "23"},
         {name: 'cena', age: "24"},
         {name: 'eric', age: "21"},
         {name: 'faulkaner', age: "33"}
       ]

  };

        makemeuser = () => {

         this.setState ({
       users : [
         {name: 'Johncena', age: "33"},
         {name: 'cena', age: "24"},
         {name: 'eric', age: "21"},
         {name: 'phani', age: "32.5"}
       ]
     })
  }

NameChangeHandler = (event) => {
  this.setState ({
    users : [
       { name : 'keerthi',  age : "18" },
       { name: 'charu' , age : "34"},
       { name : event.target.value , age : "98"}

    ]
  })
}


   render() {
     const style = {
       color : 'blue',
       backgroundColor: 'green',
              font : 'bold',
              padding : '2px'
          }
     return (
       <div className="UsersRenderElementStyle">
       <h1> {this.state.title} </h1>
       <br/>
       <button

       style = { style }
       onClick={this.makemeuser} > Click to Reduse The Age</button>
       <hr/>
            <Person age={this.state.users[0].age} name ={this.state.users[0].name}  >  </Person>
            <Person age={this.state.users[1].age} name ={this.state.users[1].name}  >  </Person>
            <Person age={this.state.users[2].age}
                    name ={this.state.users[2].name}
                    Changed = { this.NameChangeHandler }  > My Hobbices : Racing </Person>

            </div>
)
}
}


export default App;
