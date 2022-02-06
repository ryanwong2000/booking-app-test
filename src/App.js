import MyForm from './components/MyForm';
import Heading from './components/Heading';
import SillyForm from './components/SillyForm';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    silly: false
  };

  goSilly = () => {
    this.setState({ silly: !this.state.silly });
  };

  render() {
    return (
      <div>
        <Heading />
        {this.state.silly ? <SillyForm /> : <MyForm />}
        <div style={{ textAlign: 'center' }}>
          <button type="button" onClick={this.goSilly}>
            {this.state.silly ? 'the boring one 😴' : 'Go silly 😜'}
          </button>
        </div>
      </div>
    );
  }
}
