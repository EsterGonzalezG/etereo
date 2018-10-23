import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { getListPhones } from './data/Fetch';
import PhoneListContainer from './components/PhoneListContainer';
import PhoneDetailComponent from './components/PhoneDetailComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listPhones: [],
      loading: true
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
        });

      })
      .catch((err) => console.log(err));
  }

  render() {

    return (
      <Fragment>
        <Switch>
          <Route
            exact path='/'
            render={() => <PhoneListContainer listPhones={this.state.listPhones}
              loading={this.state.loading} />}
          />
          <Route
            path='/PhoneDetailComponent/:id'
            render={props => <PhoneDetailComponent match={props.match}
              listPhones={this.state.listPhones} loading={this.loading} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
