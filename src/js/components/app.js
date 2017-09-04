import React from 'react';
import AppActions from '../actions/app-actions';

export default class App extends React.Component {
  render() {
    return <h1
      onClick={() => AppActions.addItem('this is the item')}
    >Flux</h1>;
  }
}