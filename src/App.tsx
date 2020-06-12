import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './routes/PrivateRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = ({ store }:any) => (

	<Provider store={store}>
	<Routes />
	</Provider>

);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;