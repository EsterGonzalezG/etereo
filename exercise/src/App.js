import React, { Component } from 'react';
import './App.css';
import { getListPhones } from './data/Fetch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listPhones: []
    }

  }
  componentDidMount() {
    this.getPhones();
  }
  getPhones() {
    getListPhones()
      .then(listPhones => {
        this.setState({
          listPhones: listPhones
        })
      });
      
   }

  render() {
  
    return (
      <div className="App">
        <p></p>
      </div>
    );
  }
}

export default App;
