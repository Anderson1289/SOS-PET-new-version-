import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'api';

    this.post('/users', () => {
      return [
        {
          id: 1,
          name: 'Erika',
          email: 'erika.perciliano@gmail.com',
          password: 123456,
          username: 'erikaperciliano',
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
