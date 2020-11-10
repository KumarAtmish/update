import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Atmish', age:23 },
      { name: 'Rohan', age: 26 },
      { name: 'Ravi', age: 47 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    //console.log('was clicked');
    this.setState({ 
    persons: [
      { name: 'Atmish', age:23 },
      { name: 'Ranjan', age: 26 },
      { name: 'Ravi', age: 98 }
     ]
    })
  } 
  render() {
   return (
     <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p>This is really working!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
     
     </div>
   );
 }
}

export default App;
