import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import './index.css';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>

);

render(
  <Root />,
  document.getElementById('root'),
);

serviceWorker.unregister();
