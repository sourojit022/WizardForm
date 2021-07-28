import React, { Component } from 'react';
import '@coreui/icons/css/coreui-icons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './scss/style.css';

import Form from '../src/form';

class App extends Component {
  result = (values) => {
    console.log('result is', values);
    localStorage.setItem('user', JSON.stringify(values))
    // localStorage.setItem('user', values(fname))
   
  }

  render() {
    return (
      <Form onSubmit={this.result}/>
    );
  }
}

export default App;
