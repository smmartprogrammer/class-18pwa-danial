import React from 'react';
import './App.css';
import firebase from './firebase';

function App() {
	const messaging = firebase.messaging();
	messaging
		.requestPermission()
		.then(() => {
			return messaging.getToken();
		})
		.then((token) => {
			console.log('token', token);
		});
	return <div className="App">hello world</div>;
}

export default App;
