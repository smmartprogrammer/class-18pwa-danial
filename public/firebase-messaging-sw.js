importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

firebase.initializeApp({
	apiKey: 'AIzaSyAUxl6DSntSJNQcdIr8kyCDL4xQBV1e9Ds',
	authDomain: 'fir-messaging-cae85.firebaseapp.com',
	projectId: 'fir-messaging-cae85',
	storageBucket: 'fir-messaging-cae85.appspot.com',
	messagingSenderId: '110904821146',
	appId: '1:110904821146:web:5e255d68f9addbf3552623',
});

firebase.messaging();
