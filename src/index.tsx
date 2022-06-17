import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App';

store()
  .then((s) => {
    ReactDOM.render(
      // eslint-disable-next-line
      <Provider store={s}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('application'),
    );
  })
  .catch((error) => {
    // eslint-disable-next-line
    console.error(error.message);
  });
