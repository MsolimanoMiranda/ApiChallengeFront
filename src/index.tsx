import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { makeStore } from './store/reducers/reducers';
import App from './App';
import { StoreContext } from 'redux-react-hook';
import { PersistGate } from 'redux-persist/integration/react';

const {store, persistor} = makeStore();


    ReactDOM.render(
        <StoreContext.Provider value={store}>
          <PersistGate persistor={persistor}>
            <App store={store} />
          </PersistGate>
        </StoreContext.Provider>
        , document.getElementById('root'));
    
    registerServiceWorker();